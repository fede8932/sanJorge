import React, { useRef, useState } from "react";
import styles from "./customInput.module.css";
import { useFormContext } from "react-hook-form";

function CustomInput(props) {
  const { width, icon, name, validate } = props;
  // const inputRef = useRef(null);
  const [classDivContainer, setClassDivContainer] = useState("inputContainer");
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div style={{marginBottom: "15px"}} className={`${styles[width]}`}>
      <div
        // onClick={() => {
        //   inputRef.current.focus();
        //   setClassDivContainer("inputContainerActive");
        // }}
        onBlur={() => {
          setClassDivContainer("inputContainer");
        }}
        className={`${styles[classDivContainer]}`}
      >
        <i className={`${styles.searchIcon} ${icon}`}></i>
        <input
          {...register(name, validate)}
          onFocus={() => {
            setClassDivContainer("inputContainerActive");
          }}
          // ref={inputRef}
          className={styles.input}
          {...props}
        />
      </div>
      <div className={styles.errorContainer}>{errors[name] && <span>El campo es obligatorio</span>}</div>
    </div>
  );
}

export default CustomInput;

// import React, { useRef, useState, forwardRef } from "react";
// import styles from "./customInput.module.css";

// const CustomInput = forwardRef((props, ref) => {
//   const { width, icon, onChange } = props;
//   const [classDivContainer, setClassDivContainer] = useState("inputContainer");

//   const handleChange = (event) => {
//     onChange && onChange(event); // Propaga el evento onChange si se proporciona
//   };

//   return (
//     <div
//       onClick={() => {
//         ref.current.focus();
//         setClassDivContainer("inputContainerActive");
//       }}
//       onBlur={() => {
//         setClassDivContainer("inputContainer");
//       }}
//       className={`${styles[classDivContainer]} ${styles[width]}`}
//     >
//       <i className={`${styles.searchIcon} ${icon}`}></i>
//       <input
//         ref={ref}
//         className={styles.input}
//         onChange={handleChange} // Agrega el evento onChange
//         {...props} // Propaga los demás atributos al input
//       />
//     </div>
//   );
// });

// export default CustomInput;
