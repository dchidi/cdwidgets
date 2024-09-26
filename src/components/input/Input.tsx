import style from "./Input.module.css";

interface IInputProps {
  label?: string;
  type: "text" | "number" | "password";
}

const Input: React.FC<IInputProps> = ({ type, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} />
    </div>
  );
};
export default Input;
