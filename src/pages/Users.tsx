import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { User } from '../models/user';
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";


const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  let numberOfUser = 1;

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        'servisants',
      );

      setUsers(data);
      await console.log(data)
    })();
  }, []);
  return (
      <div>
    <Layout>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            return (
              <TableRow key={user.id}>
                <TableCell>{numberOfUser ++}</TableCell>
                <TableCell>
                  {user.firstName} {user.lastName}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button variant="contained"
                    href={`users${user.id}/links`}>View
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Layout>
      </div>
  );
};

export default Users;
