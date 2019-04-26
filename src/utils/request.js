import axios from 'axios';
let CryptoJS = require("crypto-js");
let key = "eaa34f53daf201e309e15d079eec15d5";
window.console.log(CryptoJS)
let security = {
  cfg: {
    iv: CryptoJS.enc.Hex.parse('0000000000000000'),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  },
  encrypt: function (str, key) {
    var k = CryptoJS.enc.Utf8.parse(key);
    return CryptoJS.AES.encrypt(str, k, this.cfg).toString();
  },
  decrypt: function (str, key) {
    var k = CryptoJS.enc.Utf8.parse(key);
    return CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(str, k, this.cfg));
  },
  md5: function (str) {
    return CryptoJS.MD5(str).toString().toUpperCase();
  },
  genVldCode: function (str, key) {
    return this.encrypt(this.md5(str + key), key)
  }
};

// 加密
function encryptParam(data) {
  var euid = "7weOocer2tkQnKIklGZaMg==";
  var o = "rzhVdpywH10uyNGuUZFW51plli/3hLfJEz9kIUUZ6Hk=";
  var pramas = {
      s: security.encrypt(JSON.stringify(data), key),
      o: o,
      u: euid,
      k: security.genVldCode(euid, key),
      d: null
  };
  return pramas;
}
// 解密
function decryptParam(data) {
  var pramas = security.decrypt(data,key)
  return pramas;
}
  // 设置默认请求接口地址
  axios.defaults.baseURL = 'http://www.ec.idpbg.foxconn.com/AKDAPI/api/W';

  // 拦截请求 和 响应
  axios.interceptors.request.use(
    (config) => {
      config.data = JSON.stringify(config.data);
      config.headers = {
        'Content-Type': 'application/json; charset="utf-8"',
      };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  axios.interceptors.response.use(
    (response) => {
      let data =  JSON.parse(decryptParam(response.data));
      return data;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  // 封装请求韩式
  export default {
    post(url, data) {
      data = encryptParam(data)
      return new Promise((resolve, reject) => {
        axios.post(url, data)
          .then((data) => {
            resolve(data);
          }, (err) => {
            reject(err);
          });
      });
    },
    get(url, params) {
      return new Promise((resolve, reject) => {
        axios.get(url, {
            params,
          })
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  }