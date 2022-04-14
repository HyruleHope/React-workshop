import React, { useEffect, useState } from 'react'
import { getAllUser } from '../api/user'
import { User } from '../api/types'
import UserProfile from './UserProfile'

const AllUsers = () => {
  const [users, setUsers] = useState<Array<User>>([])

  async function _getAllUsers() {
    console.log("useEffect");
    const data = await getAllUser();
    setUsers(data);
  }

  useEffect(() => {
    _getAllUsers();
  }, []);

  function renderUsers(values: User) {
    return (
        <div key={values.id}>
            <UserProfile {...values} />
        </div>
    )
  }
  return <ul className="user-list">{users.map(renderUsers)}</ul>
}

export default AllUsers
