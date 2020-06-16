var firstDay = new Date('2020-03-15');
var now = new Date();
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var PassedTime = toNow - toFirst
var PassedDay = Math.round(PassedTime/(24*60*60*1000));
document.querySelector('#accent').innerText = `${PassedDay}일`;

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days) {
    var future = toFirst + days*(1000*60*60*24);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var date = someday.getDate();
    document.querySelector('#date' + days).innerText = `${year}년 ${month}월 ${date}일`;
}