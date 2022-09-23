import './style.css'

const CustomTextInput = ({ value, onChange,placeholder }) => {
    return (
        <input
            placeholder={placeholder}
            className="rounded-md w-full border border-gray-400 p-3 mb-5"
            value={value}
            onChange={({ target: { value } }) => onChange(value)}
        />
    )
}

export default CustomTextInput;