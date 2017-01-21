//app.js
App({
  onLaunch: function () {
    //Pass
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              var today = new Date()
              that.globalData.userInfo = res.userInfo
              that.globalData.userInfo.lastlogin = today
              wx.setStorage({
                key: 'userInfo',
                data: res.userInfo
              })
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    session:null
  }
})
