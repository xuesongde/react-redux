import React, { Component }from 'react'
import { render } from 'react-dom'
import { Modal, Button, WingBlank, WhiteSpace, Toast ,Carousel} from 'antd-mobile'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from 'Actions'
import { Link,hashHistory } from 'react-router';
import InfoWindow from '../component/static/infoWindow';//无状态组件
import DragOperation from '../component/dynamic/dragOperation';//动态组件
import '../assets/styles/example';
import sha256 from 'crypto-js/sha256';
import CryptoJS from "crypto-js";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img:"0",
      entered:{
        locationName:'chaoyangmen',
        city:'beijing',
        countryName:'China',
      },
      coordinate:{
        lat:'1',
        lng:'0'
      },
      initData:[1,2,3]
    };
  }
  async componentWillMount(){
    document.title = "demo";
    await this.props.actions.changeTitle();  // 获取图片资源

    /*************************************************************/
    function getStrFromBytes (arr) {
        var r = "";
        for(var i=0;i<arr.length;i++){
            r += String.fromCharCode(arr[i]);
        }
        // console.log(r);
        return r;
    }

    var key = 'psSN4zwzrkGbOvtmd4ff7jqgzTxIu2qI';    // 秘钥
    var message = 'yIOIFjQM5L3izU6FeAOFm4XQUqobEAaK';   // 待解密密文
    var keyHex = CryptoJS.enc.Utf8.parse(key);      // 将秘钥转换为utf8格式
    var ivHex = CryptoJS.enc.Utf8.parse(getStrFromBytes([0x12, 0x34, 0x56,0x78, 0x90,  0xAB,0xCD, 0xEF ]));     // 将向量装换位字符串再转为utf8
    var decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Base64.parse(message)      // 因为Java加密时进行了Base64编码,所以此处解码
    }, keyHex, {
        iv: ivHex,
        mode: CryptoJS.mode.ECB,   // 模式有很多种,由Java代码知道使用的是CBC
        padding: CryptoJS.pad.Pkcs7  // 填充模式有很多种,但是Java用的Pkcs5,此处Pkcs7也是可以解密的
    });
    console.log(decrypted);                                 // 不转换为字符串是得不到字符串结果的
    console.log(decrypted.toString(CryptoJS.Utf8));
  }
  componentWillReceiveProps(nextProps){
    // console.log(nextProps);
  }
  next =()=>{
     //location.href="/next-step";
     hashHistory.push('/next-step/'+this.state.img);
  }
  afterChange=(e)=>{
    //console.log(e);
    this.setState({
      img:e
    });
  }
  handleBanner= (val,e) =>{
    // console.log(val);
  }
  render() {
    const {example}=this.props;
    return (
      <div className="example">
        <div className="title">react redux es6 webpack 脚手架</div>
          <Carousel
              className="my-carousel"
              autoplay={true}
              dots={true}
              autoplayInterval = {5000}
              afterChange={this.afterChange.bind(this)}
              infinite
              selectedIndex={0}
              swiping={true}
              beforeChange={(from, to) => {}}
              easing="easeInOutQuart"
            >
              {example.title.map((val,index) => {
                  
                  return (
                    <img onClick={this.handleBanner.bind(this,val)} src={val.img} key={index}/>
                  )
              })}
            </Carousel>

        <InfoWindow entered={this.state.entered} coordinate={this.state.coordinate}></InfoWindow>

        <DragOperation initData={this.state.initData}></DragOperation>
        <div onClick={this.next} className="get-coupon-button">
            下一步
        </div>
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
)(Example)
