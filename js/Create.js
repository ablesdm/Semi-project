//웹 페이지의 모든 내용이 로드될때, 즉 DOM이 완전히 구성되었을때
document.addEventListener("DOMContentLoaded", () => {
    //문서 객체를 가져옵니다.
    const input_carName = document.querySelector("#carName")
    const input_nickName = document.querySelector("#nickName")
    const input_carType = document.querySelector("#carType")
    const inputTextArea = document.querySelector("#createText")
    const createList = document.querySelector("#createList")
    const addButton = document.querySelector("#createButton")
    // 이미지 입력 요소 선택
    const imageInput = document.querySelector("#image")

    //변수 선언
    let keyCount = 0

    //함수 선언
    const add = () => {
        //입력 양식에 내용이 없다면 추가하지 않습니다.
        if (input_carName.value.trim() === '') {
            alert('정보를 입력!')
            return
        }

        //문서 객체를 설정 및 추가 합니다.
        const item = document.createElement('div')
        const newTextArea = document.createElement('textarea')
        const text = document.createElement('span')
        const button = document.createElement('button')
        //텍스트 에어리어 값을 담을 새로운 span 요소 생성
        const textAreaContent = document.createElement('span') 
        //텍스트 에어리어에서 가져온 값을 span 요소의 텍스트로 설정한다.
        textAreaContent.textContent = inputTextArea.value; 

        //문서 객체를 식별할 키를 생성 합니다.
        const key = keyCount
        keyCount += 1

        //item 객체를 조작하고 추가
        item.setAttribute('data-key', key)
        item.appendChild(text)
        //span 요소를 할 일 목록 항목에 추가한다.
        item.appendChild(textAreaContent)
        item.appendChild(button)
        createList.appendChild(item)

        //text 객체 조작
        text.textContent = input_carName.value + ' '
            + input_nickName.value + ' '
            + input_carType.value + ' '

        newTextArea.value = inputTextArea.value //textarea는 value 속성을 사용해서 값을 넘기고 받아야 한다.

        //button 객체 조작
        button.textContent = '제거'
        button.addEventListener('click', () => {
            remove(key) //key로 매개변수를 넣었다 
            console.log(key)
        })

        //입력 양식의 내용을 비워줍니다.
        input_carName.value = ''
        input_nickName.value = ''
        input_carType.value = ''
        inputTextArea.value = ''

        // 이미지 파일이 선택되었는지 확인
        if(imageInput.files.length > 0) {
            const file = imageInput.files[0]
            const reader = new FileReader();

            reader.onload = function(e) {
                const img = document.createElement('img')
                img.src = e.target.result //FileReader 결과를 이미지 src로 설정한다.
                img.style.width = '100px' //이미지 크기를 설정, 필요에 맞게 조절가능
                item.appendChild(img); //생성한 이미지 태그를 item에 추가한다.
            }
            reader.readAsDataURL(file); //파일을 데이터 URL로 읽기
        }
    }

    const remove = (key) => {
        //식별 키로 문서 객체를 제거
        const item = document.querySelector(`[data-key="${key}"]`)
        if (item) {
            createList.removeChild(item)
        }
    }

    //이벤트 연결
    addButton.addEventListener('click', add)
    input_carName.addEventListener('keyup', (event) => {
        //입력 양식에서 Enter 키를 누르면 바로 add() 함수를 호출
        const ENTER = 13
        if (event.keyCode === ENTER) {
            add()
        }
    })
})
