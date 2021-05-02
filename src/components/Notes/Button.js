export const Button = (props) => {
  const onToggle = (e) => {
    e.preventDefault();
    props.onToggle(props.style);
  };

  let className = "styleButton";
  if (props.active) className += " activeButton";

  return (
    <span className={className} onMouseDown={onToggle}>
      {props.label}
    </span>
  );
};
