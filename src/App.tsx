import { increment, decrement, incrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, userAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const {count} = userAppSelector((state) => state.counter);

  return (
    <>
      <p>
        Counter
      </p>
      <button className='bg-green-500' onClick= {()=> dispatch(increment())}>Increment</button>
      <button className='bg-blue-500' onClick= {()=> dispatch(incrementByAmount(5))}>Increment BY value</button>
      <div>{count}</div>
      <button className='bg-red-500' onClick= {()=> dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default App
