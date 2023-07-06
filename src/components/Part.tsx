import React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import PartInput, { PartInputProps } from "./PartInput";

interface FieldProps {
  description: PartInputProps;
  cashflow: PartInputProps;
}
interface Props {
  number: number;
  title: string;
  fields?: FieldProps[];
}

const Part = ({ number, title, fields }: Props) => {
  return (
    <Wrapper>
      <PartHeader>
        <Number>{number}</Number>
        <Title>{title}</Title>
      </PartHeader>
      <Content>
        {fields?.map((field) => (
          <Row>
            <Column>
              <PartInput {...field.description} />
            </Column>
            <Column small>
              <PartInput {...field.cashflow} />
            </Column>
          </Row>
        ))}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const PartHeader = styled(Header)`
  color: white;
  justify-content: flex-start;
  padding: 0;
  margin-left: 25px;
`;
const Content = styled.div`
  padding: 5px 15px 5px 10px;
`;
const Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -40px;
  background-color: white;
  height: 60px;
  width: 60px;
  font-size: 55px;
  border-radius: 50%;
  font-weight: 700;
  color: black;
`;
const Title = styled.h2`
  margin: 0 0 0 30px;
  font-size: 30px;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
`;
const Column = styled.div<{ small?: boolean }>`
  width: 100%;
  ${(p) => p.small && `width: 40%;`};
`;

export default Part;
