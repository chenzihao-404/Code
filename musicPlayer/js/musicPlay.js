
function musicPlay() {
    this.audio = document.getElementById("audioId"); //audio

    this.Progressbtn = document.getElementsByClassName('Progress-btn')[0];
    this.Progressbar = document.getElementsByClassName('Progress-bar')[0];
    this.searchCont = document.getElementsByClassName('searchCont')[0];
    this.searchLiClick = this.searchCont.getElementsByTagName('li');
    this.currentTimeShow = document.getElementsByClassName('currentTime')[0];
    this.durationTimeShow = document.getElementsByClassName('durationTime')[0];
    this.audio = document.getElementById("audioId");

    this.musicArr = [ './music/White Cherry-MELANCHOLY.mp3',
        './music/Reynard Silva-the way i still love you.mp3',
        './music/太阳-邱振哲.mp3',
        './music/这个世界会好吗.mp3',
        './music/李志-热河.mp3'];
    this.timeOutSearchIndex = 0;
    this.timeOutLocadIndex = 0;
    this.timeOutbool = false;
    this.loacdName = ['White Cherry-MELANCHOLY','Reynard Silva-the way i still love you', '太阳-邱振哲','李志-这个世界会好吗', '李志-热河'];
}


musicPlay.prototype.init = function () { // 
    this.tabSelect(); //btn-tab
    this.musicPlay(); // music play pause
    this.ProgressMove();//Progress-btn move
    this.musicTime(); //time
    this.oneclick(); // oneclick
}


musicPlay.prototype.tabSelect = function () { //本地歌曲、搜索歌曲隐藏和显示
    var _this = this;
    $(function () {
        $(".search-btn").click(function () {
            $('.search').slideDown(800);
            $('.select-btn li').eq(1).addClass('active').siblings('li').removeClass('active');
            $('.locadCont').slideUp(800);
            if ($('.inp').val().length > 0 && $('.inp').val() != "") {
                _this.render();
            }
            _this.timeOutbool = true;
        });

        $('.selectdownUp').click(function () {
            $(".search").slideToggle(800);
        })

        //bottom active tab
        $('.select-btn li').eq(0).click(function () {
            $('.locadCont').slideDown(800);
            $('.select-btn li').eq(0).addClass('active').siblings('li').removeClass('active');
        });

        $('.select-btn li').eq(1).click(function () {
            $('.locadCont').slideUp(800);
            $('.select-btn li').eq(1).addClass('active').siblings('li').removeClass('active');
        });

    })


}

musicPlay.prototype.musicPlay = function () { //音乐播放暂停
    var _this = this;

    //play pause tab
    $(".play-btn").click(function () {
        var index = 0;
        $(this).hide();
        $(".pause-btn").show();
        $(".pause-btn").css({ "marginLeft": "15px" });
        _this.prevNextBtn(index, _this.musicArr, null);
        _this.audio.play();
        console.log('play')
    })

    $(".pause-btn").click(function () {
        $(this).hide();
        $(".play-btn").show();
        _this.audio.pause();
        console.log('pause')

    })


    for (var i = 0; i < _this.musicArr.length; i++) {
        $('.locadCont li').eq(i).click(function () {
            this.loacdName = ['White Cherry-MELANCHOLY','Reynard Silva-the way i still love you', '太阳-邱振哲','李志-这个世界会好吗','李志-热河'];
            var index = $(this).index();
            $('#audioId').attr('src', "" + _this.musicArr[index]);
            $('.musicContent').html('' + this.loacdName[index]);
            $('.bgcMove').css({ 'backgroundImage': 'url(./images/404.jpg)' });
            _this.playBtnhide();
            _this.audio.play();
            _this.prevNextBtn(index, _this.musicArr, false);
            console.log('locadPlay')
            _this.timeOutLocadIndex = index;//全局记录index
            // console.log("this.timeoutLoacdIndex",_this.timeOutLocadIndex)
            // console.log("locadThis", _this.loacdName)
        });
    }

}

