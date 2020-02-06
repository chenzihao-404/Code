// pages/details/details.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        background: ['../../image/goods01.jpg', '../../image/goods02.jpg', '../../image/goods03.jpg'],
        indicatorDots: true,
        autoplay: false,
        interval: 2000,
        duration: 500,
        goods:{
                id:2,
                goodsName:"这个是商品",
                goodsImage: '../../image/goods01.jpg',
                goodsImgs: ['../../image/goods01.jpg', '../../image/goods02.jpg', '../../image/goods03.jpg'],
                goodsPrice:"1000",
                goodsOldPrice:"2000",
                isCollect:false,
                goodsContent:"蜜蜂从植物的花中采取含水量约为75%的花蜜或分泌物，存入自己第二个胃中，在体内多种转化的作用下，经过15天左右反复酝酿各种维生素、矿物质和氨基酸丰富到一定的数值时，同时把花蜜中的多糖转变成人体可直接吸收的单糖葡萄糖、果糖，水分含量少于23%存贮到巢洞中，用蜂蜡密封。蜂蜜是糖的过饱和溶液，低温时会产生结晶，生成结晶的是葡萄糖，不产生结晶的部分主要是果糖。",
                goodsDetail:"../../image/IMG_0466.JPG"
            },
            num:0
    },
    Car:function(){
        wx.switchTab({
            url: '/pages/car/car'
        })
    },
    getCar:function(){
        // wx.setStorageSync('GoodsCarlist', '这个是我存储的数据，你找找看');
        // console.log(wx.getStorageSync("GoodsCarlist"));
        // wx.removeStorageSync("GoodsCarlist");
        // wx.clearStorageSync();//清空所有数据

        var CarData = {
            id: this.data.goods.id,
            goodsName: this.data.goods.goodsName,
            goodsImage: this.data.goods.goodsImage,
            goodsPrice: this.data.goods.goodsPrice,
            num: 1
        }
        var GoodsCarList = wx.getStorageSync("GoodsCarList");
        // 1.判断数据存储区是否有数据
        if(GoodsCarList){
        // 2.有数据
        //     2.1有相同数据，数量加一
            var flag = true;
            for(var i = 0; i < GoodsCarList.length;i++){
                if(GoodsCarList[i].id == CarData.id){
                    GoodsCarList[i].num += 1;
                    flag = false;
                }
            }
        //     2.2没有相同数据，添加数组
            if(flag){
                GoodsCarList.push(CarData);
            }

            wx.setStorageSync("GoodsCarList", GoodsCarList)
        }else{
        // 3.没有数据
            wx.setStorageSync("GoodsCarList", [CarData])
        }

        this.setData({
            num:wx.getStorageSync("GoodsCarList").length
        })

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        var _this = this;
        wx.request({
            url: 'http://192.168.153.1:3000/getGoodsIdData', //仅为示例，并非真实的接口地址
            header: {
                'content-type': 'application/json' // 默认值
            },
            data:{
                "id":options.id
            },
            success(res) {
                _this.setData({
                    goods: res.data
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function (options) {
        this.setData({
            num: wx.getStorageSync("GoodsCarList").length
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})