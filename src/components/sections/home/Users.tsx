import { useEffect, useState } from 'react';
import axios from 'axios';
import './Users.scss';
import Table from 'react-bootstrap/Table';

interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    birthday: Date
}

const Users = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await axios.get('https://localhost:5001/api/Users');
        let data = response.data;

        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, []);


    return (
        <section>
            <h1>Users</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Date of birth</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: User) =>
                    (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.birthday.toString().split('T')[0]}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </section>
    )
}

export default Users;