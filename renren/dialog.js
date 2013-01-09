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
        };
    _dialog = {
        alert:function (msg) {
            var _win = document.createElement("div");
            var _btn = document.createElement("input");
            var _msg = document.createElement("span");
            _btn.type = "button";
            _btn.value = "OK";
            _msg.innerHTML = msg;
            _win.appendChild(_msg);
            _win.appendChild(_btn);
            document.body.appendChild(_win);
            _btn.onclick = function (e) {
                var e = e || window.event;
                if (!document.all) e.stopPropagation()
                else window.event.cancelBubble = true
                this.parentNode.parentNode.removeChild(_win);

            }
//            _btn.addEventListener("click", function () {
//                this.parentNode.removeChild(_win);
//            }, false);
        },
        confirm:function (msg) {
            var _win = document.createElement("div"),
                _btn = document.createElement("input"),
                _cancel = document.createElement("input"),
                _msg = document.createElement("span");
            _btn.type = _cancel.type = "button";
            _btn.value = "OK";
            _cancel.value = "Cancel"
            _msg.innerHTML = msg;
            _win.appendChild(_msg);
            _win.appendChild(_btn);
            _win.appendChild(_cancel);
            document.body.appendChild(_win);

            _btn.onclick = function () {
                this.parentNode.parentNode.removeChild(_win);
                return true;

            }
//            _btn.addEventListener("click", function () {
//                this.parentNode.parentNode.removeChild(_win);
//                    return true;
//            }, false);

            _cancel.onclick = function () {
                this.parentNode.parentNode.removeChild(_win);
                return false;
            }
//            _cancel.addEventListener("click", function () {
//                this.parentNode.parentNode.removeChild(_win);
//                return false;
//            }, false);
        },
        prompt:function (msg, inputmsg) {

        }
    }
   window.dialog=_dialog;

})(window, undefined)