import React from 'react';
const Person = (props) =>{
    console.log(props);
    return(
        <div>
            
            <h1>my name is : {props.name} and i'm  {props.age} years old</h1>

        </div>
    )
}
export default Person;