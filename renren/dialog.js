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
        generator = function (type, okcallback, cancelcallback) {
            var _mask = document.createElement("div");
            var _win = document.createElement("div");
            var _btn = document.createElement("input");
            var _cancel;
            var _promptcontent;
            var _msg = document.createElement("span");
            _mask.id = "win_mask"
            _win.id = "win_dialog";
            _btn.type = "button";
            _btn.value = "OK";


            if (type === type.confirm) {
                _cancel = document.createElement("input");
                _cancel.type = "button";
                _cancel.value = "Cancel";
            }
            if (type === type.prompt) {
                _promptcontent = document.createElement("input");
                _promptcontent.type = "text";
                _promptcontent.id = "win_dialog_prompt_text";
            }

            _msg.innerHTML = msg;
            _win.appendChild(_msg);
            _win.appendChild(_btn);
            _mask.appendChile(_win);
            document.body.appendChild(_mask);
            return _mask;
        };
    _dialog = {
        alert:function (msg) {
            var _win = document.createElement("div");
            var _btn = document.createElement("input");
            var _msg = document.createElement("span");
            _win.id = "win_dialog";
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
                _win = null;

            }
//            _btn.addEventListener("click", function () {
//                this.parentNode.removeChild(_win);
//            }, false);
        },
        confirm:function (msg, callback) {
            var _win = document.createElement("div"),
                _btn = document.createElement("input"),
                _cancel = document.createElement("input"),
                _msg = document.createElement("span");
            _win.id = "win_dialog";
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
                callback(true)

            }
//            _btn.addEventListener("click", function () {
//                this.parentNode.parentNode.removeChild(_win);
//                    return true;
//            }, false);

            _cancel.onclick = function () {
                this.parentNode.parentNode.removeChild(_win);
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