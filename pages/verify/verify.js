//verify.js
var api = require('../../common/api.js')
Page({
    data: {
        sid: "",
        status: 1, //0: success; 1: before submit; 2: waiting; -1: error
    },
    bindSidInput: function (e) {
        this.setData({
            sid: e.detail.value
        })
    },
    bindSendTap: function (e) {
        e.currentTarget.loading = true
        var that = this
        api.API.sudmitVerify(this.data.sid, function (res) {
            if (res.data.status == "success") {
                that.setData({
                    status: 0
                })
            } else {
                that.setData({
                    status: -1
                })
            }
        })
    },
    bindSkipTap: function (e) {
        this.setData({
            status: 2
        })
        var that = this
        wx.switchTab({
            url: '../product-list/product-list'
        })
    }
})