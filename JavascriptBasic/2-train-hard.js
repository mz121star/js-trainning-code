/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-12-14
 * Time: 下午9:26
 * To change this template use File | Settings | File Templates.
 */


//找出数字数组中最大的元素（使用Match.max函数)
var a = [1, 2, 3, 4, 5];
Math.max.apply(null, a);


//转化一个数字数组为function数组（每个function都弹出相应的数字）
var a = [1, 2, 3, 4, 5];
var b = [];
for (var i = 0; i < a.length; i++) {
    (function (i) {
        b[i] = function () {
            alert(a[i]);
        }
    })(i)
}


//实现如下语法的功能：var a = (5).plus(3).minus(6); //2

    (function () {
        _temp = {
            plus:function (num) {
                return this + num;
            },
            minus:function (num) {
                return this - num;
            }
        }
        for (m in _temp) {
            if (_temp.hasOwnProperty(m))
                Number.prototype[m] = _temp[m];
        }
    })()

//实现如下语法的功能：var a = add(2)(3)(4); //9
        (function () {
            var add = function (num) {
                var result=num
                var fn= function(num) {
                      result+=num;
                      return fn;
                }
                fn.toString = fn.valueOf = function() { return result; };
                return fn;
            }
            window.plus = add;
        })()