import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  /* const cinemas = [
    {nayok: 'koober', nayika: 'kopila'},
    {nayok: 'rubel', nayika: 'Mousumi'},
    {nayok: 'Razzak', nayika: 'Shabana'}
  ] */
  return(
    <div className="App">
      {
      // <Counter></Counter>,
      
      /* {
      cinemas.map(item => <Cinema nayok={item.nayok}></Cinema>)
      } */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
 
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>External Users</h3>
    </div>
  )
}

function Cinema(props){
  const productStyle = {
    backgroundColor: 'cyan',
    border: '3px solid blue',
    borderRadius: '20px',
    margin: '10px'
  }
  return (
    <div className="person" style={productStyle}>
        <h2>Nayok: {props.nayok}</h2>
        <h4>Nayika: {props.nayika}</h4>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count +1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}



export default App;
