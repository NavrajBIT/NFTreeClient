import { matchRoutes } from "react-router-dom";
import "./input.css";

const Checkbox = ({ label, checked, onChange }) => {
  const id = Math.floor(Math.random() * 1000);

  return (
    <div className="checkboxcontainer">
      <input type="checkbox" checked={checked} onChange={onChange} id={id} />
      <label className="checkboxlabel" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
