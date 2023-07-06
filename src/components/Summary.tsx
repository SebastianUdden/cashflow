import styled from "styled-components";

interface Props {
  salary: number;
  passiveIncome: number;
  income: number;
  expenses: number;
  cashflow: number;
}

const Summary = ({
  salary,
  passiveIncome,
  income,
  expenses,
  cashflow,
}: Props) => {
  return (
    <Wrapper>
      <Column>
        <Value>{salary}</Value>
        <Sign>+</Sign>
        <Value border="5px solid black">{passiveIncome}</Value>
        <Span>(Cashflow from Interest/Dividends and Real Estate/Business)</Span>
        <Row>
          <LeftShift>
            <Sign>=</Sign>
          </LeftShift>
          <Value>{income}</Value>
        </Row>
        <Sign>-</Sign>
        <Value border="3px solid black">{expenses}</Value>
        <Row last>
          <LeftShift>
            <Sign>=</Sign>
          </LeftShift>
          <Value border="4px dotted black">{cashflow}</Value>
        </Row>
        <Label>Monthly Cash Flow</Label>
      </Column>
      <Column left>
        <BorderBox />
        <BlackBox>
          If <Strong>Passive Income</Strong> is greater than{" "}
          <Strong>Total Expenses</Strong>, you're out of the Rat Race!
        </BlackBox>
        <BorderBox lower />
      </Column>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 3px solid black;
  margin: 30px 0;
  padding: 20px 20px 20px 50px;
  display: inline-flex;
`;
const Column = styled.div<{ left?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${(p) => p.left && `display: none;`}
  @media (min-width: 600px) {
    max-width: 255px;

    ${(p) =>
      p.left &&
      `
    display: flex;
    max-width: 255px;
    align-items: flex-start;
    padding-top: 105px;
    margin-left: -2px
  `}
  }
`;
const Value = styled.div<{ border?: string }>`
  box-sizing: border-box;
  border: ${(p) => (p.border ? p.border : "2px solid black")};
  width: 250px;
  padding: 5px;
  margin-top: 12px;
`;
const Label = styled.label`
  font-weight: 700;
`;
const Sign = styled.span`
  line-height: 30px;
  font-size: 50px;
  font-weight: 500;
`;
const LeftShift = styled.div`
  position: absolute;
  left: -38px;
  top: 8px;
`;
const Row = styled.div<{ last?: boolean }>`
  position: relative;
  ${(p) =>
    p.last &&
    `
    margin-top: 20px;
  `}
`;
const Span = styled.span`
  padding: 5px 30px 10px;
  font-size: 11px;
`;
const BorderBox = styled.div<{ lower?: boolean }>`
  border: none;
  border-top: 2px dotted black;
  border-right: 2px dotted black;
  width: 100px;
  height: 45px;
  ${(p) =>
    p.lower &&
    `
    border: none;
    border-bottom: 2px dotted black;
    border-right: 2px dotted black;
  `}
`;
const BlackBox = styled.div`
  background-color: black;
  color: white;
  padding: 5px 10px;
  font-size: 10px;
  width: 90px;
  margin-left: 40px;
`;
const Strong = styled.strong`
  font-weight: 800;
`;
export default Summary;
