import React, { Component }from 'react'
import { render } from 'react-dom'
import { Modal, Button, WingBlank, WhiteSpace, Toast ,Carousel} from 'antd-mobile'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from 'Actions'
import {Link,hashHistory} from 'react-router';
import '../assets/styles/example';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img:""
    };
  }
  async componentWillMount(){
    document.title = "demo";
    await this.props.actions.changeTitle('11');  // 获取图片资源
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }
  next =()=>{
     //location.href="/next-step";
     hashHistory.push('/next-step/'+this.state.img);
  }
  afterChange=(e)=>{
    console.log(e);
    this.setState({
      img:e
    });
  }
  handleBanner= (val,e) =>{
    console.log(val);
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
              {example.title.list.map((val,index) => {
                  return (
                    <img onClick={this.handleBanner.bind(this,val)} src={val.img} key={index}/>
                  )
              })}
            </Carousel>

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
