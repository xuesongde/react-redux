const domain = process.env.NODE_ENV === 'production'?'http://www.easy-mock.com/mock/599fe56cbd4203191f535ed9/xsd':'http://www.easy-mock.com/mock/599fe56cbd4203191f535ed9/xsd';
const path_cmsapi = process.env.NODE_ENV === 'production'?'https://u.jyallpay.com/jycms-api':'';

//接口地址
export default {
  EXAMPLE           : `http://www.easy-mock.com/mock/599fe56cbd4203191f535ed9/xsd/data/imageList`,//图片数据集   GET
}
