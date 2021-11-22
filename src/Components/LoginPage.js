import React,{useState} from 'react';
import '../Components/LoginPage.css';

export default function Login(props){
  const {setVerified} = props;
  const [correct,setCorrect] = useState(true);
  const [user,setUser] = useState('');
  const [pswrd,setPswrd] = useState('');

  function userVerification(){
    if(user==='xyz' && pswrd ==='xyz@123'){
    setVerified(true);
    }
    else {
      setCorrect(false)
    }
  }
    return(
        
        <div className="LoginBox">
          <h1>Enter Your Login Credentials</h1><hr/><br/>
          <label>
          <strong>Username:</strong><br/>
            <input type='text' onChange={(e)=>setUser(e.target.value)}/>
          </label><br/><br/>
          <label>
          <strong>Password:</strong><br/>
            <input type='password' onChange={(e)=>setPswrd(e.target.value)}/>
          </label>
            {!correct && <p className="warning">Invalid login Credentials</p>}
          <br/><br/>
          <button className='login' onClick={userVerification}>Login</button>
        </div>
    
    )
}