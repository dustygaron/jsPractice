import React, { useState } from 'react'
import './index.css'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

const App = () => {

  // Dummy data
  const usersData = [
    { id: 1, name: 'Dusty', username: 'dustygrl' },
    { id: 2, name: 'Marley', username: 'marleymar' },
    { id: 3, name: 'Suzette', username: 'suzyq' },
  ]

  // useState import
  const [users, setUsers] = useState(usersData)

  // Add new user to state - the [...users] keeps existing users in array
  // (Appends a user to the array)
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  // Delete user -------------------
  // (filters a user out by ID) 
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  // Make state for whether ro not edit mode is turned on 
  const [editing, setEditing] = useState(false)
  // Since we don't know who is being edited unitl its selected, create initial empty state for the form
  const initialFormState = { id: null, name: '', username: '' }
  // See and update who the current user being edited is
  const [currentUser, setCurrentUser] = useState(initialFormState)

  // When edit is selected on a user, turn on edit mode adn set the current user
  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  // Edit user -------------------
  // When edit form is submitted, map through the array, and update the user that matches the ID passed through
  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }



  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">

        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}

          <div className="flex-large">
            <h2>View users</h2>
            <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
