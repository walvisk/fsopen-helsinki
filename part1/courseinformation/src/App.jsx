const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}
const Content = (props) => {
  return (
   <div>
    <Part part={props.parts[0].part} exercise={props.parts[0].exercise} />
    <Part part={props.parts[1].part} exercise={props.parts[1].exercise} />
    <Part part={props.parts[2].part} exercise={props.parts[2].exercise} />
   </div>
  )
}

const Total = (props) => {
  const total = props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise
  return (
    <p>Number of exercises {total}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {part: 'Fundamentals of React', exercise: 10},
    {part: 'Using props to pass data', exercise: 7},
    {part: 'State of a component', exercise: 14},
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
  )
}

export default App