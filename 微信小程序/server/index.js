// import 和 export ES6规范

//commonJS规范 导出exports , module.exports,  导入require

//导入express
let express = require('express');

//创建express实例
let app = express();
let goodsdata = [
  {
    id: 'a0001',
    categoryid: 1,
    goodsName: "小白裙",
    goodsImage: "./images/aaaa.jpg",
    goodsAddress: "广州",
    goodsPrice: '190.12',
    goodsContent: '小清新裙子',
    goodsHotPrice: '145.00',
    isHot: false,
    goodsDetail: "./images/IMG_0466.JPG",
    detailImgs: ['./images/aaaa.jpg', './images/aaaa.jpg']
  },
  {
    id: 'a0003',
    categoryid: 1,
    goodsName: "玛瑙手镯",
    goodsImage: "./images/ccc.jpg",
    goodsAddress: "杭州",
    goodsPrice: '3000.87',
    goodsContent: '柬埔寨天然手镯',
    goodsHotPrice: '145.00',
    isHot: false,
    goodsDetail: "./images/IMG_0466.JPG",
    detailImgs: ['./images/ccc.jpg', './images/ccc.jpg', './images/ccc.jpg']
  },
  {
    id: 'a0004',
    categoryid: 1,
    goodsName: "帆布鞋",
    goodsImage: "./images/xxx.jpg",
    goodsAddress: "深圳",
    goodsPrice: '89.00',
    goodsContent: '怎么穿都穿不破鞋子',
    goodsHotPrice: '45.00',
    isHot: true,
    goodsDetail: "./images/IMG_0466.JPG",
    detailImgs: ['./images/xxx.jpg']
  },
  {
    id: 'shuihu0001',
    categoryid: 2,
    goodsName: "滤水壶滤芯三支装",
    goodsImage: "./images/shuihu1.jpg",
    goodsAddress: "深圳",
    goodsPrice: '99.00',
    goodsContent: '高效过滤，享安心好水 / 有效滤除余氯，减少水垢、重金属等有害物质 / 360°进水流道设计 / 甄选优质滤材，保证过滤效果',
    goodsHotPrice: '78.00',
    isHot: true,
    goodsDetail: "./images/IMG_0466.JPG",
    detailImgs: ['./images/detail_shuihu1.jpg']
  },
  {
    id: 'shuihu0002',
    categoryid: 2,
    goodsName: "滤水壶",
    goodsImage: "./images/shuihu2.png",
    goodsAddress: "深圳",
    goodsPrice: '68.00',
    goodsContent: '多效滤芯，可有效去除余氯及水垢 / 储水量大，可满足多人使用 / 进口食品级材质',
    goodsHotPrice: '54.00',
    isHot: false,
    goodsDetail: "./images/IMG_0466.JPG",
    detailImgs: ['./images/detail_shuihu2.png']
  },
  {
    id: 'shuihu0003',
    categoryid: 3,
    goodsName: "滤水壶滤芯15芯（赠滤水壶1只）",
    goodsImage: "./images/shuihu3.jpg",
    goodsAddress: "深圳",
    goodsPrice: '495.00',
    goodsContent: '高效过滤，享安心好水',
    goodsHotPrice: '398.00',
    isHot: true,
    goodsDetail: "./images/IMG_0466.JPG",
    detailImgs: ['./images/detail_shuihu3.jpg']
  },
  {
    id: 'shuihu0004',
    categoryid: 3,
    goodsName: "滤水壶一壶4芯套装",
    goodsImage: "./images/shuihu4.jpg",
    goodsAddress: "深圳",
    goodsPrice: '198.00',
    goodsContent: '高效过滤，享安心好水',
    goodsHotPrice: '187.00',
    isHot: true,
    goodsDetail: "./images/IMG_0466.JPG",
    detailImgs: ['./images/detail_shuihu4.jpg']
  },
  {
    id: 'wurenji0001',
    categoryid: 4,
    goodsName: "无人机4K版套装",
    goodsImage: "./images/wurenji1.jpg",
    goodsAddress: "深圳",
    goodsPrice: '2999.00',
    goodsContent: '易上手 / 高品质影像 / 安全 / 小巧便携',
    goodsHotPrice: '2888.00',
    isHot: false,
    goodsDetail: "./images/IMG_0466.JPG",
    detailImgs: ['./images/detail_wurenji1.jpg']
  },
  {
    id: 'luoxuanjiang0001',
    categoryid: 4,
    goodsName: "无人机快拆式螺旋桨4K版",
    goodsImage: "./images/luoxuanjiang.jpg",
    goodsAddress: "深圳",
    goodsPrice: '49.00',
    goodsContent: '尺寸大 / 气动效率高 / 惯量低',
    goodsHotPrice: '26.00',
    isHot: false,
    goodsDetail: "./images/IMG_0466.JPG",
    detailImgs: ['./images/detail_luoxuanjiang.jpg']
  },
  {
    id: 'baohujia0001',
    categoryid: 5,
    goodsName: "无人机保护架",
    goodsImage: "./images/baohujia.jpg",
    goodsAddress: "深圳",
    goodsPrice: '39.00',
    goodsContent: '一组四片，专为小米无人机设计，有效保护螺旋桨，让飞行更放心',
    goodsHotPrice: '36.00',
    isHot: true,
    goodsDetail: "./images/IMG_0466.JPG",
    detailImgs: ['./images/detail_baohujia.jpg']
  },
  {
    id: 'dianchi0001',
    categoryid: 6,
    goodsName: "无人机电池（零售版）",
    goodsImage: "./images/dianchi.jpg",
    goodsAddress: "深圳",
    goodsPrice: '499.00',
    goodsContent: '5100mAh大电量 / 抽屉式电池仓 / 8重智能保护',
    goodsHotPrice: '486.00',
    isHot: true,
    goodsDetail: "./images/IMG_0466.JPG",
    detailImgs: ['./images/detail_dianchi.jpg']
  },
  {
    id: 'erji0001',
    categoryid: 6,
    goodsName: "头戴式耳机 轻松版",
    goodsImage: "./images/erji1.jpg",
    goodsAddress: "深圳",
    goodsPrice: '199.00',
    goodsContent: '洁净外观设计 / 封闭式音腔 / 舒适佩戴 / 手机直推 / 青春配色',
    goodsHotPrice: '176.00',
    isHot: false,
    goodsDetail: "./images/IMG_0466.JPG",
    detailImgs: ['./images/detail_erji1.jpg']
  },
  {
    id: 'erji0002',
    categoryid: 7,
    goodsName: "头戴式耳机 轻松版",
    goodsImage: "./images/erji2.jpg",
    goodsAddress: "深圳",
    goodsPrice: '199.00',
    goodsContent: '石墨烯发声振膜 / 被动低频辐射器设计 / 封闭式音腔设计 / 手机直推高保真音质',
    goodsHotPrice: '165.00',
    isHot: true,
    goodsDetail: "./images/IMG_0466.JPG",
    detailImgs: ['./images/detail_erji2.jpg']
  },
  {
    id: 'erji0003',
    categoryid: 8,
    goodsName: "头戴式耳机 轻松版",
    goodsImage: "./images/erji3.jpg",
    goodsAddress: "深圳",
    goodsPrice: '419.00',
    goodsContent: '7.1 虚拟环绕立体声引擎 ／ LED 炫彩游戏光效 ／ 40mm创新喇叭单元设计 ／ 双麦克风 ENC 环境降噪技术 ／ 双接口可拆换技术',
    goodsHotPrice: '388.00',
    isHot: false,
    goodsDetail: "./images/IMG_0466.JPG",
    detailImgs: ['./images/detail_erji3.jpg']
  },
  {
    id: 'erji0004',
    categoryid: 8,
    goodsName: "头戴式耳机 轻松版",
    goodsImage: "./images/erji4.jpg",
    goodsAddress: "深圳",
    goodsPrice: '329.00',
    goodsContent: '一键美音 / 一键变声 / 原唱消音 / 耳返',
    goodsHotPrice: '298.00',
    isHot: false,
    goodsDetail: "./images/IMG_0466.JPG",
    detailImgs: ['./images/detail_erji4.jpg']
  },
  {
    id: 'erji0005',
    categoryid: 8,
    goodsName: "双单元半入耳式耳机",
    goodsImage: "./images/erji5.jpg",
    goodsAddress: "深圳",
    goodsPrice: '129.00',
    goodsContent: '半入耳式舒适佩戴 / 动圈+陶瓷喇叭双单元声学架构 / 高韧性线材+微机电麦克风线控 / 90°贴心插头',
    goodsHotPrice: '112.00',
    isHot: true,
    goodsDetail: "./images/IMG_0466.JPG",
    detailImgs: ['./images/detail_erji5.jpg']
  },
  {
    id: 'erji0006',
    categoryid: 8,
    goodsName: "蓝牙耳机Air",
    goodsImage: "./images/erji6.jpg",
    goodsAddress: "深圳",
    goodsPrice: '165.00',
    goodsContent: '真无线设计 / 单双耳佩戴 / AAC 高清音质 / 降噪通话 / 触控操作',
    goodsHotPrice: '123.00',
    isHot: true,
    goodsDetail: "./images/IMG_0466.JPG",
    detailImgs: ['./images/detail_erji6.jpg']
  }
]
//设置静态目录
app.use(express.static('public'));
// http://192.168.54.65:3000
// http://192.168.54.65:3000/getGoodsIdData?id=a0003
// http://192.168.54.65:3000/category
// http://192.168.54.65:3000/categoryIdgetgoods?id=1

