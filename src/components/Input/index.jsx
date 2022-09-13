import './styles.css'

function Input({type, label, id, name}) {
  
    
    
    return(
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} name={name} />
        </>
    )
}

export default Input;