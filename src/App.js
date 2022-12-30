const counterReducer = (state, action) => {
  
  const {type} = action
  if (type === '@counter/incremented') {
    return state + 1
  }
  if (type === '@counter/decremented') {
    return state - 1
  }
  if (type === '@counter/reseted') {
    return 0
  }
}

const actionIncrement = {
  type: '@counter/incremented'
}

const actionDecremented = {
  type: '@counter/decremented'
}

const actionReset = {
  type: '@counter/reseted'
}

export default function App() {

  return (
    <div>
      {counterReducer(0, actionIncrement)}
      {counterReducer(1, actionDecremented)}
    </div>

  );
}
