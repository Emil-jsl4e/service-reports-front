import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { User } from '../models/user';

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        'http://localhost:3333/api/admin/servisants',
      );

      setUsers(data);
      await console.log(data)
    })();
  }, []);
  return (
      <div>
    <Layout>

      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>
                  <button>
                   <a href={`users${user.id}/links`}>View</a>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
      </div>
  );
};

export default Users;
