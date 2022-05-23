import React,{ startTransition } from "react";


const Sugger:React.FC =() => {
    return <div>hello</div>
}

const StartTransition:React.FC = (props) => {
    return <div>
        <div>关健词<input type="text" /></div>
        <Sugger/>
    </div>
}

export default StartTransition; 