function Formualario (){


    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('Cadastrou o usuario')
    }

    return (
    <>
    <form onSubmit={cadastrarUsuario}>
        <div>
            <input  type='text' placeholder="digite seu nome"/>
        </div>
        <div>
            <input  type='submit' value='cadastrar' />
        </div>
    </form>




    </>
    )

}

export default Formualario