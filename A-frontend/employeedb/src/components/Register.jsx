import React, {useState, useRef} from 'react'
import './Register.css'
import axios from 'axios'

const Register = () => {

    const successRef = useRef();
    const errRef = useRef();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [position, setPosition] = useState("");

    const [errMessage, setErrorMessage] = useState('')

    const submitBtn = async () => {
        try {
              const registerEntry = await axios.post('http://localhost:4000/register', {
                username: name,
                email: email,
                password: password,
                position: position
              }).then((response)=>response.data)
            console.log(registerEntry)
            setEmail("")
            setName("")
            setPassword("")
            setPosition("")
        } catch (error) {
            console.log(error);
            if (error.response.status === 204) {
                setErrorMessage('No content, please try again')
            } else if (error.response.status === 400) {
                setErrorMessage('Bad Request, try again.')
                } else {
                setErrorMessage('please try again later')
            } 
        }
    }

  return (
      <div className="register-container">
          <section >
              <form action='/register'>
                  <label htmlFor="email" >Name:</label>
                  <input type="text" name="name" value={ name} placeholder="Name" onChange={(e)=>setName(e.target.value)} />
                  <label htmlFor="email" >Email:</label>
                  <input type="text" name="email" value={ email} placeholder="Please enter your email" onChange={(e)=>setEmail(e.target.value)}/>
                  <label htmlFor="password" >Password:</label>
                  <input type="password" name="password" value={ password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                  <label htmlFor="position" >Position:</label>
                  <input type="position" name="position" value={ position} placeholder="Position" onChange={(e)=>setPosition(e.target.value)}/>
              </form>
              <h3 ref={errRef} className={errMessage ? 'errMsg' : 'noErrMsg'}>{errMessage}</h3>
              <button onClick={submitBtn}>Submit</button>
          </section>
    </div>
  )
}

export default Register