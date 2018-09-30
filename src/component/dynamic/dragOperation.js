import * as React from 'react';  
  
interface ComponentState{  
    paging:number,  
    order:string  
}  
  
interface ComponentProp{  
    Paging:Function,  
    Order:Function  
}  
import './dragOperation.scss' 
export default class SortPaging extends React.Component<ComponentProp, ComponentState>   
{  
    constructor(props:ComponentProp){  
        super(props);  
        this.state={
            pColor:''
        }  
    }  
  
    ordering=()=>{  
  
    }  
    doIt=()=>{
        if(this.state.pColor=='p_color0'){
            this.setState({
                pColor:'p_color1'
            })
        }else{
            this.setState({
                pColor:'p_color0'
            })
        }
        
    }
    render() {  
        return (  
            <div className="drag">  
                <p className={this.state.pColor} onClick={this.doIt}>This is React Component with own state, click me</p>  
            </div>  
        );  
    }  
} 