// 시작 연도와 종료 연도 설정
var startYear = 1800;
var endYear = 2023;

// 로딩 시간 (밀리초)
var loadingTime = 7000;

// 숫자 증가 및 표시 함수
function increaseNumber() {
    var counterElement = document.getElementById('counter');

    // 시작 연도와 종료 연도 사이의 숫자를 1초마다 증가
    var currentYear = startYear;
    var interval = setInterval(function () {
        counterElement.innerHTML = currentYear;

        // 종료 연도에 도달하면 종료
        if (currentYear === endYear) {
            clearInterval(interval);
            counterElement.innerHTML = '2023';
        }

        // 다음 연도로 업데이트
        currentYear++;
    }, 15);

    // 로딩 시간(밀리초) 후에 setInterval 종료
    setTimeout(function () {
        clearInterval(interval);
        counterElement.innerHTML = '2023';
    }, loadingTime);
}

// 페이지 로드 시 숫자 증가 시작
increaseNumber();



// 이동 버튼 표시 함수
function showMoveButton() {
    var moveButton = document.getElementById('moveButton');
    moveButton.style.display = 'block';

    // 스르륵 나타나는 애니메이션 적용
    var opacity = 0;
    var interval = setInterval(function () {
        opacity += 0.05;
        moveButton.style.opacity = opacity;

        if (opacity >= 1) {
            clearInterval(interval);
        }
    }, 100);
}

// 페이지 로드 시 숫자 증가 시작
window.addEventListener('load', function () {
    increaseNumber();
});

// 숫자 증가 및 페이지 이동 버튼 표시 함수
function increaseNumber() {
    var counterElement = document.getElementById('counter');

    // 시작 연도와 종료 연도 사이의 숫자를 1초마다 증가
    var currentYear = startYear;
    var interval = setInterval(function () {
        counterElement.innerHTML = currentYear;

        // 종료 연도에 도달하면 종료
        if (currentYear === endYear) {
            clearInterval(interval);
            counterElement.innerHTML = '2023';
            showMoveButton(); // 페이지 이동 버튼 표시
        }

        // 다음 연도로 업데이트
        currentYear++;
    }, 15);

    // 로딩 시간(밀리초) 후에 setInterval 종료
    setTimeout(function () {
        clearInterval(interval);
        counterElement.innerHTML = '2023';
        showMoveButton(); // 페이지 이동 버튼 표시
    }, loadingTime);
}