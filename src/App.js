import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './redux/actions'
function App() {
  const counter = useSelector(state => state.myCount)
  const IsLogged = useSelector(state => state.loggedIn)
  const dispatch = useDispatch()
  return (
    <div className="App">
   <h1>Counter {counter}</h1>
   <button onClick={()=> dispatch(increment())}>+</button>
   <button onClick={()=> dispatch(decrement())}>-</button>
   {IsLogged?  <h3>valuable info I should see</h3> : <h3>nothing to see</h3>}
 
    </div>
  );
}

export default App;
