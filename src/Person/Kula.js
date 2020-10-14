import React from './node_modules/react'
const Kula = (props) =>{
    console.log(props);
    return(
        <div>
             <h1> {props.name} </h1>
        </div>
    );
}
export default Kula;