import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

    const [name, setName] = useState("");
    const [nim, setNim] = useState("");
    const [jurusan, setJurusan] = useState("");
    const [prodi, setProdi] = useState("");
    const navigate = useNavigate();

    const addUser = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name, nim, jurusan, prodi
            });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={addUser}>
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
                    <button type='submit' className="button is-success">Tambahkan</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddUser;