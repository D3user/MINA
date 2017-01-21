var config = require('../config.js')
var app = getApp()
var request = function (Obj) {
    Obj.header = {
        'content-type': 'application/json',
        'session': app.globalData.session
    }
    wx.request(Obj)
}

var API = {
    getProductList: function (cb) {
        request({
            url: `https://${config.Settings.SERV_DOMAIN}/products`,
            data: {},
            method: 'GET',
            success: function (res) {
                typeof cb == 'function' && cb(res)
            },
            fail: function () {
                console.log('getProductList failed')
            }
        })
    },
    getProductDetail: function (id, cb) {
        request({
            url: `https://${config.Settings.SERV_DOMAIN}/products/${id}`,
            data: {},
            method: 'GET',
            success: function (res) {
                typeof cb == 'function' && cb(res)
            },
            fail: function () {
                console.log(`getProductDetail for id: ${id} failed`)
            }
        })
    },
    submitProduct: function (id, data, cb) {
        if (id) {
            var url = `https://${config.Settings.SERV_DOMAIN}/products/${id}`
            var method = 'PUT'
        } else {
            var url = `https://${config.Settings.SERV_DOMAIN}/products`
            var method = 'POST'
        }
        request({
            url: url,
            data: data,
            method: method,
            success: function (res) {
                cb == 'function' && cb(res)
            },
            fail: function () {
                console.log(`submitProduct for id: ${id} failed`)
            }
        })
    },
    getCategoryList: function (cb) {
        request({
            url: `https://${config.Settins.SERV_DOMAIN}/categories`,
            data: {},
            method: 'GET',
            success: function (res) {
                typeof cb == 'function' && cb(res)
            },
            fail: function () {
                console.log(`getCategoryList failed`)
            }
        })
    }
}

module.exports.API = API
