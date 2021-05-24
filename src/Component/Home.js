import React from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Home(){
  return (
    <div className="home">
        <h1 style={{color:'green',fontFamily:'arial'}}>Welcome Dear</h1>
        <br/>
        <h5 style={{color:'blue',fontFamily:'arial'}}>Please assess yourself against <div style={{color:'red'}}><strong><i>covid</i></strong></div></h5>
        <br/>
        <h5 style={{fontFamily:'arial'}}>To help india fight against the pandemic I have designed the covid self assessment. Your responses help to assess yourself against covid (approximately)</h5>
        <br/>
        <Link to='/assessment'>
            <Button variant="primary" size="lg" block style={{width:'50%',margin:'auto',fontFamily:'arial',fontWeight:'550'}}>
                PROCEED 
            </Button>
        </Link>
    </div>
  );
}

export default Home;
