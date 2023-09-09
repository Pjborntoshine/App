import React from "react";

export default class Input extends React.Component{
    constructor(){
        super();
        this.state={
         Name:"",
         lastName:""
        }
    }

    HandelName=(e)=>{
        this.setState({
            Name:e.target.value
        })
    }
    HandellastName=(e)=>{
        this.setState({
            lastName:e.target.value
        })
    }
     
    render(){
        return(
            <>
            <div className="section">
                <Row label="Name">
                        <input className="input" value={this.state.Name}
                        onChange={this.HandelName}/>
                </Row >
                <Row label="Last Name">
                        <input className="input" value={this.state.lastName}
                        onChange={this.HandellastName}/>
                </Row >
            </div>
    
            <h2>Hello,{this.state.Name+" "+this.state.lastName} </h2>
            
            </>
            )

    }
   
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}
