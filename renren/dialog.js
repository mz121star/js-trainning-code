/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-1-9
 * Time: 下午10:54
 * To change this template use File | Settings | File Templates.
 */
(function (window, undefined) {

    var _dialog = {},
        type = {
            confirm:"confirm",
            alert:"alert",
            prompt:"prompt"
        },
        ondrag=function(){
            var posX;
            var posY;
            fdiv = document.getElementById("win_dialog");
            fdiv.style.left
            console.log("drag");
            document.getElementById("win_dialog").onmousedown=function(e)
            {
                console.log("ondrag");
                if(!e) e = window.event;  //IE
                posX = e.clientX - parseInt(fdiv.offsetLeft);
                posY = e.clientY - parseInt(fdiv.offsetTop);
                document.onmousemove = mousemove;
            }
            document.onmouseup = function()
            {
                document.onmousemove = null;
            }
            function mousemove(ev)
            {
                console.log(ev);
                if(ev==null) ev = window.event;//IE
                fdiv.style.left = (ev.clientX - posX) + "px";
                fdiv.style.top = (ev.clientY - posY) + "px";
            }

        }

    _dialog = {
        alert:function (msg) {
            var _mask=document.createElement("div");
            var _win = document.createElement("div");
            var _btn = document.createElement("input");
            var _msg = document.createElement("span");
            _mask.id="win_mask";
            _win.id = "win_dialog";
            _btn.type = "button";
            _btn.value = "OK";
            _msg.innerHTML = msg;
            _win.appendChild(_msg);
            _win.appendChild(_btn);
            _mask.appendChild(_win);
            document.body.appendChild(_mask);
            _btn.onclick = function (e) {
                var e = e || window.event;
                if (!document.all) e.stopPropagation()
                else window.event.cancelBubble = true
                document.body.removeChild(_mask);
                _win = null;

            }
            if(typeof addEventListener!="undefined"){
            _btn.addEventListener("click", function () {
                if(_win)
                this.parentNode.removeChild(_win);
            }, false);
            }
            ondrag();
        },
        confirm:function (msg, callback) {
            var _mask=document.createElement("div");
                _win = document.createElement("div"),
                _btn = document.createElement("input"),
                _cancel = document.createElement("input"),
                _msg = document.createElement("span");
            _mask.id="win_mask";
            _win.id = "win_dialog";
            _btn.type = _cancel.type = "button";
            _btn.value = "OK";
            _cancel.value = "Cancel"
            _msg.innerHTML = msg;
            _win.appendChild(_msg);
            _win.appendChild(_btn);
            _win.appendChild(_cancel);
            _mask.appendChild(_win);
            document.body.appendChild(_mask);

            _btn.onclick = function () {
                document.body.removeChild(_mask);
                _win = null;
                callback(true)

            }
//            _btn.addEventListener("click", function () {
//                this.parentNode.parentNode.removeChild(_win);
//                    return true;
//            }, false);

            _cancel.onclick = function () {
                document.body.removeChild(_mask);
                _win = null;
                callback(false)
            }
//            _cancel.addEventListener("click", function () {
//                this.parentNode.parentNode.removeChild(_win);
//                return false;
//            }, false);
        },
        prompt:function (msg, inputmsg) {

        }
    }
    window.dialog = _dialog;

})(window, undefined)

