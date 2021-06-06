import React, { Component } from 'react';
import '../assets/css/App.css';

class Todolist extends Component{
    constructor(props){
        super(props)
        //定义数据
        this.state={
            underway:['学习React技术;','学习后端API;'],
            waittodo:['完成任务列表;','完成删除任务;','完成搜索任务;','完成任务分组;', '完成任务打标签;'],
            inputInfo:"",
            display:false,
            ifChecked:false,
            unfinished:7,
            finished:0,
            searchInfo:"",
            highlight:false,
            tip:''
        }
        this.clickCheck = this.clickCheck.bind(this);
        this.clickShow = this.clickShow.bind(this);
        this.clickHide = this.clickHide.bind(this);
        this.clickDelUnderway = this.clickDelUnderway.bind(this);
        this.clickDelWait = this.clickDelWait.bind(this);
        this.clickMoveUnder = this.clickMoveUnder.bind(this);
        this.clickMoveWait = this.clickMoveWait.bind(this);
        this.checkboxChange = this.checkboxChange.bind(this);
        this.searchChange = this.searchChange.bind(this);
    }
// 通过“保存”按钮（clickHide）点击实现：
//     1.输入框以及提交按钮的隐藏，以及输入框内容的传入数组中，并清空当前输入框的内容
//     2.获取输入框的内容，进行获取是否含有"#",以及"#"的位置，并将"#"中间的内容取出保存在tips中，取出第二个#后的内容存入数组中，进行任务的新建
//    3.点击保存按钮时判断输入框内容是否为空，若为空则不添加，不为空继续判断内容是否包含“#”，若不包含则直接存入数组，并总计件数+1；若包含，则去除第二个#以及#之前的内容，然后存入数组，总计件数+1
    clickHide(){
        var oSpan=document.getElementsByClassName("span_tip")
        let str1 = this.state.inputInfo.indexOf('#')
        let str2 = this.state.inputInfo.indexOf('#',1)
        let tip1=this.state.inputInfo.substring(str1+1,str2)
        this.setState({
            tip:tip1
        })
        // console.log(tip1)
        this.setState({display:false})
        if(this.state.inputInfo){
            if(tip1==""){
                this.setState({
                waittodo:this.state.waittodo.concat(this.state.inputInfo),
            })
            this.state.unfinished++
            }else{
                this.setState({
                    waittodo:this.state.waittodo.concat(this.state.inputInfo.substring(str2+1)),
                })
                this.state.unfinished++
                console.log(tip1)
                oSpan.innerText=`${tip1}`  
            } 
        }
        this.state.inputInfo=""
    }
    inputChange(e){
        this.setState({inputInfo:e.target.value})
    }

// 搜索框关键词搜索效果（未实现）（searchChange）已实现效果：
//      1.获取搜索框中的内容，遍历两个数组，将搜索框中的内容与两个数组中的内容进行匹配，若有相同则输出“true”
    searchChange(e,index){
        this.setState({searchInfo:e.target.value})
        // console.log(this.state.waittodo.length+this.state.underway.length)
        for (let i = 0; i < this.state.waittodo.length+this.state.underway.length; i++) {
            if(this.state.underway[i]==String(e.target.value)||this.state.waittodo[i]==String(e.target.value)){
                // this.setState({
                //     highlight:true
                // })
                console.log("true")
            }
            // else{
            //     console.log("false")
            // }
        }  
    }

// 已完成件数，在复选框状态变化后的显示（checkboxChange），实现效果：
//     对复选框状态进行判断，若被选中，将数量+1，否则-1
//     强制页面刷新

