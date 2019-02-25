import React from "react";

export default class Index extends React.Component{

  constructor(){
    super();
    this.state = {
      details:{
        chengpinDetails:[
          {
            img:[]
          }
        ]
      }
    }
  }

  // 生命周期函数
  componentDidMount(){
    // 网络请求
    var result = fetch("http://www.wwtliu.com/sxtstu/blueberrypai/getChengpinDetails.php",{
      method:"GET"
    })
    .then(res => {
      //拿到数据
      return res.json();
    })
    .then(data => {
      this.setState({
        details:data
      })
    })
  }

  render(){

    // 解构赋值
    var { details } = this.state;

    return(
      <div>
        <ul>
          {
            details.chengpinDetails.map(function(element,index){
              return(
                <li key={index}>
                  <p>{ element.title }</p>
                  <p>{ element.content }</p>
                  {
                    element.img.map(function(imgele,imgindex){
                      return <img key={imgindex} src={ imgele } />
                    })
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