musicPlay.prototype.prevNextBtn = function (index, arrUrl, bool) { //音乐上下首切换
    var _this = this;
    $('.prev-btn').click(function () {
        index--;
        if (index < 0) {
            index = arrUrl.length - 1;
        }
        _this.playBtnhide();
        $('#audioId').attr('src', "" + arrUrl[index]);
        if (bool) {
            $('.bgcMove').css({ 'backgroundImage': 'url(' + _this.picContArr[index] + ')' });
            $('.musicContent').html('' + _this.musicName[index]);
        } else {
            $('.bgcMove').css({ 'backgroundImage': 'url(./images/404.jpg)' });
            this.loacdName = ['White Cherry-MELANCHOLY','Reynard Silva-the way i still love you', '太阳-邱振哲','李志-这个世界会好吗', '李志-热河'];
            $('.musicContent').html('' + this.loacdName[index]);
            // console.log("preThis", _this.loacdName)
        }
        _this.audio.play();
        console.log("prev-music")
        _this.timeOutSearchIndex = index;
        _this.timeOutLocadIndex = index;
        console.log("prev this.timeoutLoacdIndex", _this.timeOutLocadIndex)
        console.log("prev  _this.timeOutSearchIndex", _this.timeOutSearchIndex)

    });

    $('.next-btn').click(function () {
        index++;
        if (index > arrUrl.length - 1) {
            index = 0;
        }
        _this.playBtnhide();
        $('#audioId').attr('src', "" + arrUrl[index]);
        if (bool) {
            $('.bgcMove').css({ 'backgroundImage': 'url(' + _this.picContArr[index] + ')' });
            $('.musicContent').html('' + _this.musicName[index]);

        } else {
            $('.bgcMove').css({ 'backgroundImage': 'url(./images/404.jpg)' });
            this.loacdName = [ 'White Cherry-MELANCHOLY', 'Reynard Silva-the way i still love you', '太阳-邱振哲','李志-这个世界会好吗', '李志-热河'];
            $('.musicContent').html('' + this.loacdName[index]);
            // console.log("nextThis", _this.loacdName)
        }
        _this.audio.play();
        console.log("next-music")
        _this.timeOutSearchIndex = index;
        _this.timeOutLocadIndex = index;
        console.log("next this.timeoutLoacdIndex", _this.timeOutLocadIndex)
        console.log("next  _this.timeOutSearchIndex", _this.timeOutSearchIndex)
    });
}

musicPlay.prototype.playBtnhide = function () { //设置按钮隐藏显示
    $(".pause-btn").show();
    $(".play-btn").hide();
    $(".pause-btn").css({ "marginLeft": "15px" });
}


musicPlay.prototype.ProgressMove = function () {//进度条移动

    var _this = this;
    var moveChange = false;
    var x = 0; //记录当前点位置
    var moveX = 0;
    var moveIng = 0;
    this.Progressbtn.onmousedown = function (event) {
        var evt = event || window.event;
        var dx = evt.clientX;
        console.log("dx", dx)
        moveChange = true;
        document.onmousemove = function (event) {
            var evt = event || window.event;
            var mx = evt.clientX;

            moveX = mx - dx; //按下鼠标的位置 - 移动鼠标的位置 = 位移值
            var moveMax = _this.Progressbar.offsetWidth;
            moveIng = moveX + x;
            if (moveChange) {
                if (moveIng < 0) {
                    moveIng = 0;
                }
                if (moveIng > moveMax - 10) {
                    moveIng = moveMax - 10;
                }

                _this.Progressbtn.style.marginLeft = moveIng + "px";
                var Propor = moveIng / 140;
                _this.audio.currentTime = _this.totalTime * Propor;
            }
        }
    }

    document.onmouseup = function () {
        moveChange = false;
        x = moveIng;//记录当前位置
    }



}



