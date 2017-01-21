var products = {
    data: [
        {
            "postdate": "Tue, 10 Jan 2017 03:26:14 -0000",
            "description": "这里是测试产品1号的描述文字。这个产品是用来测试微信小程序前端布局显示的。",
            "title": "测试产品1号",
            "price": 10.0,
            "category_id": 1,
            "id": 1,
            "owner_id": 1,
            "images": [
                "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
                "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
            ],
            "editable": false
        },
        {
            "postdate": "Tue, 10 Jan 2017 03:26:14 -0000",
            "description": "这里是测试产品2号的描述文字。这个产品是用来测试微信小程序前端布局显示的。凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数",
            "title": "测试产品2号",
            "price": 10.0,
            "category_id": 1,
            "id": 2,
            "owner_id": 1,
            "images": [
                "http://s6.gigacircle.com/media/s6_53d11acd8e6bf.jpg",
                "http://www.d1net.com/uploadfile/2014/0725/20140725030356649.jpg",
                "http://www.qsl.net/dl8ybm/pic/testbild4-3.png",
                "http://www.qsl.net/dl8ybm/pic/testbild4-3.png",
                "http://www.qsl.net/dl8ybm/pic/testbild4-3.png"
            ],
            "editable": true
        },
        {
            "postdate": "Tue, 10 Jan 2017 03:26:14 -0000",
            "description": "这里是测试产品1号的描述文字。这个产品是用来测试微信小程序前端布局显示的。",
            "title": "测试产品1号",
            "price": 10.0,
            "category_id": 1,
            "id": 1,
            "owner_id": 1,
            "images": [
                "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
                "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
            ],
            "editable": false
        },
        {
            "postdate": "Tue, 10 Jan 2017 03:26:14 -0000",
            "description": "这里是测试产品1号的描述文字。这个产品是用来测试微信小程序前端布局显示的。",
            "title": "测试产品1号",
            "price": 10.0,
            "category_id": 1,
            "id": 1,
            "owner_id": 1,
            "images": [
                "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
                "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
            ],
            "editable": false
        },
        {
            "postdate": "Tue, 10 Jan 2017 03:26:14 -0000",
            "description": "这里是测试产品1号的描述文字。这个产品是用来测试微信小程序前端布局显示的。",
            "title": "测试产品1号",
            "price": 10.0,
            "category_id": 1,
            "id": 1,
            "owner_id": 1,
            "images": [
                "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
                "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
            ],
            "editable": false
        },
    ]
}

var categories = {
    data: [
        {
            id: 1,
            name: "图书"
        },
        {
            id: 2,
            name: "电子设备"
        },
        {
            id: 3,
            name: "衣物"
        },
        {
            id: 4,
            name: "化妆品"
        },
        {
            id: 5,
            name: "玩具"
        }
    ] 
}
var comments ={
    data:[
        {
            id: 1,
            name:"用户1",
            text: "这个能还价吗？啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
        },
        {
            id: 2,
            name:"用户2",
            text: "不能啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
        },
        {
            id: 3,
            name:"楼主",
            text: "是的。"
        },
    ]
}

var API = {
    getProductList: function (cb) {
        typeof cb == 'function' && cb(products)
    },
    getProductDetail: function (id, cb) {
        var product = {
            data: products.data[id-1]
        }
        typeof cb == 'function' && cb(product)
    },
    submitProduct: function (id, data, cb) {
        //TBD
    },
    getCategoryList: function(cb) {
        typeof cb == 'function' && cb(categories)
    }
}


module.exports.API = API
