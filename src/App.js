import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetigs from './components/UserGreetigs';
import List from './components/NameList';


function App() {
  return (
    <div className="App">
      <List/>
      {/* <UserGreetigs/> */}
       {/* <ParentComponent/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <div>
        <Greet name='Bruce' heroName="batman">
          <p>
            hello Batman
          </p>
        </Greet>
        <Greet name='Superman' heroName="jack" >
          <button>
            submit
          </button>
        </Greet>
        <Greet name='Ironman' heroName="TonyStark"/>
     
        <Welcome name='Bruce' heroName="batman"/>
        <Welcome name='Superman' heroName="jack"/>
        <Welcome name='Ironman' heroName="TonyStark"/>
        <Hello/> 

      </div> */}
    </div>
  );
}

export default App;
