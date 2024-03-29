import { ForwardedRef, forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <div className="mb-3 ">
      <label htmlFor={props.name} className="form-label input-text-transition" style={{ fontSize: 18, color: "#00000090", fontWeight: 400 }}>
        {props.title}
      </label>
      <div className="">
        <input
          style={{ color: "#00224C", border: "1.5px solid #00000060", borderRadius: 8, height: 40, fontSize: 18, width: 250, paddingLeft: 10, paddingRight: 10 }}
          type={props.type}
          className={props.className}
          ref={ref}
          id={props.name}
          autoComplete={props.autoComplete}
          onChange={props.onChange}
          defaultValue={props.value}
        />
      </div>
    </div>
  );
});

export default Input;

export const TextFieldInput = forwardRef((props, ref) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.name} className="form-label input-text-transition" style={{ fontSize: 18, color: "#00000090", fontWeight: 400 }}>
        {props.title}
      </label>
      <div className="">
        <textarea
          style={{ color: "#00224C", border: "1.5px solid #00000060", borderRadius: 8, fontSize: 18, width: '80%', color:'#777' }}
          rows={5}
          type={props.type}
          className={props.className}
          ref={ref}
          id={props.name}
          onChange={props.onChange}
          defaultValue={props.value}
        />
      </div>
    </div>
  );
});