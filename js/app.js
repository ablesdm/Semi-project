function submitPost() {
    const nickname = document.getElementById('nickname').value;
    const carName = document.getElementById('carName').value;
    const content = document.getElementById('content').value;
    const imageFile = document.getElementById('image').files[0];

    const reader = new FileReader();
    
    reader.onloadend = function() {
        // 파일 읽기가 완료되면, onloadend 이벤트가 발생합니다.
        const base64Image = reader.result; // 이미지의 Base64 문자열

        const postId = Date.now().toString(); // 간단한 고유 ID 생성
        const postData = {
            nickname,
            carName,
            content,
            image: base64Image,
        };

        localStorage.setItem(postId, JSON.stringify(postData));

        alert('게시물이 등록되었습니다.');
    };

    if (imageFile) {
        reader.readAsDataURL(imageFile); // 파일을 읽어서 Base64로 변환합니다.
    } else {
        // 이미지가 없는 경우의 처리
        const postId = Date.now().toString();
        const postData = { nickname, carName, content };
        localStorage.setItem(postId, JSON.stringify(postData));
        alert('게시물이 등록되었습니다.');
    }
}
