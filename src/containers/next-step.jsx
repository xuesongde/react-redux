import React, { Component }from 'react'
import cookie from 'react-cookies'//cookie操作插件
import { render } from 'react-dom'
import { Modal, Button, WingBlank, WhiteSpace, Toast, Icon, NavBar ,Carousel, ActivityIndicator,List,Picker} from 'antd-mobile'
import {Link,hashHistory} from 'react-router';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../redux/actions/'

import '../assets/styles/next-step'

class NextStep extends Component {
  constructor(props) {
    super(props);
    console.log("传过来的参数"+this.props.params.img);
    this.state={
      district:[//选择数据集
        {value: 0, label: '姚明'},
        {value: 1, label: '布莱恩特'},
        {value: 2, label: '阿伦艾弗森'},
        {value: 3, label: '猩猩詹'},
        {value: 4, label: '夜店登'},
      ],
      limit:"你喜欢的球星",
      maskDisplay:'block',
    }
    //查询支付结果
    //遮罩10秒
    Toast.loading('查询...', 5, null, true);
    let self=this;
   setTimeout(function(){
      self.setState({
        maskDisplay:'none'
      });
    }, 5000)
    let i = 0;
    let s = setInterval(function() {
      i++;
      //执行轮询操作 2次
      console.log('轮询执行....');
      if (i == 2) {
        clearInterval(s)
      };
      console.log(i)
    }, 2500);
    document.title = "下一步";
  }
  componentWillMount(){
    //页面初始化之前的操作
    
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  }
  refresh=()=>{
    location.href="/";
  }
  limitOk=()=>{
    console.log('你的爱好....');
  }
  render() {
    return (
      <div className="next-step">
        <ul>
            <li><label>猜你喜欢</label>
              <div className="div">
                <List style={{ backgroundColor: 'white' }} className="picker-list">
                  <Picker onOk={this.limitOk} onclick={this.limitOk} data={this.state.district} cols={1} extra={this.state.limit} title="球星" className="forss">
                    <List.Item arrow="horizontal"></List.Item>
                  </Picker>
                </List>
              </div>
            </li>
        </ul>
        <div onClick={this.publish} className="get-coupon-button">
            提交
        </div>
        <div className="am-modal-mask" style={{display:this.state.maskDisplay}}></div>
      </div>
    )
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
)(NextStep)
