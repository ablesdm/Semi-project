const inputId = document.querySelector('#inputId');
const inputPassword = document.querySelector('#inputPassword'); 
const inputCustomer = document.querySelector('#inputCustomer');
const inputMessage = document.querySelector('#msg');
const inputCartype = document.querySelector('#carType');
const carlist = document.querySelector('#car-list');
const addButton = document.querySelector('#add-button');
const image = document.querySelector('#image-register');
//변수 초기화: inputId, inputPassword, inputCustomer, inputMessage, inputCartype, carlist, addButton, image: 
//각각의 변수는 HTML 요소를 JavaScript로 참조하기 위해 사용된다.
//JavaScript에서는 querySelector 메서드를 사용하여 HTML의 요소를 선택한다. 
//예를 들어, document.querySelector('#inputId')는 id가 "inputId"인 HTML 요소를 선택한다.

let keyCount = 0;
let array = [];


const addCar = () => {
    const item = document.createElement('div');
    const inputIdText = document.createElement('div');
    const inputPasswordText = document.createElement('div'); 
    const inputCustomerText = document.createElement('div');
    const inputMessageText = document.createElement('div');
    const inputCartypeText = document.createElement('div');
    const imageInput = document.createElement('img');

    const key = keyCount;
    keyCount += 1;

    item.appendChild(imageInput);
    item.appendChild(inputIdText);
    item.appendChild(inputPasswordText); 
    item.appendChild(inputCustomerText); 
    item.appendChild(inputMessageText); 
    item.appendChild(inputCartypeText); 
    carlist.appendChild(item);

    item.classList.add('car-item'); // CSS 클래스 추가

    inputIdText.textContent = `ID: ${inputId.value}`; 
    inputPasswordText.textContent = ` PW: ${inputPassword.value}`; 
    inputCustomerText.textContent = ` Customer name: ${inputCustomer.value}`;
    inputCartypeText.textContent = ` Car type: ${inputCartype.value}`;
    inputMessageText.textContent = ` Message: ${inputMessage.value}`;

    
    imageInput.style.width = '200px'; 
    imageInput.style.height = 'auto'; 


    // GPT4 선생님 코드

    if(image.files.length > 0) {
        const imageUrl = URL.createObjectURL(image.files[0]);
        imageInput.src = imageUrl;
        array = imageUrl
        console.log(image.files[0].name)    
        localStorage.st = JSON.stringify(array)
    }

    console.log(JSON.parse(localStorage.st))
   
    // GPT3 선생님 코드
        // const reader = new FileReader();
        // reader.onload = function (e) {
        //     imageInput.src = e.target.result;
        //     console.log(e.target.result)
        // }
        // reader.readAsDataURL(image.files[0]);
};

addButton.addEventListener('click', addCar);



// inputId.addEventListener('keyup', (event) => {
//     const ENTER = 13;
//     if (event.keyCode === ENTER) {
//         addCar();
//         console.log(1);
//     }
// });