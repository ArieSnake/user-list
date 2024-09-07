import React from 'react';
import PropTypes from 'prop-types';
import './UserList.css'; 

export const UserList = ({ users }) => {
    return (
        <div className="user-list">
          <h3>User List</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Login</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.login}</td>
                  <td>{user.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ).isRequired
}
