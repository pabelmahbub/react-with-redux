import { increment, decrement } from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const {count} = useSelector((state: RootState) => state.counter);

  return (
    <>
      <p>
        Counter
      </p>
      <button className='bg-green-500' onClick= {()=> dispatch(increment())}>Increment</button>
      <div>{count}</div>
      <button className='bg-red-500' onClick= {()=> dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default App
