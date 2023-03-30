import React from "react";
class colorDemo extends React.Component{
    state={color:"red"};
    handleClick=e=>{
        const c="green";
        this.setState({color:c});
    }
    render(){
        return(
            <div>
            <h2 style={{color:this.state.color}}>I am CIC/AID Student</h2>
            <button onClick = {this.handleClick}>
                Click
            </button>
            </div>
        );
    }
}
export default colorDemo;