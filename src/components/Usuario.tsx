import React, { useState } from 'react'

export const Usuario = () => {
    
    const [user, setUser] = useState();
    const login = ()=>{
        // setUser({
        //     id: 123,
        //     nombre: 'Roger Ruiz'});
    }
  
    return (
    <div className='nt-5'>
        <h3>Usuario UseState</h3>

        <button className='btn btn-outline-primary'>
            Login
        </button>

        <pre>
            {JSON.stringify(user)}
        </pre>
    </div>
)
}
