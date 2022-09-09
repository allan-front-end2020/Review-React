import{ useState} from 'react'


function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] =useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function LimpaEmail(){
       setUserEmail('')
    }


    return(
        <>
        <h2>Cadastre seu e-mail</h2>

   <form>
    <input 
    type="email"
     placeholder='digite seu email' 
     id="email" 
     name='email' 
     onChange={(e) => setEmail(e.target.value)}/> 
     <button onClick={enviarEmail} type="submit">Enviar</button>
     {userEmail &&(
        <div>
            O  e mail do Usuario é: {userEmail}
            <button onClick={LimpaEmail}>Limpar e-mail</button>
        </div>
     )}
    </form> 
        </>
    )
}

export default Condicional