import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {

    const [name, setName] = useState("");
    const [nim, setNim] = useState("");
    const [jurusan, setJurusan] = useState("");
    const [prodi, setProdi] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const updateUser = async(e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/users/${id}`, {
                name, nim, jurusan, prodi
            });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserById();
    }, []);

    const getUserById = async() => {
        try {
           const response = await axios.get(`http://localhost:5000/users/${id}`); 
           setName(response.data.name);
           setNim(response.data.nim);
           setJurusan(response.data.jurusan);
           setProdi(response.data.prodi);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateUser}>
                <div className="field">
                    <label className='label'>Nama</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className="input" 
                            placeholder='Nama Lengkap' 
                            value={name}
                            onChange = {(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <label className='label'>NIM</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className="input" 
                            placeholder='NIM'
                            value={nim}
                            onChange = {(e) => setNim(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className='label'>Jurusan</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className="input" 
                            placeholder='Jurusan'
                            value={jurusan}
                            onChange = {(e) => setJurusan(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className='label'>Prodi</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className="input" 
                            placeholder='Prodi'
                            value={prodi}
                            onChange = {(e) => setProdi(e.target.value)}/>
                    </div>
                </div>
                <div className="label">
                    <button type='submit' className="button is-success">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditUser;