import './App.css';

function App() {
  return (
    <div className="App">
            <section className="App-section">
              <img src="./images/profile.png" alt="" />
              <div className="container">
                  <div className="input">
                      <div className="imageBox">
                         <img src="./images/pp.png" alt="" /> 
                      </div>
                      <input type="text" name="email" placeholder="Email/ID"/>
                  </div>
                  <div className="input">
                      <div className="imageBox">
                         <img src="./images/password.png" alt="" /> 
                      </div>
                      <input type="password" name="password" placeholder="Password"/>
                  </div>
              </div>
              <button>LOGIN</button>
        </section>
    </div>
  );
}

export default App;
