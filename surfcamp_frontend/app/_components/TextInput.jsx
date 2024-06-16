const TextInput = ({ inputName, value, label, onChange }) => {
  return (
    <div className="input__container">
      <label htmlFor={inputName} className="copy">
        {label}
      </label>
      <input
        type="text"
        id={inputName}
        name={inputName}
        value={value}
        onChange={onChange}
        className="input input__text input--beige"
      />
    </div>
  );
};

export default TextInput;
