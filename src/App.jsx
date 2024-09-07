import React, { useState } from 'react';
import { UserList } from './components/UserList';
import { AddUser } from './components/AddUser';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

/**
 * Main App component that manages the overall layout and state of the application.
 *
 * @return {JSX.Element} The rendered App component.
 */
function App() {
  // State to hold the list of users
  const [users, setUsers] = useState([]);

  return (
    <div className="app-container">
      {/* Header section of the application */}
      <header className="header">
        <h1>User Management</h1>
      </header>

      {/* Component to add new users and updates the user state */}
      <AddUser setUsers={setUsers} />

      {/* Component to display the list of users */}
      <UserList users={users} />

      {/* Container for displaying toast-notifications */}
      <ToastContainer />
    </div>
  )
}

export default App;
