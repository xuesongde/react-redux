import { getCookie }from '../utils/authService'
/**
 * 通用头信息.
 */
export function headers(key, value) {
  let result = {
    'credentials':'include',
    'Content-Type': 'application/json',
    // "merchantId": process.env.NODE_ENV === 'production' ? getCookie('merchantId') : 'MCT1128',
    "merchantId": getCookie('merchantId') || 'MCT162',
    "APPkey": getCookie('APPkey'),
    "source": "M",
    "version": "1.0.0"
  };
  key && (result[key] = value);
  return result;
}