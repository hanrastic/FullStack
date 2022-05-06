const App = () => {
  // const course = 'Half Stack application development'

  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course = {course} />
      <Content course = {course} />
      <Total course = {course} />
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part = {props.course.parts[0].name} exercises = {props.course.parts[0].exercises}/>
      <Part part = {props.course.parts[1].name} exercises = {props.course.parts[1].exercises}/>
      <Part part = {props.course.parts[2].name} exercises = {props.course.parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>
        Course: {props.part} Exercises: {props.exercises} 
    </p>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
         Number of exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
      </p>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>
         {props.course.name}
      </p>
    </div>
  )
}
export default App