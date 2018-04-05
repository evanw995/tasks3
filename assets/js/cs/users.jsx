import React from 'react';
import { Link } from 'react-router-dom';
// Code source credit: Nat's lecture notes with modifications by Evan Welsh

function User(params) {
  return <p>{params.user.name} - <Link to={"/users/" + params.user.id}>tasks</Link></p>;
}

export default function Users(params) {
  let users = _.map(params.users, (uu) => <User key={uu.id} user={uu} />);
  return <div>
    { users }
  </div>;
}
