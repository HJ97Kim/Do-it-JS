var itemList = [];
var addBtn = document.querySelector('#add'); //#add요소 가져와 addBtn으로 저장
addBtn.addEventListener('click', addList); //addBtn을 클릭하면 addList 함수 실행
function addList() {
    var item = document.querySelector('#item').value; //텍스트 필드 내용 가져옴
    if (item != null) {
        itemList.push(item);
        document.querySelector('#item').value = ''; //id = 'item'인 요소 값을 지움
        document.querySelector('#item').focus(); //텍스트 필드에 focus() 함수 적용
    }
    showList(); //목록을 표시하는 showList() 함수 실행
}

function showList() {
    var list = '<ul>'; //목록시작 ul태그 저장
    for (var i = 0; i < itemList.length; i++) { //배열 요소마다 반복
        list += '<li>' + itemList[i] + "<span class='close' id=" + i + ">X</span></li>"; //각 요소를 li태그로 묶음
    }
    list += '</ul>'; //목록을 끝내는 ul태그 저장
    document.querySelector('#itemList').innerHTML = list; //list 변숫값 표시
    var remove = document.querySelectorAll('.close'); //삭제 버튼을 변수로저장. 배열의 형태가 됨
    for (var i = 0; i < remove.length; i++) {
        remove[i].addEventListener('click', removeList); //요소를 클릭하면 removeList() 실행
    }
}

function removeList() {
    var id = this.getAttribute('id'); //this(누른 삭제 버튼)의 id 값 가져와 id 변수에 저장
    itemList.splice(id, 1);
    showList();
}

