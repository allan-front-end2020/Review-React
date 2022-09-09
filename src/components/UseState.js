import { useState } from 'react'


function UseState (){
    function cadastrarUsuario(e){
        e.preventDefault()
       console.log(`Usuario ${name} foi cadastrado, e sua senha é ${password}`)
    }

    const  [name, setName] = useState()
    const  [password, setPassword] = useState()

    return (
    <>
    <form onSubmit={cadastrarUsuario}>
        <div>
        <label htmlFor="name">Nome:</label>
            <input 
            type='text' 
            id='name'
            name='name'
            placeholder="digite seu nome"
            onChange={(e) => setName(e.target.value)}
            />
            
        </div>

        <div>
        <label htmlFor="senha">Senha:</label>
            <input  
            type='password'
            id='password' 
            name='password'
            placeholder="digite sua senha"
            onChange={(e) => setPassword(e.target.value)} 
            />
            

        </div>
        <div>
            <input  type='submit' value='cadastrar' />
        </div>
    </form>

    </>
    )
    }
export default UseState