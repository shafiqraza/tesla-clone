import React from "react";

import { Group, Input, Label } from "./form-input.styles";

const FormInput = ({
  type,
  required,
  name,
  value,
  id,
  handleChange,
  label,
}) => (
  <Group>
    {label ? <Label htmlFor={id}>{label}</Label> : null}
    <Input
      type={type}
      required={required}
      name={name}
      id={id}
      value={value}
      onChange={handleChange}
    />
  </Group>
);

export default FormInput;
