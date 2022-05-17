import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  console.log(props)
  if (props.state1 === 0 && props.state2 === 0 && props.state3 === 0) {
    return (
      <div>
          <p>No feedback given</p>
      </div>
    )
  } else {
    let average = ((props.state1)+ (props.state2*0) + (props.state3*-1))/props.state1 + props.state2+ props.state3
    
    let positive = props.state1 / (props.state1 + props.state2 + props.state3)
  
  return(
    <div>
    <StatisticLine name ="good" value={props.state1}/>
    <StatisticLine name ="neutral" value={props.state2}/>
    <StatisticLine name ="bad" value={props.state3}/>
    <StatisticLine name ="all" value={props.state1 + props.state2+ props.state3}/>
    <StatisticLine name ="average" value={average}/>
    <StatisticLine name ="positive" value={positive}/>

    </div>
  )
  }
}

const StatisticLine = (props) => {
  return(
    <tr>

    <td>{props.name}</td>
    <td>{props.value}</td>

    </tr>
    
  )
}

const App = () => {
  // tallenna napit omaan tilaansaa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>Statistics</h2>
      <Statistics state1 = {good} state2 = {neutral} state3 = {bad}/>
    </div>


  )
}

export default App