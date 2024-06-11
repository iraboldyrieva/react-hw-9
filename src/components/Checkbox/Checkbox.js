import { FaRegCheckSquare, FaRegSquare } from "react-icons/fa";

export default function Checkbox({ isChecked, onChange }) {
  return (
    <div>
      <label htmlFor="checkbox">
        <input
          style={{ display: "none" }}
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={onChange}
        />
      </label>
      <div onClick={onChange} style={{ display: "flex", alignItems: "center" }}>
        {isChecked ? <FaRegCheckSquare /> : <FaRegSquare />}
      </div>
    </div>
  );
}