    checkboxChange(e){      
        if(e.target.checked){
            
            this.state.finished++;
            // console.log(this.state.finished)
            
        }else{
            this.state.finished--;
        }
        this.forceUpdate() 
    }
// 改变分组（clickMoveUnder）（clickMoveWait），效果实现：
//     点击上移或下移按钮，进行原数组内的数组删除，以及另外一个数组内的数组增加
    clickMoveUnder(index,e){
        let list_f1=this.state.waittodo
        let list_d1=this.state.underway
        this.setState({
            list_d1:this.state.underway.push(this.state.waittodo[index])
        })
        list_f1.splice(index,1)
        this.setState({
            list_f1:this.state.waittodo,
            list_d1:this.state.underway
        })
    }
    clickMoveWait(index,e){
        let list_f2=this.state.waittodo
        let list_d2=this.state.underway
        this.setState({
            list_f2:this.state.waittodo.push(this.state.underway[index])
        })
        list_d2.splice(index,1)
        this.setState({
            list_f2:this.state.waittodo,
            list_d2:this.state.underway
        })
    }

// 删除效果（clickDelUnderway）（clickDelWait），效果实现：
//     通过点击删除按钮，对数组内的相应数据进行删除
//     删除数据以后已完成件数相应-1
    clickDelUnderway(index,e){
        let list_under = this.state.underway
        list_under.splice(index,1)
        this.setState({
            list_under:this.state.underway
        })
        this.state.unfinished--
    }
    clickDelWait(index,e){
        let list_wait = this.state.waittodo
        list_wait.splice(index,1)
        this.setState({
            list_wait:this.state.waittodo
        })
        this.state.unfinished--
    }

    clickCheck(){
        this.setState({ifChecked:true})
    }
    
    clickShow(){
        this.setState({display:true})
    }
    
    render(){
        return (
            <div>
                <p className="list_title">任务标签 (TODO List)</p>
                <p className="search_title">搜索任务：
                    <input value={this.state.searchInfo} onChange={(e,index)=>this.searchChange(e,index)} className="input_search" placeholder="输入关键词搜索"></input> 
                </p>
                <div>
                    <p>正在进行中：</p>
                    <ul>
                        {this.state.underway.map((item,index) =>(
                             <li className="underway_li" key={index}>
                                 <input type="checkbox" className="input_checkbox" onChange={this.checkboxChange}></input>
                                 <div className={this.state.ifChecked?"div_checked":"div_checkbox"} >
                                 <nobr className={this.state.highlight?"highlight_y":"highlight_n"}>{item}</nobr>
                                 </div>
                                 <span class="span_tip"></span>
                                 <button className="btn_del" onClick={()=>this.clickDelUnderway(index)}>删除 ×</button>
                                 <button className="btn_move" onClick={()=>this.clickMoveWait(index)}>移动至正在准备中👇</button>
                                 </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p>正在准备中：</p>
                    <ul>
                        {this.state.waittodo.map((item,index) =>(
                             <li className="waittodo_li" key={index}>
                                 <input type="checkbox" className="input_checkbox" onChange={this.checkboxChange}></input>
                                 <div className={[this.state.ifChecked?"div_checked":"div_checkbox"]}>
                                 <nobr className={this.state.highlight?"highlight_y":"highlight_n"}>{item}</nobr>
                                 </div>
                                 <span class="span_tip"></span>
                                 <button className="btn_del" onClick={()=>this.clickDelWait(index)}>删除 ×</button>
                                 <button className="btn_move" onClick={()=>this.clickMoveUnder(index)}>移动至正在进行中👆</button>
                                </li>
                        ))}
                    </ul>
                </div>
                <button className={this.state.display?"btn_new_hide":"btn_new_show"} onClick={this.clickShow}>新建任务</button>

                <div className={this.state.display?"div_new_show":"div_new_hide"}>
                    <p>新建任务：
                        <input value={this.state.inputInfo} onChange={e=>this.inputChange(e)} className="input_new" placeholder="#紧急#学习React技术"></input>
                        <button className="btn_new2" onClick={this.clickHide}>保存</button>
                    </p>
                </div>
                <p className="p_bottom">
                    已完成{this.state.finished}件/总计{this.state.unfinished}件
                </p>
            </div>   
        )    
    } 
}

export default Todolist;
