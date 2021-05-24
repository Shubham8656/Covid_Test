import React, { useState } from 'react';
import './Question.css';
import Alert from 'react-bootstrap/Alert';
import store from '../Redux/Store';
import { connect } from 'react-redux';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Question(props) {

  const [showModal,changeModal] = useState(false)
  const [result,setResult] = useState('')
  const [color,setColor] = useState('black')
  
  function dispatch(ele){
    store.dispatch({type:ele})
    console.log(props.count);
    if(props.positive>5)
    {
      setResult('You seems to have strong symtomps of covid positive. Please test yourself at your nearby covid center as soon as possible')
      setColor('red')
    }
    else if(props.positive>3)
    {
      setResult('You seems to have mild syptomps of covid, Still if you feel unsafe please test yourself for covid test')
      setColor('orange')
    }
    else
    {
      setResult('You seems to be safe and healthy')
      setColor('green')
    }
     if(props.count===11){
      changeModal(true)
      store.dispatch({type:'SET_TO_INITIAL'})
      console.log('pos',props.positive);
      console.log('pos',props.count);
      
    }
  
  }

  return (
    <div className="Container">
        
        <Alert variant='warning' style={{color:'black',fontSize:'130%',fontFamily:'arial',fontWeight:'550'}}>
           {props.no}. {props.que}
        </Alert>
        
        <div className='buttons'>
          {/* {
            props.option.map((ele,ind)=>(
              <a href={'#'+props.count} key={ind}>
                <Button className='option' variant="primary" size="lg" block 
                        onClick={()=>dispatch(ele)}>
                  {ele} 
                </Button>
              </a>
            ))
          } */}
                <a href={'#'+props.count}>
                  <Button className='option' variant="secondary" size="lg" block style={{fontFamily:'arial',fontWeight:'550'}}
                        onClick={()=>dispatch('YES')}>
                    YES 
                  </Button>
                </a>
                <a href={'#'+props.count}>
                  <Button className='option' variant="secondary" size="lg" block style={{fontFamily:'arial',fontWeight:'550'}}
                        onClick={()=>dispatch('NO')}>
                    NO 
                  </Button>
                </a>
                
        </div>
        {
        showModal?
        <Modal show={true}>
          <Modal.Header><h1 style={{margin:'auto',fontSize:'130%'}}>Result</h1></Modal.Header>
          <Modal.Body style={{margin:'auto',color:color,fontFamily:'arial',fontWeight:'600'}}>
            {result}
          </Modal.Body>
          <Link to='/' >
            <Button className='option' variant="primary" size="lg" block style={{width:'50%',margin:'5% auto',fontWeight:'600'}}>
            CLOSE
            </Button>
            </Link>
        </Modal>:null
        }
    </div>
  );
}

const mapStateToProps=(state)=>{
  return {
    count:state.count,
    positive:state.positive
  }
}
export default connect(mapStateToProps)(Question);
