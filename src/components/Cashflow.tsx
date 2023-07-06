import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import Part from "./Part";
import cashflowIcon from "../assets/images/money-bag.png";
import TitleField from "./TitleField";
import Summary from "./Summary";

const createField = (
  label: string,
  value1: string,
  setValue1: Function,
  value2: number,
  setValue2: Function
) => ({
  description: {
    label,
    value: value1,
    onChange: (e: any) => setValue1(e.target.value),
  },
  cashflow: {
    type: "number",
    value: value2,
    onChange: (e: any) => setValue2(Number(e.target.value)),
  },
});

const Cashflow = () => {
  // Income
  const [salary, setSalary] = useState("");
  const [salaryCf, setSalaryCf] = useState(0);
  const [interestDividends, setInterestDividends] = useState("");
  const [interestDividendsCf, setInterestDividendsCf] = useState(0);
  const [business, setBusiness] = useState("");
  const [businessCf, setBusinessCf] = useState(0);
  const [realEstate, setRealEstate] = useState("");
  const [realEstateCf, setRealEstateCf] = useState(0);

  // Expenses
  const [taxes, setTaxes] = useState("");
  const [taxesCf, setTaxesCf] = useState(0);
  const [homeMortgage, setHomeMortgage] = useState("");
  const [homeMortgageCf, setHomeMortgageCf] = useState(0);
  const [schoolLoan, setSchoolLoan] = useState("");
  const [schoolLoanCf, setSchoolLoanCf] = useState(0);
  const [carLoan, setCarLoan] = useState("");
  const [carLoanCf, setCarLoanCf] = useState(0);
  const [creditCard, setCreditCard] = useState("");
  const [creditCardCf, setCreditCardCf] = useState(0);
  const [otherExpenses, setOtherExpenses] = useState("");
  const [otherExpensesCf, setOtherExpensesCf] = useState(0);
  const [bankLoan, setBankLoan] = useState("");
  const [bankLoanCf, setBankLoanCf] = useState(0);
  const [childen, setChilden] = useState("");
  const [childrenCf, setChildrenCf] = useState(0);

  // Titles
  const [profession, setProfession] = useState("");
  const [dream, setDream] = useState("");
  const [auditor, setAuditor] = useState("");

  // Summary
  const [passiveIncome, setPassiveIncome] = useState(0);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [cashflow, setCashflow] = useState(0);

  const prePopulate = () => {
    setSalaryCf(9500);
    setInterestDividendsCf(100);
    setRealEstateCf(200);
    setBusinessCf(500);
    setTaxesCf(2000);
    setHomeMortgageCf(1000);
    setOtherExpensesCf(2000);
    setChildrenCf(1200);
    setProfession("Airline Pilot");
    setDream("Buy an island in Fiji");
    setAuditor("Sofia");
  };

  const incomeFields = [
    createField("Salary:", salary, setSalary, salaryCf, setSalaryCf),
    createField(
      "Interest/Dividends:",
      interestDividends,
      setInterestDividends,
      interestDividendsCf,
      setInterestDividendsCf
    ),
    createField(
      "Real Estate:",
      realEstate,
      setRealEstate,
      realEstateCf,
      setRealEstateCf
    ),
    createField("Business:", business, setBusiness, businessCf, setBusinessCf),
  ];
  const expenseFields = [
    createField("Taxes:", taxes, setTaxes, taxesCf, setTaxesCf),
    createField(
      "Home Mortgage Payment:",
      homeMortgage,
      setHomeMortgage,
      homeMortgageCf,
      setHomeMortgageCf
    ),
    createField(
      "School Loan Payment:",
      schoolLoan,
      setSchoolLoan,
      schoolLoanCf,
      setSchoolLoanCf
    ),
    createField(
      "Car Loan Payment:",
      carLoan,
      setCarLoan,
      carLoanCf,
      setCarLoanCf
    ),
    createField(
      "Credit Card Payment:",
      creditCard,
      setCreditCard,
      creditCardCf,
      setCreditCardCf
    ),
    createField(
      "Other expenses:",
      otherExpenses,
      setOtherExpenses,
      otherExpensesCf,
      setOtherExpensesCf
    ),
    createField(
      "Bank Loan Payment:",
      bankLoan,
      setBankLoan,
      bankLoanCf,
      setBankLoanCf
    ),
    createField(
      "Children Payment:",
      childen,
      setChilden,
      childrenCf,
      setChildrenCf
    ),
  ];

  useEffect(() => {
    setPassiveIncome(interestDividendsCf + businessCf + realEstateCf);
  }, [interestDividendsCf, businessCf, realEstateCf]);

  useEffect(() => {
    setExpenses(
      taxesCf +
        homeMortgageCf +
        schoolLoanCf +
        carLoanCf +
        creditCardCf +
        otherExpensesCf +
        bankLoanCf +
        childrenCf
    );
  }, [
    taxesCf,
    homeMortgageCf,
    schoolLoanCf,
    carLoanCf,
    creditCardCf,
    otherExpensesCf,
    bankLoanCf,
    childrenCf,
  ]);

  useEffect(() => {
    setIncome(salaryCf + passiveIncome);
  }, [salaryCf, passiveIncome]);

  useEffect(() => {
    setCashflow(income - expenses);
  }, [income, expenses]);

  const summary = {
    salary: salaryCf,
    passiveIncome,
    income,
    expenses,
    cashflow,
  };

  return (
    <Wrapper>
      <Header>
        <MenuTitle>
          <Image src={cashflowIcon} />
          <Strong>RAT RACE</Strong>
        </MenuTitle>
        <PrePopulate onClick={prePopulate}>Prepopulate</PrePopulate>
        <Subtitle>
          <Strong>Phase 1</Strong>
          <Desktop>
            <Strong>: GET OUT of the RAT RACE!</Strong> Build up your{" "}
            <Strong>Passive Income</Strong> to be greater than your{" "}
            <Strong>Total Expenses</Strong>
          </Desktop>
        </Subtitle>
      </Header>
      <Title>INCOME STATEMENT</Title>
      <Content>
        <Column>
          <Part number={1} title="Income" fields={incomeFields} />
          <Part number={2} title="Expenses" fields={expenseFields} />
        </Column>
        <Column small>
          <TitleField
            label="Profession"
            value={profession}
            onChange={(value: string) => setProfession(value)}
          />
          <TitleField
            label="Dream"
            value={dream}
            onChange={(value: string) => setDream(value)}
          />
          <TitleField
            label="Auditor"
            value={auditor}
            onChange={(value: string) => setAuditor(value)}
          />
          <SummaryWrapper>
            <Summary {...summary} />
          </SummaryWrapper>
        </Column>
      </Content>
      <Title>BALANCE SHEET</Title>
      <Content>
        <Column>
          <Part number={3} title="Assets" />
        </Column>
        <Column small>
          <Part number={4} title="Liabilities" />
        </Column>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
`;

const Subtitle = styled.span`
  margin: 0 50px;
  font-weight: 300;
  font-size: 16px;
`;
const Strong = styled.strong`
  white-space: nowrap;
`;
const Desktop = styled.span`
  display: none;
  @media (min-width: 600px) {
    display: inline;
  }
`;
const Title = styled.h1`
  color: black;
  font-weight: 300;
  margin: 5px 0;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 1000px) {
    flex-wrap: nowrap;
  }
`;
const SummaryWrapper = styled.div`
  max-width: 100%;
  overflow-x: scroll;
  display: flex;
  justify-content: center;
`;
const Column = styled.div<{ small?: boolean }>`
  width: 100%;

  @media (min-width: 1000px) {
    ${(p) =>
      p.small &&
      `
      margin-left: 30px;
      width: 80%;
      min-width: 500px;
  `}
  }
`;
const Image = styled.img`
  width: 30px;
  margin-right: 10px;
`;
const MenuTitle = styled.div`
  display: flex;
  align-items: center;
`;
const PrePopulate = styled.button`
  background-color: #fff;
  color: #000;
  padding: 8px 16px;
  border-radius: 24px;
`;

export default Cashflow;
