import './style.css';

const CustomButton=({buttonName,onClick,buttonStyle})=>{
    return(
        <button type='button' className="button-class" onClick={onClick} style={buttonStyle}>{buttonName}</button>
    )
}

export default CustomButton;