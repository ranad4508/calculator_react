import styles from "./Button.module.css";
const Button = ({ isOutline, icon, text, ...rest }) => {
  // const Button = (props) => {
  // const { isOutline, icon, text } = props;
  return (
    <button
      {...rest}
      className={isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {" "}
      {icon} {text} {/* {props.icon} {props.text}{" "} */}
    </button>
  );
};

export default Button;
