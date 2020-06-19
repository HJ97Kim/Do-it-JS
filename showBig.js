var bigPic = document.querySelector('#cup');
var smallPics = document.querySelectorAll('.small');

for (var i = 0; i < smallPics.length; i++) { //노드 리스트의 각 요소에 접근
    smallPics[i].onclick = showBig; //요소를 누르면 showBig() 함수 실행
}

function showBig() {
    var newPic = this.src; //click 이벤트가 발생한 대상의 src 속성 값 가져옴
    bigPic.setAttribute('src', newPic); //newPic 값을 큰 이미지의 src 속성에 할당
}