var changeTitle='Welcome to DOM';
const differentNameTitle=document.getElementById('diffTitle');
differentNameTitle.innerHTML=changeTitle;

var name="The Automobile industry";
var connect='includes';
var components='the design, development, manufacturing, marketing, and selling of';
var goods='motor vehicles.';

const newParContent=document.getElementById('text');
newParContent.innerHTML=`<p>${name} ${connect} ${components}</br> ${goods}</p>`;