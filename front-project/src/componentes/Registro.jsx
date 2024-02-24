import React from 'react';
import './Registro.css';

export const Registro = () => {
    return (
        <div className='Login-Container'>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                    <input type="text" className="form-control" placeholder='Nombre' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail2" className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder='Email' id="exampleInputEmail2" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" placeholder='Contraseña' id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    );
};
