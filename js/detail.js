// 가정된 데이터 예시
const postData = {
    nickname: '사용자1',
    carName: '차량명 예시',
    content: '내용 예시입니다.',
    imageUrl: 'image-url.jpg'
};

function displayPostDetail() {
    const detailContainer = document.getElementById('postDetail');
    detailContainer.innerHTML = `
        <p>닉네임: ${postData.nickname}</p>
        <p>차량명: ${postData.carName}</p>
        <p>내용: ${postData.content}</p>
        <img src="${postData.imageUrl}" alt="게시물 이미지" />
    `;
}

displayPostDetail();
