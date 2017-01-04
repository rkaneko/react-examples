'use strict';

const React = require('react');

const UsersList = (props) => {
  const {users} = props;
  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}: {user.age}</li>
        ))}
      </ul>
    </div>
  );
};

module.exports = UsersList;
