import React, {useState, useRef} from 'react'
import './Home.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {

    const errRef = useRef();

    const [username, setUsername] = useState()
    const [password, setPassword] = useState();
    const [errMessage, setErrorMessage] = useState('')

    useEffect(() => {
        setErrorMessage('')
    }, [username, password])

    const loginBtn = async (e) => {
        e.preventDefault()
        try {
           const userInfo =  await Axios.get("http://localhost:4000/employees", {
            user: username,
            pwrd: password
        }).then()
            console.log(userInfo);
            setUsername('')
            setPassword('')
        } catch (error) {
            console.log(error);
            if (error.response.status === 401) {
                setErrorMessage('Unauthorized')
            } else if (error.response.status === 409) {
                setErrorMessage('Conflict. Please choose another name')
            } else {
                setErrorMessage('Registration failed')
            }
        }
    };
    
    
  return (
      <div className="home">
         <div className="signIn-section">
              <div className="profileImg"><img src="./images/profile.png" alt="" /></div>
                <section className="App-section">
                    <div className="container">
                        <div className="input">
                            <div className="imageBox">
                                <img src="./images/pp.png" alt="" /> 
                            </div>
                          <input type="text" name="username" placeholder="Username" onChange={(e)=> setUsername(e.target.value)} />
                        </div>
                        <div className="input">
                            <div className="imageBox">
                                <img src="./images/password.png" alt="" /> 
                            </div>
                            <input type="password" name="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                        </div>
                  </div>
                  <h4 className="signUp">Not a User? <span><Link to="register">SIGN UP</Link></span></h4>
                  <h3 ref={errRef} className={errMessage ? "errMsg" : "noErrMsg"}>{errMessage}</h3>
                </section>
              <button onClick={loginBtn}>LOGIN</button>
            </div> 
        </div>
  )
}

export default Home;