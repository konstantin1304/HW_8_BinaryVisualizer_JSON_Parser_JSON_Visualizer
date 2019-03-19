var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.scale(0.5,0.5);

function drawCanvas (canvasObj, x,y) {
    let canvas = canvasObj;
    let context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(x,y);
    context.stroke();
    return context;

}

function CanvasMock(width, height) {

    this.mock = [];
    this.width = width;
    this.height = height;
    this.context = new ContextMock(this.mock);


    this.getContext = (string) =>
    {
        this.mock.push('[getContext ' + string + ']');
        return this.context
    }
}

function ContextMock(mock) {

    this.mock = mock;


    this.beginPath = () =>
    {
        this.mock.push('[beginPath]')
    };

    this.moveTo = (x, y) =>
    {
        this.mock.push('[moveTo ' + x + ', ' + y + ']')
    };

    this.lineTo = (x, y) =>
    {
        this.mock.push('[lineTo ' + x + ', ' + y + ']')
    };

    this.stroke = () =>
    {
        this.mock.push('[stroke]')
    }
}

var visualTree = new VisualTree(context);

visualTree.insert(8);
visualTree.insert(4);
visualTree.insert(12);
visualTree.insert(2);
visualTree.insert(6);
visualTree.insert(10);
visualTree.insert(14);
let a  = new BinaryTree();
a.insert(8);
a.insert(4);
a.insert(12);
a.insert(2);
a.insert(6);
a.insert(10);
a.insert(14);

console.log(visualTree.getPosition(a.find(8)));
console.log(visualTree.getPosition(a.find(4)));
console.log(visualTree.getPosition(a.find(12)));
console.log(visualTree.getPosition(a.find(2)));
console.log(visualTree.getPosition(a.find(6)));
console.log(visualTree.getPosition(a.find(10)));
console.log(visualTree.getPosition(a.find(14)));


let btnInsert = document.getElementById("btnInsert");
let btnFind = document.getElementById("btnFind");
let btnRemove = document.getElementById("btnRemove");
let inputValue = document.getElementById("textVal");
let btnEmpty = document.getElementById("btnEmpty");
let btnArray = document.getElementById("btnArray");
let btnString = document.getElementById("btnString");
let btnReload = document.getElementById("btnReload");
let outputVal = document.getElementById("outputVal");

btnReload.addEventListener('click', () => {
    location.reload();
});

btnString.addEventListener('click', () => {
    outputVal.value = visualTree.toString();
});

btnArray.addEventListener('click', () => {
    outputVal.value = visualTree.toArray();
});

btnEmpty.addEventListener('click', () => {
    visualTree.clear();
    outputVal.value = "";
});

btnRemove.addEventListener('click', () => {
    visualTree.remove(+inputValue.value);
    outputVal.value = "";
});

btnFind.addEventListener('click', () => {
    visualTree.find(+inputValue.value);
    outputVal.value = "";
});

btnInsert.addEventListener('click', () => {
    visualTree.insert(+inputValue.value);
    outputVal.value = "";
});