musicPlay.prototype.musicTime = function () {
    var _this = this;

    this.audio.oncanplay = function () { //监听当前音乐总时长
        _this.totalTime = _this.audio.duration;
        _this.durationTimeShow.innerHTML = _this.timeFunc(_this.totalTime);
        console.log("durationTime", _this.totalTime)
    }

    this.audio.ontimeupdate = function () { //监听当前音乐进度
        _this.currentTime = _this.audio.currentTime;
        _this.currentTimeShow.innerHTML = _this.timeFunc(_this.currentTime) + "/";
        var Propor = _this.currentTime / _this.totalTime;
        // console.log("Propor:", Propor)
        _this.Progressbtn.style.marginLeft = 140 * Propor + "px";
        if (Propor >= 1) {
            _this.currentTime = 0;
            Propor = _this.currentTime / _this.totalTime;
            _this.Progressbtn.style.marginLeft = 140 * Propor + "px";
            _this.audio.play();
        }
        // if (Propor >= 1) { //timeout tab nextmusic
        //     _this.timeOutLocadIndex++;
        //     _this.timeOutSearchIndex++;

        //     if (_this.timeOutbool) {
        //         $('#audioId').attr('src', "" + _this.musicUrlarr[_this.timeOutSearchIndex]);
        //         console.log("timeout-playsearchmusic")
        //     } else {
        //         $('#audioId').attr('src', "" + _this.loacdName[_this.timeOutLocadIndex++]);
        //         console.log("timeout-playlocadmusic")
        //     }
        //     _this.audio.play();
        // }

    }
}

musicPlay.prototype.render = function () { //渲染
    var _this = this;
    this.ajaxGetCont(function (res) {
        _this.musicUrlarr = [];
        _this.picContArr = [];
        _this.musicName = [];
        var html = "";
        for (let i = 0; i < res.result.length; i++) {

            html += '<li><p class="pic Cont-pic"></p><p class="music-text">' + res.result[i].author + '-' + res.result[i].title + '</p></li>';
            _this.musicUrlarr[i] = "" + res.result[i].url;
            _this.picContArr[i] = "" + res.result[i].pic;
            _this.musicName[i] = "" + res.result[i].author + '-' + res.result[i].title;

        }
        $('.searchCont').html(html);
        _this.searchpic = document.getElementsByClassName('Cont-pic');
        for (let i = 0; i < _this.picContArr.length; i++) {
            _this.searchpic[i].style.backgroundImage = 'url(' + _this.picContArr[i] + ')';
        }

        //点击播放搜索歌曲
        for (var j = 0; j < $('.searchCont li').length; j++) {
            $('.searchCont li').eq(j).click(function () {
                var index = $(this).index();
                $('#audioId').attr('src', "" + _this.musicUrlarr[index]);
                _this.prevNextBtn(index, _this.musicUrlarr, true);
                $('.bgcMove').css({ 'backgroundImage': 'url(' + _this.picContArr[index] + ')' });
                $('.musicContent').html('' + _this.musicName[index]);
                _this.playBtnhide();
                _this.audio.play();
                console.log('searchPlay')
                // console.log(_this.musicUrlarr[0])
            });
        }
    });

}

musicPlay.prototype.ajaxGetCont = function (callback) { //ajax

    $(function () {
        $.ajax({
            type: "get",
            url: 'https://api.apiopen.top/searchMusic',
            data: {
                "name": "" + $('.inp').val()
            },
            beforeSend: function () {
                $(".spinner").css({ display: "block" });
                $(".sousuo").hide();
            },
            success: function (res) {
                $(".spinner").hide();
                $(".sousuo").hide();
                callback(res);
                // console.log(res)
            }
        });
    })
}

musicPlay.prototype.timeFunc = function (second) {
    var m = Math.floor(second / 60);
    m = m < 10 ? "0" + m : m;
    var s = Math.floor(second % 60);
    s = s < 10 ? "0" + s : s;
    var str = m + ":" + s;
    return str;
}

musicPlay.prototype.oneclick = function () {
    var _this = this;
    var index  = 0;
    $('#nav li').eq(1).one('click', function () {
        document.getElementById('audioId').play();
        _this.playBtnhide();
        _this.prevNextBtn(index, _this.musicArr, false); 
    })
}

var musicPlay = new musicPlay();
musicPlay.init();

    //进度： 播放完切换下一首 本地歌曲/搜索歌曲

