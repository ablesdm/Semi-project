function login() {
    // 실제로는 서버로부터 인증을 받아야 하지만, 여기서는 간단히 아이디와 비밀번호를 확인하는 예제를 작성합니다.
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // 간단한 예제로 "user" 아이디와 "password" 비밀번호로만 로그인을 허용하도록 작성합니다.
    if (username === 'user' && password === '1234') {
        // 로그인 성공
        localStorage.setItem('isLoggedIn', 'true'); // 로그인 상태를 로컬 스토리지에 저장
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('logoutForm').style.display = 'block';
    } else {
        alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn'); // 로그인 상태를 로컬 스토리지에서 제거
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('logoutForm').style.display = 'none';
}

// 페이지가 새로고침되거나 다시 방문했을 때, 로그인 상태를 확인하여 로그인 상태를 유지하도록 작성합니다.
window.onload = function () {
    if (localStorage.getItem('isLoggedIn')) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('logoutForm').style.display = 'block';
    }
}
