import axios from 'axios'

const appID = "Aqr7svz6qLe93ZmAA5TMRnSU"
const appSecret = "mRWLFfvHLa8KZ3Q4ppbAY4EK"

// 创建axios实例
const instance = axios.create({ 
  baseURL: 'https://gp-server.hunger-valley.com/',
  headers: {
    "t-app-id": appID,
    "t-app-secret": appSecret
  }
});

// 添加请求拦截器
// 给请求添加 header，设置x-token验证
instance.interceptors.request.use(function (config) {
  const xToken = localStorage.getItem('x-token')
  config.headers.Authorization =`Bearer ${xToken}` 
  return config;
}, function (error) {
  console.error(error)
  return Promise.reject(error);
});

// 添加响应拦截器
// 把响应头的x-token存到浏览器的localStorage里
instance.interceptors.response.use(function (response) {
  if(response.headers['x-token']){
    localStorage.setItem('x-token',response.headers['x-token'])
  }
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default instance