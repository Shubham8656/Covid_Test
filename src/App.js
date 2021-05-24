  import './App.css';
import Question from './Component/Question';
import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      data:[
        {
          Question:'Do you have Fever or runny nose?',
          options:['YES','NO']
        },
        {
          Question:'Do you have Dry cough?',
          options:['YES','NO']
        },
        {
          Question:'Do you feel Tiredness?',
          options:['YES','NO']
        }
        ,
        {
          Question:'Do you have difficulty in breathing or shortness of breath?',
          options:['YES','NO']
        },
        {
          Question:'Do you have chest pain or pressure?',
          options:['YES','NO']
        },
        {
          Question:'Do you feel loss of speech or movement?',
          options:['YES','NO']
        },
        {
          Question:'Do you feel loss of taste or smell?',
          options:['YES','NO']
        },
        {
          Question:'Do you feel sore threat?',
          options:['YES','NO']
        },
        {
          Question:'Do you feel body pain?',
          options:['YES','NO']
        },
        {
          Question:'Do you feel like Vomiting or have Diarrhea?',
          options:['YES','NO']
        },
        {
          Question:'Had you travelled out of city in the past week?',
          options:['YES','NO']
        },
        {
          Question:'Do you have blood pressure or cancer or diabetes or pregnancy or asthma or lung/heart problems?',
          options:['YES','NO']
        }

      ]
    }
  }
  render()
  {
    return (
    <div className="App">
      {
          this.state.data.map((ele,ind)=>(
          <div id={ind} key={ind}>
            <Question no={ind+1} que={ele.Question} option={ele.options}/>
          </div>
          ))
      }
    </div>
  );
}
}
const mapStateToProps=(state)=>{

  return {
    count:state.count
  }
}
export default connect(mapStateToProps)(App);
