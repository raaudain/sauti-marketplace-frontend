import React, {useState} from 'react'
import Header from "./Header"

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        email: ""
    });

    const handleChange = event => {
        event.preventDefault();
        setCredentials({...credentials, [event.target.name]: event.target.value});
    }

    const register = event => {
        event.preventDefault();
    }

    return(
        <>
            <Header />
        </>
    )
}

export default Register;