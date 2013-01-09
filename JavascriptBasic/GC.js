 function a(){
     this.text='a';
 }
 function b(){
     this.text='b';
 }
 function c(){
     var x=new a();
     y=new b();
     return y;
 }
 c();
 alert(y.text);

 function a(){
     var i=0;
     return function(){
         alert(++i);
     }
 }
  var c=a();
  c();
 c();
 c();