import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    })

    const getUsers = async() => {
        try {
            const response = await axios.get('http://localhost:5000/users');
            setUser(response.data);     
        } catch (error) {
            console.log(error);
        }
    }

    const deleteUser =  async(id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
        <h1 className='is-size-4 has-text-centered has-text-weight-bold'>CRUD WEB REACT JS + EXPRESS JS + MVC</h1>
        <Link to={'add'} className='button is-success mt-5'>Tambah Data</Link>
            <table className='table is-striped is-bordered is-fullwidth is-hoverable mt-3'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>NIM</th>
                        <th>Jurusan</th>
                        <th>Prodi</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.nim}</td>
                            <td>{user.jurusan}</td>
                            <td>{user.prodi}</td>
                            <td>
                                <Link to={`edit/${user.id}`} className='button is-small is-info'>Edit</Link>
                                <button onClick={() => deleteUser(user.id)} className='button is-small is-danger js-modal-trigger'  data-target="modal-js-example">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList;