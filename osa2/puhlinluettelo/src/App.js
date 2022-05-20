import { useState } from 'react'
import Person from './components/Person.js'
import Filter from './components/Filter.js'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showFiltered, setShowFiltered] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log("Add person button clicked", event.target)

    const personObject = {
      name: newName,
      number: newNumber
    }
    console.log(personObject)
    handlePersonAddition(personObject)
  }


  const handleNewNameChange = (event) => {
    console.log("Name: ", event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    console.log("Number: ", event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNewFilterChange = (event) => {
    console.log("Filter was changed to: ", event.target.value)
    setShowFiltered(event.target.value)
  }

  const handlePersonAddition = (person) => {
      console.log("This person is under array check", person)
      console.log("This happens in handlePersonAddition method. \n", "Name", person.name, "Number", person.number)
      if (persons.find((x) => x.name == person.name)) {
        alert(`${person.name} is already added to phonebook`)
      } else {
        setPersons(persons.concat(person))
        setNewName("")
        setNewNumber("")
      }
      
  }
  const personsToShow = !showFiltered
    ? persons
    : persons.filter(person => person.name.includes(showFiltered))
  
  console.log("Filter:", showFiltered, " Array of filtered persons: ", personsToShow)
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={handleNewFilterChange} />

      <h4>Add new person</h4>
      <form onSubmit={addPerson}>
          <div>
          name: <input 
                  name='name'
                  value={newName}
                  onChange={handleNewNameChange}
                  />
          </div>
          <div>
          number: <input
                  name='number'
                  value={newNumber}
                  onChange={handleNewNumberChange}
                  />
          </div>
          <div><button type="submit">add</button></div>
      </form>

      <h2>Numbers</h2>
        {personsToShow.map(person => 
          <Person key = {person.name} person={person} />
        )}
    </div>
  )

}

export default App