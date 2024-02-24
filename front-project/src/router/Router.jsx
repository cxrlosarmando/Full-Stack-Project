import { createBrowserRouter } from 'react-router-dom';
import  Registro  from '../componentes/Registro';
import Login from '../componentes/Login';


const router = createBrowserRouter([

    {path: '/Registro', component: Registro},
    {path: '/Login', component: Login},
])

