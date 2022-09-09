import PropTypes from "prop-types"

function Itens ({marca , lancamento}){
    return(

        <>
        <li>{marca} - {lancamento}</li>
        
        
        </>
    )
}

Itens.propsTypes ={
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired,
}
 Itens.defaultProps={
    marca:' faltou a marca',
    lancamento: 0,
 }
export default Itens