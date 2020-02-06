// pages/car/car.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // goodsList: [
        //     {
        //         id: 1,
        //         goodsName: "这个是好商品1",
        //         goodsImage: "../../image/goods01.jpg",
        //         goodsPrice: "1111.00",
        //         num: 5
        //     },
        //     {
        //         id: 1,
        //         goodsName: "这个是好商品1",
        //         goodsImage: "../../image/goods01.jpg",
        //         goodsPrice: "1111.00",
        //         num: 1
        //     },
        //     {
        //         id: 1,
        //         goodsName: "这个是好商品1",
        //         goodsImage: "../../image/goods01.jpg",
        //         goodsPrice: "1111.00",
        //         num: 1
        //     },
        // ],
        total:0
    },
    carReduce: function (option) {
        var index = option.target.dataset.index; //获取数据下标
        var num = this.data.goodsList[index].num; // 数量
        var key = "goodsList[" + index + "].num"; //修改数据对象
        console.log("asdas",index)
        var obj = {};
        obj[key] = num <= 1 ? 1 : --num; 

        this.setData(obj);
        // 更新新数据
        wx.setStorageSync("GoodsCarList", this.data.goodsList);
        this.onShow();
    },
    carAdd: function (option) {
        var index = option.target.dataset.index; //获取数据下标
        var num = this.data.goodsList[index].num; // 数量
        var key = "goodsList[" + index + "].num"; //修改数据对象

        var obj = {};
        obj[key] = ++num;

        this.setData(obj);
        // 更新新数据
        wx.setStorageSync("GoodsCarList", this.data.goodsList);

        this.onShow();
    },
    carDel: function (option) {
        var index = option.target.dataset.index; //获取数据下标
        var carlists = this.data.goodsList;
        carlists.splice(index,1);

        this.setData({
            goodsList:carlists
        })

        // 更新新数据
        wx.setStorageSync("GoodsCarList", this.data.goodsList);
        this.onShow();

    },

    getPay:function(){  
        wx.navigateTo({
            url:"../pay/pay"
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log("----------onload--------------");
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log("----------onShow--------------");
        var getcardata = wx.getStorageSync("GoodsCarList");
        var totaldata = 0;
        for(var i = 0;i < getcardata.length;i++){
            totaldata += getcardata[i].goodsPrice * getcardata[i].num
        }
        this.setData({
            goodsList: getcardata,
            total:totaldata.toFixed(2)
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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