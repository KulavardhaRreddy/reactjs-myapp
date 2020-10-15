import React from 'react';
import './index';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Person from './components/Person';
import InputEvent from './components/InputEvent';
class App extends React.Component {
  state = {
    Person :[
      {name:'kula',age:'20'},
      {name:'prashanth',age:'15'},
      {name:'vikram',age:'80'}
    ]
  }
  nameChange = () => {
    this.setState({
     Person :[
       {name:'ramya',age:'60'},
       {name:'raji',age:'45'},
       {name:'mamatha',age:'85'},
     ]
    })
  }
render() {
  //const List=[
   // {name: 'prashanth', age:'25'},
   // {name: 'vikram', age:'56'}
 // ]

  return (
     <div className="App">
       <h1>welcome to react</h1>
       <Welcome />
       <Greet/>
       <Person name='vijay' age='90'/>
       <Person name='ramesh' age='80'/>
       < Person name={this.state.Person[0].name} age={this.state.Person[0].age}/>
       < Person name={this.state.Person[1].name} age={this.state.Person[1].age}/>
       < Person name={this.state.Person[2].name} age={this.state.Person[2].age}/>
       <button onClick = {this.nameChange}>Change Name</button>
       <InputEvent />
    </div>
  );
}
}
color = block;
export default App;
