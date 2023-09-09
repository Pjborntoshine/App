import { useState } from "react";
export default function Input(){
    const [Name,setName]=useState("")
    const [lastName,setlastName]=useState("")
   
    return(
        <>
        <div className="section">
            <Row label="Name">
                    <input className="input" value={Name}
                    onChange={(e)=>setName(e.target.value)}/>
            </Row >
            <Row label="Last Name">
                    <input className="input" value={lastName}
                    onChange={(e)=>setlastName(e.target.value)} />
            </Row >
        </div>

        <h2>Hello, {Name+" "+lastName}</h2>
        
        </>
        )
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
