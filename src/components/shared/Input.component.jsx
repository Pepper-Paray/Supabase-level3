const Input = ({ id, type = "text", placeholder = "", value, onChange, className = "", disabled }) => {
    return (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        disabled={disabled}
      />
    );
  };
  
  export default Input;
  // The Input component is a reusable input field that accepts various props to customize its behavior and appearance.
  //  It supports different types of input, placeholder text, value management, change handling, and styling through className.
  //  The disabled prop allows the input to be disabled when necessary.