import { push, goBack, go } from 'react-router-redux'
import config, { headers } from 'Config';
import {
  EXAMPLE
} from '../constants'

function example(val){
  return {
    type: EXAMPLE,
    payload: {
      title: val
    }
  }
}

export function changeTitle(val){
  console.log('传进来的参数....'+val);
  return async (dispatch, getState) => {
    try{
      const response = await fetch(config.apiPath.EXAMPLE,{
        method:"get",
        headers:headers()
        // ,
        // body:JSON.stringify(val)
      });
      const json = await response.json();
      console.log(json);
      dispatch(example(json))
    }catch(err){
      // dispatch(detailError())
      console.log('异常错误：'+err.message)
    }
  }
}
