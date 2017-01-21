//product-detail.js
var api = require('../../common/mockapi.js')
Page({
  data: {
    product: {},
    indicatorDots:true,
    comments:{}
  },
  //事件处理函数
  onLoad: function (option) {
    console.log(`detail onLoad for product id: ${option.id}`)
    var that = this
    api.API.getProductDetail(option.id, function(res){
      that.setData({
        product: res.data,
      })
    })
  },
  bindEditTap: function(event) {
    wx.navigateTo({
      url: `../product-edit/product-edit?id=${this.data.product.id}`
    })
  },
  bindFormSubmit: function(e) {
    console.log(e.detail.value.textarea)
  }
})
