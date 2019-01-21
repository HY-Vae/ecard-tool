'use strict';

/**
 * @author hmagic
 * @email liang0x4c@gmail.com
 * @date 2018-12-24
 * @description 常用工具封装
 * @usage_method import { name } from ''
*/
var Cookie = {
  /**
   * @author hmagic
   * @date 2018-12-24
   * @description 操作cookie的方法集合
  */
  setCookie: function setCookie(cname, cvalue, exdays) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 设置cookie
     * @param { cname } cookie名字
     * @param { cvalue } cookie值
     * @param { exdays } cookie过期天数
    */
    if (!exdays) {
      exdays = 1;
    }
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toGMTString();
    document.cookie = cname + '=' + cvalue + '; ' + expires;
  },
  getCookie: function getCookie(name) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 获得cookie
     * @param { name } cookie名字
     * @returns String
    */
    var strcookie = document.cookie; // 获取cookie字符串
    if (!strcookie || strcookie.length === 0) {
      return '';
    }
    var arrcookie = strcookie.split('; '); // 分割
    // 遍历匹配
    for (var i = 0; i < arrcookie.length; i++) {
      var arr = arrcookie[i].split('=');
      if (arr[0] === name) {
        return arr[1];
      }
    }
    return '';
  },
  delCookie: function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = this.getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }
};

var FormatDate = {
  /**
   * @author hmagic
   * @date 2018-12-24
   * @description 时间戳格式化
  */
  ym: function ym(time) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 年月
     * @param { time } 时间戳
     * @returns '' or yyyy-MM
    */
    if (!time) {
      return '';
    }
    var _date = new Date(time * 1000);
    var y = _date.getFullYear();
    var m = _date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    return y + '-' + m;
  },
  md: function md(time) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 月日
     * @param { time } 时间戳
     * @returns '' or MM-dd
    */
    if (!time) {
      return '';
    }
    var _date = new Date(time * 1000);
    var m = _date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = _date.getDate();
    d = d < 10 ? '0' + d : d;
    return m + '-' + d;
  },
  ymd: function ymd(time) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 年月日
     * @param { time } 时间戳
     * @returns '' or yyyy-MM-dd
    */
    if (!time) {
      return '';
    }
    var _date = new Date(time * 1000);
    var y = _date.getFullYear();
    var m = _date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = _date.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
  },
  hm: function hm(time) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 时:分
     * @param { time } 时间戳
     * @returns '' or hh:mm
    */
    if (!time) {
      return '';
    } else {
      var date = new Date(time * 1000);
      var h = date.getHours();
      var m = date.getMinutes();
      h = h < 10 ? '0' + h : h;
      m = m < 10 ? '0' + m : m;
      return h + ':' + m;
    }
  },
  ms: function ms(time) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 分:秒
     * @param { time } 时间戳
     * @returns '' or hh:mm
    */
    if (!time) {
      return '';
    } else {
      var date = new Date(time * 1000);
      var m = date.getMinutes();
      var s = date.getSeconds();
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;
      return m + ':' + s;
    }
  },
  hms: function hms(time) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 时：分：秒
     * @param { time } 时间戳
     * @returns '' or hh:mm:ss
    */
    if (!time) {
      return '';
    } else {
      var date = new Date(time * 1000);
      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();
      h = h < 10 ? '0' + h : h;
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;
      return h + ':' + m + ':' + s;
    }
  },
  getDateTime: function getDateTime(time) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 获得年-月-日 时:分:秒
     * @param { time } 时间戳
     * @returns '' or yyyy-MM-dd hh:mm:ss
    */
    if (!time) {
      return '';
    }
    return this.ymd(time) + ' ' + this.hms(time);
  }
};
var Regular = {
  /**
   * @author hmagic
   * @date 2018-12-24
   * @description 常用正则判断
  */
  phoneReg: '^1[3,4,5,6,7,8,9]{1}\\d{9}$',
  emailReg: '^[a-z0-9A-Z]+[-|a-z0-9A-Z._]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$',
  idCardReg: '^(\\d{6})(\\d{4})(\\d{2})(\\d{2})(\\d{3})([0-9]|X|x)$',
  urlReg: 'http(s)?://([\\w-]+\\.)+[\\w-]+(/[\\w- ./?%&=]*)?',
  integerReg: '^[0-9]\\d*$',
  money: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
  isPhone: function isPhone(str) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 判断手机号码(中国大陆)
     * @param { str } 手机号码
     * @returns { boolean }
    */
    if (!str) return false;
    var reg = new RegExp(this.phoneReg);
    return reg.test(str);
  },
  isEmail: function isEmail(str) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 判断邮箱
     * @param { str } 邮箱地址
     * @returns { boolean }
    */
    if (!str) return false;
    var reg = new RegExp(this.emailReg);
    return reg.test(str);
  },
  isIdCard: function isIdCard(str) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 判断身份证(中国)
     * @param { str } 身份证号码
     * @returns { boolean }
    */
    if (!str) return false;
    var reg = new RegExp(this.idCardReg);
    return reg.test(str);
  },
  isUrl: function isUrl(str) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 验证url
     * @param { str } url
     * @returns { boolean }
    */
    if (!str) return false;
    var reg = new RegExp(this.urlReg);
    return reg.test(str);
  },
  isInteger: function isInteger(number) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 验证正整数
     * @param { number } 待验证的数字
     * @returns { boolean }
    */
    if (number < 0) return false;
    var reg = new RegExp(this.integerReg);
    return reg.test(number);
  },
  isMoney: function isMoney(val) {
    /**
     * @author hmagic
     * @date 2019-1-19
     * @description 验证金额
     * @param { number } 待验证的数字
     * @returns { boolean }
    */
    if (val < 0) return false;
    var reg = this.money;
    return reg.test(val);
  }
};

var FileType = {
  /**
   * @author hmagic
   * @date 2018-12-24
   * @description 上传文件类型
  */
  xls_x: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel',
  image: 'image/jpeg,image/jpg,image/png',
  video: 'audio/mp4,video/mp4'
};

var FormatMoney = {
  /**
   * @author hmagic
   * @date 2018-12-29
   * @description 金额格式化
  */
  currency: function currency(num) {
    /**
     * @author hmagic
     * @date 2018-12-29
     * @description 格式化货币 4000 -> 4,000.00 保留两位数
     * @param { num } 待转化的金额
     * @returns Number
    */
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num)) num = "0";
    var sign = num == (num = Math.abs(num));
    num = Math.floor(num * 100 + 0.50000000001);
    var cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10) cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
      num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    }
    return (sign ? '' : '-') + num + '.' + cents;
  },
  limit: function limit(num) {
    /**
     * @author hmagic
     * @date 2018-12-29
     * @description 限制输入框只能输入到小数点后两位
     * @param { num } 输入的内容
     * @returns Number or null
    */
    num += '';
    return num.match(/^\d*(\.?\d{0,2})/g)[0];
  }
};
module.exports = { Cookie: Cookie, FormatDate: FormatDate, Regular: Regular, FileType: FileType, FormatMoney: FormatMoney };
