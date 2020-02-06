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
        // categoryArr:[
        //     {
        //         "iconUrl":"../../image/icon-qiandao.png",
        //         "iconText":"签到"
        //     },
        //     {
        //         "iconUrl": "../../image/icon-fujin.png",
        //         "iconText": "附近"
        //     },
        //     {
        //         "iconUrl": "../../image/icon-zhanhui.png",
        //         "iconText": "展会"
        //     },
        //     {
        //         "iconUrl": "../../image/icon-fuli.png",
        //         "iconText": "福利"
        //     },
        //     {
        //         "iconUrl": "../../image/icon-muma.png",
        //         "iconText": "玩乐"
        //     },
        //     {
        //         "iconUrl": "../../image/icon-tiyu.png",
        //         "iconText": "体育"
        //     },
        //     {
        //         "iconUrl": "../../image/icon-xingxing.png",
        //         "iconText": "周边"
        //     },
        //     {
        //         "iconUrl": "../../image/icon-qinzi.png",
        //         "iconText": "亲子"
        //     },
        // ],
        // goodsList: [
        //     {
        //         id: 1,
        //         goodsName: "这个是好商品1",
        //         goodsImage: "../../image/goods01.jpg",
        //         goodsAddress: "广州",
        //         goodsPrice: "1111.00"
        //     },
        //     {
        //         id: 1,
        //         goodsName: "这个是好商品2",
        //         goodsImage: "../../image/goods01.jpg",
        //         goodsAddress: "广州",
        //         goodsPrice: "1111.00"
        //     },
        //     {
        //         id: 1,
        //         goodsName: "这个是好商品3",
        //         goodsImage: "../../image/goods01.jpg",
        //         goodsAddress: "广州",
        //         goodsPrice: "1111.00"
        //     },
        // ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    onclick:function(options){
        wx.setStorageSync("num", options.target.id);
        wx.switchTab({
            url: '/pages/category/category'
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
    onShow: function () {
        // 获取分类数据
        this.getCategorydata();
        // 获取商品列表数据
        this.getGoodsListsdata();
    },

    getCategorydata:function(){

        var _this = this;
        wx.request({
            url: 'http://192.168.153.1:3000/category', //仅为示例，并非真实的接口地址
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                // _this.setData({
                //     categoryArr: res.data
                // })
                console.log("aaaaaa",res)
            }
        })
    },

    getGoodsListsdata:function(){
        var _this = this;
        wx.request({
            url: 'http://192.168.153.1:3000', //仅为示例，并非真实的接口地址
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                _this.setData({
                    goodsList: res.data
                })
            }
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