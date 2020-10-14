import React from 'react'
 class InputEvent extends React.Component {
     state = {
         no: undefined,
         show: false
     }
     onNumberChange = (event) => {
         this.setState({
             no: event.target.value
         })
     }
     InputEvent = () => {
         if(this.state.no  === undefined) {
             return ""
         }
         if(this.state.no % 2 === 0){
             return "Even";
         }
         else {
             return "odd";
         }
     }
     render(){
         return(
             <div>
                 <h1>events 

                 </h1>
                 <input type = "number" onChange={this.onChangeChange}/>
                 {this.state.show && <p>{this.InputEvent()}</p>}
             </div>
         )
     }
 }
 export default InputEvent;