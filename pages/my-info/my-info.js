//product-edit.js
var api = require('../../common/mockapi.js')
var config = require('../../config.js')
Page({
    data: {
        product: {},
        newpost: true,
        title_max: 30,
        price_max: 10,
        cur_enabled: config.Settings.CURRENCY_ENABLED,
        cur_names: ['HKD', 'RMB'],
        cat_names: []
    },
    //事件处理函数
    onLoad: function (option) {
        console.log(`product edit onLoad for ${option.id?option.id:'new'} product`)
        var that = this
        api.API.getCategoryList(function(res){
            var names = []
            res.data.forEach(function(category){
                names.push(category.name)
            })
            that.setData({
                cat_names: names
            })
        })
        if (option.id) {
            this.setData({
                newpost: false
            })
            api.API.getProductDetail(option.id, function(res){
                that.setData({
                    product: res.data
                })
            })
        } else {
            this.setData({
                'product.category_id': 1,
                'product.currency_id': 1
            })
        }
    },
    bindCurrencyChange: function(e) {
        this.setData({
            'product.currency_id': parseInt(e.detail.value)+1
        })
    },
    bindCategoryChange: function(e) {
        this.setData({
            'product.category_id': parseInt(e.detail.value)+1
        })
    },
    bindPriceBlur: function(e) {
        this.setData({
            'product.price': parseFloat(e.detail.value)
        })
    },
    bindTitleInput: function(e) {
        this.setData({
            'product.title': e.detail.value
        })
    },
    bindDescInput: function(e) {
        this.setData({
            'product.description': e.detail.value
        })
    },
    bindFormSubmit: function(e) {
        api.API.submitProduct(option.id, e.detail.value, function(res){
            console.log("form submitted")
        })
    },
    bindAddImgTap: function() {
        wx.chooseImage({
          count: 9, 
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: function (res) {
            var tempFilePaths = res.tempFilePaths
            console.log(tempFilePaths)
          }
        })
    }
})
