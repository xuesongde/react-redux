import cookie from 'react-cookies'
let cookieConfig = {};
if(process.env.NODE_ENV === 'production'){
  cookieConfig = {domain:''}
}

export function saveCookie(name,value) {
  cookie.save(name, value, cookieConfig)
}

export function getCookie(name) {
  return cookie.load(name)
}

export function removeCookie(name) {
  cookie.remove(name, cookieConfig);
}

export function signOut() {
  cookie.remove('tokenId_jywK', cookieConfig);
}

export function isLogin() {
  return cookie.load('tokenId_jywK');
}

export function redirectToBack(nextState, replace) {
	//已经登录则不进入
  if (isLogin()) {
    replace('/')
  }
}
export function redirectToLogin(nextState,replace) {
	if (!isLogin() && process.env.NODE_ENV === 'production') {
    // location.href='http://m.pay.jyall.com/app-download.html'
  }
}

// 检测是否到底
export function isPageEnd() {
  const bufferHeight  = 100,
    clientHeight  = document.documentElement.clientHeight,
    bodyTop       = document.body.scrollTop,
    bodyHeight    = document.body.clientHeight;

  if( bodyTop + clientHeight + bufferHeight >= bodyHeight){
    return true;
  }
}

// 检测是在页面顶部
export function isPageTop() {
  const bodyTop       = document.body.scrollTop;
  if(!bodyTop){
    return true;
  }
}

//格式化时间
export function dateFormat() {
  Date.prototype.Format = function (fmt) {
    var o = {
      "M+": this.getMonth() + 1,                    // 月份
      "d+": this.getDate(),                         // 日
      "h+": this.getHours(),                        // 小时
      "m+": this.getMinutes(),                      // 分
      "s+": this.getSeconds(),                      // 秒
      "q+": Math.floor((this.getMonth() + 3) / 3),  // 季度
      "S": this.getMilliseconds()                   //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  };
}


