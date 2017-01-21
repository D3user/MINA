//login.js
var app = getApp()
var config = require('../../config.js')
Page({
    data: {
        welcome: ""
    },
    onLoad: function () {
        console.log('login page loaded')
        var that = this
        wx.getStorage({
            key: 'userInfo',
            success: function (res) {
                var today = new Date()
                var lastdate = res.userInfo.lastlogin
                var timeDiff = Math.abs(today.getTime() - lastdate.getTime())
                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) 
                console.log(`logged in ${diffDays} ago`)
                if (diffDays > config.Settings.USERINFO_EXPDAY) {
                    wx.getUserInfo({
                        success: function (res) {
                            that.setData({
                                welcome: "欢迎使用转换器，正在为您登陆 ..."
                            })
                        },
                        fail: function () {
                            that.setData({
                                welcome: "登陆错误，请确认授权"
                            })
                        }
                    })
                }
            },
            fail: function () {
                wx.getUserInfo({
                    success: function (res) {
                        that.setData({
                            welcome: "欢迎使用转换器，正在为您登陆 ..."
                        })
                    },
                    fail: function () {
                        that.setData({
                            welcome: "登陆错误，请确认授权"
                        })
                    }
                })
            }
        })
        wx.getStorage({
            key: 'session',
            success: function (res) {
                console.log('session found, old user')
                app.globalData.session = res.data
                wx.redirectTo({
                    url: '../product-list/product-list'
                })
            },
            fail: function () {
                console.log('session not found, new user')
                wx.redirectTo({
                    url: '../verify/verify'
                })
            },
            complete: function () {
                // complete
            }
        })
    }
})
