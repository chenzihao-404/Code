
window.onload = function () {
    //用构造函数的好处 因为this是系统产生的 所以不用var储存变量 内存压力 加快网页加载速度

    function fullpageFunc() {
        // this.evtdown = 'mousedown'in addEventLisenter ? 'mousedown' : 'touchstart';
        // this.move = 'mousemove'in window ? 'mousemove' : 'touchmove';
        // this.up = 'mouseup'in window ? 'mouseup' : 'touchend';
        //page li
        this.content = document.getElementById('content');
        this.pageLi = this.content.getElementsByTagName('li');

        //nav li
        this.navUl = document.getElementById('nav');
        this.navpor = this.navUl.getElementsByTagName('li');
        this.navbh = this.navUl.getElementsByTagName('div')[0];

        //body height
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        // this.content.style.height = this.height;
        // this.pageLi.style.height = this.height;
        this.index = 0;
        this.bool = false;
        this.resetIndex;

    }

    fullpageFunc.prototype.init = function () {
        this.change();
        this.resetFunc();//监听屏幕尺寸变化
        this.pageclick();//导航条点击事件
        this.navclick();//点击显示隐藏导航条
        this.prohibitmenu();//禁止鼠标右击

        // this.pageMove();//pagemove
    }


    //监听屏幕尺寸变化
    fullpageFunc.prototype.resetFunc = function () {
        var _this = this;
        window.onresize = function () {
            _this.height = window.innerHeight;
            _this.width = window.innerWidth;
            // console.log("innerHTMLHight:", _this.height)
            // console.log("innerHTMLWidth:", _this.width)
            // console.log("window.this.resetIndex", _this.resetIndex)
            _this.content.style.marginTop = -_this.resetIndex * _this.height + "px";
            //width
            _this.change();

        }
    }

    //1.0页面随鼠标移动 --暂时不添加
    fullpageFunc.prototype.pageMove = function () {
        var _this = this;
        this.content.onmousedown = function (event) {
            _this.evt = event || window.event;
            _this.dy = _this.evt.clientY;
            _this.bool = true;
            document.onmousemove = function (event) {
                _this.evt = event || window.event;
                _this.my = _this.evt.clientY;
                _this.moveY = _this.my - _this.dy;
                if (_this.bool) {
                    _this.content.style.marginTop = _this.moveY + "px";
                }
            }

        }

        document.onmouseup = function () {
            _this.bool = false;
            if (Math.abs(_this.moveY) < 150) {
                _this.content.style.marginTop = -(_this.index * _this.height) + "px";


            }
            if (_this.moveY >= 150) {
                _this.index--;
                if (_this.index <= 0) {
                    _this.index = 0;
                }
                _this.content.style.marginTop = -(_this.index * _this.height) + "px";

            }
            if (_this.moveY <= -150) {
                _this.index++;
                if (_this.index > _this.pageLi.length - 1) {
                    _this.index = _this.pageLi.length - 1;
                }
                _this.content.style.marginTop = -(_this.index * _this.height) + "px";


            }
            // console.log(_this.index)
            // console.log("marginTop:", getComputedStyle(_this.content, null)["marginTop"])
        }
    }

    //2.0页面随导航条移动
    fullpageFunc.prototype.pageclick = function () {
        var _this = this;
        for (var i = 0; i < this.navpor.length; i++) {
            _this.navpor[i].index = i;
            _this.navpor[i].onclick = function () {
                for (var j = 0; j < _this.navpor.length; j++) {
                    _this.navpor[j].classList.remove('active');
                }
                _this.navpor[this.index].classList.add('active');
                _this.content.style.marginTop = -this.index * _this.height + "px";
                _this.resetIndex = this.index;

                // if(this.index == 1){
                //     document.getElementById('audioId').play();
                // }else{
                //     document.getElementsByClassName('player')[0].style.display = "none";
                // }
                // console.log("this.resetIndex",_this.resetIndex)
            }
        }
    }

    //3.0点击显示隐藏导航条
    fullpageFunc.prototype.navclick = function () {
        var _this = this;
        var ischange = true;
        this.navbh.onclick = function () {
            if (ischange) {
                _this.navUl.style.right = 5 + "px";
                this.innerHTML = ">";
                ischange = false;
            } else {
                _this.navUl.style.right = -60 + "px";
                this.innerHTML = "<";
                ischange = true;
            }
        }

    }
    //禁止鼠标右击事件
    fullpageFunc.prototype.prohibitmenu = function () {
        document.oncontextmenu = function () {
            return false;
        }
    }

    //自适应
    fullpageFunc.prototype.change = function () {
        var _this = this;
        if (_this.width < 1600 && _this.width > 1366) {
            document.getElementsByTagName('html')[0].style.fontSize = 14 + "px";
            console.log("html font-size:14px")

        } else if (_this.width < 1367) {
            document.getElementsByTagName('html')[0].style.fontSize = 12 + "px";
            console.log("html font-size:12px")

        } else if (_this.width > 2000) {
            document.getElementsByTagName('html')[0].style.fontSize = 18 + "px";
            console.log("html font-size:18px")

        } else {
            document.getElementsByTagName('html')[0].style.fontSize = 16 + "px";
            console.log("html font-size:16px")
        }

        if (_this.height < 570) {
            document.getElementsByClassName('player')[0].style.transform = "translateY(20rem)";
        } else {
            document.getElementsByClassName('player')[0].style.transform = "translateY(0rem)";

        }

    }



    var full = new fullpageFunc();
    full.init();


}





