import React, { Component }from 'react'
import { render } from 'react-dom'
import '../assets/styles/tree';

class ReactTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        "optInGroup": {
          "id": 281616710631957,
          "name": "NYS",
          "groups": [
            {
              "id": 884011643699325,
              "name": "New Group",
              "groups": null
            },
            {
              "id": 281616710631958,
              "name": "county 1",
              "groups": [
                {
                  "id": 281616710631961,
                  "name": "city 1",
                  "groups": null
                },
                {
                  "id": 281616710631962,
                  "name": "city 2",
                  "groups": null
                },
                {
                  "id": 281616710631963,
                  "name": "city 3",
                  "groups": null
                },
                {
                  "id": 281616710631964,
                  "name": "city 4",
                  "groups": null
                }
              ]
            },
            {
              "id": 281616710631959,
              "name": "county 2",
              "groups": [
                {
                  "id": 281616710631965,
                  "name": "city 2_1",
                  "groups": null
                },
                {
                  "id": 281616710631966,
                  "name": "city 2_2",
                  "groups": null
                },
                {
                  "id": 281616710631967,
                  "name": "city 2_3",
                  "groups": null
                }
              ]
            },
            {
              "id": 281616710631960,
              "name": "county 3",
              "groups": [
                {
                  "id": 281616710631968,
                  "name": "city 3_1",
                  "groups": null
                }
              ]
            }
          ]
        },
        "selectedGroupIds": [
          281616710631962,
          281616710631963
        ]
      },
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {

  }
  render() {
    const {items:{optInGroup:{groups}}} = this.state;
    const { gropuList } = this.props;
    let list = gropuList? gropuList : groups;
    console.log(list);
    return (
      <ul>
        {list.map((item,index)=>{
          if(item.groups){
            return (<li key={index}>
                <ReactTree 
                    gropuList={item.groups}
                />
            </li>)
          }else{
            return (<li key={index}>
              {item.name}
            </li>)
          }
        })}
      </ul>
    );
  }
}

export default ReactTree
