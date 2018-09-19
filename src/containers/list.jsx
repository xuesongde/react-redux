import React, { Component }from 'react'
import cookie from 'react-cookies'//cookie操作插件
import { render } from 'react-dom'
import { Modal, Button, WingBlank, WhiteSpace, Toast, Icon, NavBar ,Carousel, ActivityIndicator,List,Picker} from 'antd-mobile'
import {Link,hashHistory} from 'react-router';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../redux/actions/'

import '../assets/styles/list'

class ListNew extends Component {
  constructor(props){
        super(props);
        this.state={
          pageNum : 1,
          pageSize : 20,
          noCouponTip :'none',
          noListDisplay:'none',
          nextPage:false,
          toGetData:true,
          dataList:[1,2,3,4]
        }
      this.subStrTime=(str)=>{
            return str.split(' ')[0].replace(/-/g,'.');
      }
      this.getAppointmentList = () => {
        //获取列表
        }
     }
      //渲染完成之后再执行
     componentWillMount(){
      this.getAppointmentList();
     }
     componentDidMount(){
      if(localStorage.getItem('source')=='app'||location.href.indexOf('source=app')!=-1){
        document.getElementsByClassName('common-header')[0].style.display='none';
        document.getElementById('route_div').style.padding=0
      }
     }

     render() {
        return (
                <div className="redCatCouponlist">
                  <div className="coupon-tip" style={{display:this.state.noListDisplay=='block'?'none':'block'}}>请通过微信扫码使用</div>
                  <div className="no-coupon" style={{display:this.state.noListDisplay}}>还没有补贴金</div>
                  <div style={{display:this.state.noListDisplay=='block'?'none':'block'}}>
                    <ul>
                     {
                          this.state.dataList.map((item,index) =>{
                                  let css='';
                                  switch(item.status){
                                    case 33:
                                    css='gq';
                                    break;

                                    case 32:
                                    css='sy';
                                    break;

                                    default:
                                    css='';
                                    break;
                                  }
                               return(
                                  <li key={index} className={css}>
                                    <div className="bg-div">
                                      <div className="updiv">
                                        <div className="left">
                                          <span className="rmb">¥</span>
                                          <h2 className="shu">{item}</h2>
                                        </div>
                                        <div className="right">
                                          <p className="man">{item}</p>
                                          <p className="yong">满{item}元可用</p>
                                        </div>
                                      </div>
                                      <hr></hr>
                                      <div className="yxq">
                                        有效期：2017-10-26 11:11:45-2017-10-26 11:11:56
                                      </div>
                                    </div>
                                  </li>
                                )
                          })
                     }
                    </ul>
                    <div style={{display: this.state.noCouponTip}} className="no-coupon-tip">没有更多了</div>
                  </div>
                </div>
        );
    }
}


function mapStateToProps(state) {
  return {
    example: state.example.toJS()
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(ListNew)
