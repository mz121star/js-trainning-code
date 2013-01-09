//--------------------------------
var name="hisoft";
function Test(){
    alert(name);
     var name="pactera";
}


//--------------------------------

if (!("a" in window)) {
    var a = 1;
}
alert(a);

//arguments问题
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2); //undefined

function b(x, y, a) {
    arguments[2] = 10;
    alert(arguments[2]);
}
b(1, 2); //10