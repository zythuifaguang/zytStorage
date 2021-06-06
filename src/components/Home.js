import React, { Component } from 'react';

class Home extends Component{
    constructor(){
        super();
        //定义数据
        this.state={
            name:"张雨婷"
        }
    }

    render(){
        return (
            <div>
                <div>你好react——我是Home组件</div>
                <p>{this.state.name}</p>
            </div>
            
        )
         
    }
}

export default Home;