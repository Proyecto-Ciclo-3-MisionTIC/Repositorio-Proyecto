import React from 'react'

 const Login = () => {
    return (
        <div>
            <h2> Inicia sesión en tú cuenta</h2>
            <form>
                <div>
                    <input type ='email' placeholder='login@gmail.com' required/>
                    <input type ='password' placeholder='Constraseña' required/>
                </div>
            </form>
            <div>
                <label>
                <input type='checkbox'/>
                Recuerdame
                </label>
            </div>
        </div>
    )
}

export default Login
