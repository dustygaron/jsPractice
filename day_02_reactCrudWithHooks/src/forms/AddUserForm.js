import React, { useState } from 'react'

const AddUserForm = props => {

  // Create initial state and set to empty - can hold form data her temp then revert to this empty state after form submission
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  // Create func to update state within the form
  // Object destructuring allows us to easily get name(key) and value from form
  // Finally, use computed property name to dynamically set name using [name] and value
  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
    console.log("EVENT:=====>>>>" + event)
  }


  return (
    <form onSubmit={event => {
      event.preventDefault()
      if (!user.name || !user.username) return

      props.addUser(user)
      setUser(initialFormState)
    }}
    >
      <label>Name</label>
      <input type='text' name='name' value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type='text' name='username' value={user.username} onChange={handleInputChange} />
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm