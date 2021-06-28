//import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile'
import MyImg from './images/img.JPG'


function App() {
  function handle(fullName){
     alert(fullName);
  }
  return (
    <div className="App">
      <Profile 
      fullName="wafi" 
      bio="Student at GoMyCode"
      profession="front-end developer"
      pic={MyImg}
      handleName={handle}/>
     
    </div>
  );
}

export default App;
