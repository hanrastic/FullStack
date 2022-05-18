import React from 'react'

const Header = ({ course }) => <h1>{course.name}</h1>



const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ course }) => 
  <>
    {course.parts.map( part =>
      <Part key={part.id} part={part} />
      )}
  </>

const Total = ({ course }) => {
  
    const sum = course.parts.reduce((summ, category) => summ + category.exercises, 0)
    console.log("Summa", sum)
    
    return(
      <p>Number of exercises {sum}</p>
    )
}


const Course = ({course}) =>
  <>
  <Header course={course} />
  <Content course={course} />
  <Total course={course}/>
  </>


export default Course