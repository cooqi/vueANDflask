/**
 * Created by iceld on 2017/6/27.
 */

var utils = {
  isEmpty: function(strSrc) {
    if(strSrc == null || strSrc == undefined) {
      return true;
    } else {
      if(strSrc.indexOf(' ') >= 0)
        strSrc = strSrc.replace(/^(\s|\u00A0)+/, '');
      if(strSrc == "") return true;
    }
    return false;
  },
  isNumber: function(strSrc) {
    var reg = /^\d+$/;
    if(!reg.exec(strSrc)) {
      return false;
    }
    return true
  },

  trim: function(strSrc) {
    var str = strSrc.replace(/^(\s|\u00A0)+/, '');
    for(var i = str.length - 1; i >= 0; i--) {
      if(/\S/.test(str.charAt(i))) {
        str = str.substring(0, i + 1);
        break;
      }
    }
    return str;
  },
  currentdate:function() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
  },
  timeFormate(timeStamp,type) {
    var date = new Date(timeStamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear();
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
    var D = date.getDate()< 10? "0" +date.getDate():date.getDate();
    var h = date.getHours()< 10? "0" +date.getHours():date.getHours();
    var m = date.getMinutes()< 10? "0" +date.getMinutes():date.getMinutes();
    var s = date.getSeconds()< 10? "0" +date.getSeconds():date.getSeconds();
    var week='';
    switch (date.getDay()) {
      case 0:week="星期天";break;
      case 1:week="星期一";break;
      case 2:week="星期二";break;
      case 3:week="星期三";break;
      case 4:week="星期四";break;
      case 5:week="星期五";break;
      case 6:week="星期六";break
    }
    let time='';
    if(type==='ymdw'){  //年月日星期
      time= Y + "年" + M + "月" + D +"日"+' '+week;
    }else if(type==='hms'){  //时分秒
      time=  h+":"+m+":"+s;
    }else if(type==='ymdhms'){  //时分秒
      time=  Y + "-" + M + "-" + D +' '+h+":"+m+":"+s;
    }
    return time
  }
}

export default {
  utils:utils
}
