import React from "react";
import styled from "styled-components";

export interface PartInputProps {
  label?: string;
  type?: string;
  value: string | number;
  onChange: Function;
}

const PartInput = ({ label, type, value, onChange }: PartInputProps) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Input
        type={type}
        value={value.toString()}
        onChange={(e) => onChange(e)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const Label = styled.label`
  font-weight: 700;
  border-bottom: 1px solid black;
  padding: 5px;
  white-space: nowrap;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 4px;
  margin-right: 10px;
  border-bottom: 1px solid black;
`;

export default PartInput;
