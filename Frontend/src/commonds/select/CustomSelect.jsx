import React from "react";
import styles from "./customSelect.module.css";
import { useFormContext, Controller } from "react-hook-form";

function CustomSelect(props) {
  const { text, arrayOptions, width, name, validate } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      rules={validate}
      render={({ field }) => (
        <select
          className={`form-select ${styles.selectContainer} ${styles[width]}`}
          {...field}
        >
          <option value="" disabled>
            {text}
          </option>
          {arrayOptions.map((option, i) => {
            return (
              <option key={i} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
      )}
    />
  );
}

export default CustomSelect;
