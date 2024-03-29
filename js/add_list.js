const image_test = document.getElementsByClassName("test"); // html <div> test클래스 네임을 가져온다.
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function () {

    const save_test = JSON.parse(localStorage.getItem('st')); // 로컬 스토리지에서 이미지 주소 배열을 가져옵니다. 항목이 없다면 빈 배열을 사용합니다.
    
    console.log(save_test);

    if (save_test && save_test.length > 0) { // 저장된 이미지 주소 배열이 비어있지 않은지 확인.
        for (let i = 0; i < save_test.length; i++) {
            const imageInput = document.createElement('img'); // 새로운 이미지 요소를 생성.
            imageInput.src = save_test[i]; // 이미지 요소의 src 속성을 저장된 이미지 주소로 설정.
            imageInput.width = 300; // 이미지의 가로 크기를 설정.
            imageInput.classList.add('test'); // 이미지에 "test" 클래스를 추가.
            image_test[0].appendChild(imageInput); // 생성된 이미지 요소를 ".test" 클래스를 가진 div 요소에 추가.
        }
        localStorage.removeItem('st'); // "st" 키에 해당하는 데이터를 제거.
    } else {
        alert('이미지가 없습니다.'); // 저장된 이미지 주소 배열이 비어있을 경우 사용자에게 알립니다.

    }
   
});