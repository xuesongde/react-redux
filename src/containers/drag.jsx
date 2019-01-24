import React, { Component }from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import '../assets/styles/drag';
import { exchangePosition } from '../utils/authService'

class Drag extends Component {
  constructor(props) {
    super(props);
    this.state={
      isDragDisplay:true,
      divList:['one','two','three','four']
    }
  }
  componentWillMount(){

  }
  componentWillReceiveProps(nextProps){

  }
  next =()=>{
     console.log('next...')
     this.setState({
         isDragDisplay:!this.state.isDragDisplay
     })
  }
  //element draged: onDragStart trigger this function
  dragStartHandler=(ev)=>{
     // Add the drag data
    ev.dataTransfer.setData('one', ev.target.getAttribute('data-order'));

    ev.dataTransfer.dropEffect = "copyLink";
  }
  //draging
  dragover_handler=(ev)=> {
   console.log('dragover_handler...')

   ev.preventDefault();

   // Set the dropEffect to move
   ev.dataTransfer.dropEffect = "copyLink"
  }
  // drop end
  drop_handler=(ev)=> {
   console.log('drop_handler...')
   ev.preventDefault();
   this.setState({
    divList:exchangePosition(this.state.divList,ev.dataTransfer.getData('one'),ev.target.getAttribute('data-order'))
   })
   console.log(this.state.divList)
  }
  render() {
    const {example}=this.props;
    return (
      <div className="drag">
        {
          this.state.divList.map((val,index) => {
                  return (
                    <div 
                    data-order={index} 
                    key={index} 
                    draggable="true" 
                    onDragStart={this.dragStartHandler.bind(this)} 
                    onDrop={this.drop_handler.bind(this)} 
                    onDragOver={this.dragover_handler.bind(this)}>
                      {val}
                    </div>
                  )
              })
        }
        <a onClick={this.next}>click me</a>
        <div id="drag" 
        onDragStart={this.dragStartHandler.bind(this)}  
        style={{display:this.state.isDragDisplay?'block':'none'}} 
        className="drag" 
        draggable="true" >
            drag
        </div>
        <div className="drop-zone" onDrop={this.drop_handler.bind(this)} onDragOver={this.dragover_handler.bind(this)}>
            drop zone
        </div>
      </div>
      
    )
  }
}

export default Drag
