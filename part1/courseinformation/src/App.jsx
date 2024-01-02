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
    <Part part={props.contents[0].part} exercise={props.contents[0].exercise} />
    <Part part={props.contents[1].part} exercise={props.contents[1].exercise} />
    <Part part={props.contents[2].part} exercise={props.contents[2].exercise} />
   </div>
  )
}

const Total = (props) => {
  const total = props.contents[0].exercise + props.contents[1].exercise + props.contents[2].exercise
  return (
    <p>Number of exercises {total}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const contents = [
    {part: 'Fundamentals of React', exercise: 10},
    {part: 'Using props to pass data', exercise: 7},
    {part: 'State of a component', exercise: 14},
  ]

  return (
    <div>
      <Header course={course}/>
      <Content contents={contents} />
      <Total contents={contents}/>
    </div>
  )
}

export default App