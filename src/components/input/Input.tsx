import style from "./Input.module.css";

export interface IInputProps {
  label?: string;
  type: "text" | "number" | "password";
}

const Input: React.FC<IInputProps> = ({ type, label }) => {
  return (
    <div className={style.root}>
      <label className={style.label}>{label}</label>
      <input type={type} className={style.input} />
    </div>
  );
};
export default Input;
