//HTML에서 요소들을 JS 변수로 참조하기 위해 querySelector 메서드를 사용하여 각 요소 선택
const inputId = document.querySelector('#inputId'); // ID 입력 요소
const inputPassword = document.querySelector('#inputPassword'); // Password 입력 요소
const inputCustomer = document.querySelector('#inputCustomer'); // Customer 입력 요소
const inputMessage = document.querySelector('#msg'); // Message 입력 요소
const inputCartype = document.querySelector('#carType'); // Car type 선택 요소
const carlist = document.querySelector('#car-list'); // Car list를 표시할 요소
const addButton = document.querySelector('#add-button'); // 추가 버튼
const image = document.querySelector('#image-register'); // 이미지 업로드 요소

//변수 초기화: inputId, inputPassword, inputCustomer, inputMessage, inputCartype, carlist, addButton, image: 
//각각의 변수는 HTML 요소를 JavaScript로 참조하기 위해 사용된다.
//JavaScript에서는 querySelector 메서드를 사용하여 HTML의 요소를 선택한다. 
//예를 들어, document.querySelector('#inputId')는 id가 "inputId"인 HTML 요소를 선택한다.

// keyCount 변수를 초기화하여 각 차량의 고유한 키 값을 추적합니다.
let keyCount = 0;

// 값을 담아줄 배열 생성
let array =""

const addCar = () => {

    // 새로운 차량 항목을 생성합니다.
    const item = document.createElement('div');
    
    // 차량 정보 요소들을 생성합니다.
    const inputIdText = document.createElement('div');
    const inputPasswordText = document.createElement('div'); 
    const inputCustomerText = document.createElement('div');
    const inputMessageText = document.createElement('div');
    const inputCartypeText = document.createElement('div');
    const imageInput = document.createElement('img');

    // 차량의 고유한 키 값을 설정합니다.
    const key = keyCount;
    keyCount += 1;

    // 생성된 요소들을 차량 항목에 추가합니다.
    item.appendChild(imageInput);
    item.appendChild(inputIdText);
    item.appendChild(inputPasswordText); 
    item.appendChild(inputCustomerText); 
    item.appendChild(inputMessageText); 
    item.appendChild(inputCartypeText); 
    carlist.appendChild(item);

    // CSS 클래스를 추가하여 스타일을 적용합니다.
    item.classList.add('car-item'); 

    inputIdText.textContent = `ID: ${inputId.value}`; 
    inputPasswordText.textContent = ` PW: ${inputPassword.value}`; 
    inputCustomerText.textContent = ` Customer name: ${inputCustomer.value}`;
    inputCartypeText.textContent = ` Car type: ${inputCartype.value}`;
    inputMessageText.textContent = ` Message: ${inputMessage.value}`;

    // 이미지의 크기를 설정합니다.
    imageInput.style.width = '200px'; 
    imageInput.style.height = 'auto'; 
    
    // 이미지 파일이 선택되었는지 확인하고, 선택된 경우 이미지를 표시합니다.
    if (true) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imageInput.src = e.target.result;
            array= e.target.result
            console.log(image.files[0].name)    
            localStorage.st = JSON.stringify(array)
        }
        reader.readAsDataURL(image.files[0]);
    }

    console.log(JSON.parse(localStorage.st))
};

// 추가 버튼을 클릭하거나 ID 입력 요소에서 Enter 키를 누를 때 addCar 함수를 호출합니다.
addButton.addEventListener('click', addCar);
inputId.addEventListener('keyup', (event) => {
    const ENTER = 13;
    if (event.keyCode === ENTER) {
        addCar();
        console.log(1);
    }
});