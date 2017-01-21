//product-list.js
var api = require('../../common/mockapi.js')
Page({
  data: {
    products: {},
    categories: {},
    categ_all: "selected"
  },
  //事件处理函数
    bindCatTap: function(event) {
        var i = parseInt(event.currentTarget.id)-1
        console.log(`${i}-th category label tapped`)
        //修改categories对象后再用setData更改
        //toggle selected 类，自定义属性似乎无效
        var ctmp = this.data.categories
        ctmp[i].selected = ctmp[i].selected=="selected"?"":"selected"
        this.setData({
            categories: ctmp,
            categ_all: ""
        })
    },
    bindCatAllTap: function() {
        //如果【全部】处于未选中状态，点击后清除其他标签
        if (this.data.categ_all != "selected") {
            var ctmp = this.data.categories
            ctmp.forEach(function(c){
                c.selected = ""
            })
            this.setData({
                categories: ctmp,
                categ_all: "selected"
            })
        }
    },
  bindListTap: function(event) {
    wx.navigateTo({
      url: `../product-detail/product-detail?id=${event.currentTarget.id}`
    })
  },
  bindAddTap: function(event) {
    wx.navigateTo({
      url: `../product-edit/product-edit`
    })
  },
  bindSearchConfirm: function(){
    console.log('search confirmed')
      api.API.searchProduct(function(res){
          this.setData({
              products: res.data
          })
      })
  },
  onLoad: function () {
    console.log('list onLoad')
    var that = this
    api.API.getProductList(function(res){
      that.setData({
        products: res.data
      })
    })
    api.API.getCategoryList(function(res){
        that.setData({
            categories: res.data
        })
    })
  }
})
