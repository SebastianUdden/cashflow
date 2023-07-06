import styled from "styled-components";

interface Props {
  label: string;
  value: string;
  onChange: any;
}

const TitleField = ({ label, value, onChange }: Props) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input value={value} onChange={(e: any) => onChange(e.target.value)} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const Label = styled.label`
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  margin-right: -15px;
  font-weight: 700;
  z-index: 99;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  padding-left: 25px;
`;

export default TitleField;