// http://192.168.54.65:3000
app.get('/', (req, res) => {
  //req: 请求对象
  //res: 响应对象
  //将数据响应给前端
  res.json(goodsdata);
})
// http://192.168.54.65:3000/getGoodsIdData?id=a0003
app.get("/getGoodsIdData", (req, res) => {
  let id = req.query.id;

  let data = goodsdata.find(item => item.id == id);
  res.json(data);
})

// http://192.168.54.65:3000/category
app.get("/category", (req, res) => {
  let data = [
    {
      "id": 1,
      "iconUrl": "./images/icon-qiandao.png",
      "iconText": "签到"
    },
    {
      "id": 2,
      "iconUrl": "./images/icon-fujin.png",
      "iconText": "附近"
    },
    {
      "id": 3,
      "iconUrl": "./images/icon-zhanhui.png",
      "iconText": "展会"
    },
    {
      "id": 4,
      "iconUrl": "./images/icon-fuli.png",
      "iconText": "福利"
    },
    {
      "id": 5,
      "iconUrl": "./images/icon-muma.png",
      "iconText": "玩乐"
    },
    {
      "id": 6,
      "iconUrl": "./images/icon-tiyu.png",
      "iconText": "体育"
    },
    {
      "id": 7,
      "iconUrl": "./images/icon-xingxing.png",
      "iconText": "周边"
    },
    {
      "id": 8,
      "iconUrl": "./images/icon-qinzi.png",
      "iconText": "亲子"
    },
  ]
  res.json(data);
})

// http://192.168.54.65:3000/categoryIdgetgoods?id=1
app.get("/categoryIdgetgoods",(req,res)=>{
  let id = req.query.id;
  let categorydata = goodsdata.filter(item=>item.categoryid ==id);
  res.json(categorydata);
})

app.listen(3000, () => {
  console.log('the server running at http://192.168.54.65:3000');
})