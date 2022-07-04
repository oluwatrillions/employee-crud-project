import React, {useState} from 'react'
import './Home.css'
import Axios from 'axios'

const Home = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState();

    const loginBtn = async () => {
        try {
            await Axios.get("http://localhost:4000/employees", {
            user: username,
            pwrd: password
        }).then()
            
       console.log(username, password);
        } catch (error) {
            console.log(error);
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
                </section>
              <button onClick={loginBtn}>LOGIN</button>
            </div> 
    </div>
  )
}

export default Home;