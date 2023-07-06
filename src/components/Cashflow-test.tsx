// eslint-disable-next-line
const NOT_USED = "";
// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Header } from "./Header";
// import Part from "./Part";
// import cashflowIcon from "../assets/images/money-bag.png";
// import TitleField from "./TitleField";
// import Summary from "./Summary";

// const createField = (
//   label: string,
//   value1: string,
//   setValue1: Function,
//   value2: number,
//   setValue2: Function
// ) => ({
//   description: {
//     label,
//     value: value1,
//     onChange: (e: any) => setValue1(e.target.value),
//   },
//   cashflow: {
//     type: "number",
//     value: value2,
//     onChange: (e: any) => setValue2(Number(e.target.value)),
//   },
// });

// interface OnValueUpdateProps {
//   id: number;
//   isDescription: boolean;
//   value: string;
// }

// interface OnValueUpdate {
//   ({ id, isDescription, value }: OnValueUpdateProps): void;
// }

// const getDefaultIncomeFields = (onValueUpdate: OnValueUpdate) => [
//   {
//     id: 1,
//     description: {
//       label: "Salary",
//       value: "0",
//       onChange: (e: any) => {
//         onValueUpdate({ id: 1, isDescription: true, value: e.target.value });
//       },
//     },
//     cashflow: {
//       type: "number",
//       value: "0",
//       onChange: (e: any) => {
//         onValueUpdate({
//           id: 1,
//           isDescription: false,
//           value: e.target.value,
//         });
//       },
//     },
//   },
// ];

// const Cashflow = () => {
//   const handleValueUpdate = ({
//     id,
//     isDescription,
//     value,
//   }: OnValueUpdateProps) => {
//     const updateFieldIndex = incomeFields.findIndex((i: any) => i.id);
//     console.log({ incomeFields });
//     const updatedFields = incomeFields.slice();
//     console.log({ updateFieldIndex });
//     console.log({ updatedFields });
//     const description = !isDescription
//       ? updatedFields[updateFieldIndex].description
//       : {
//           ...updatedFields[updateFieldIndex].description,
//           value,
//         };
//     const cashflow = isDescription
//       ? updatedFields[updateFieldIndex].cashflow
//       : {
//           ...updatedFields[updateFieldIndex].cashflow,
//           value,
//         };
//     updatedFields[updateFieldIndex] = {
//       ...updatedFields[updateFieldIndex],
//       description,
//       cashflow,
//     };
//     console.log("RUNS");
//     setIncomeFields(updatedFields);
//   };
//   const init = getDefaultIncomeFields(handleValueUpdate);

//   // Titles
//   const [profession, setProfession] = useState("");
//   const [dream, setDream] = useState("");
//   const [auditor, setAuditor] = useState("");
//   const [incomeFields, setIncomeFields] = useState<any>([]);
//   const [expensesFields, setExpensesFields] = useState([]);

//   // Summary
//   const [passiveIncome, setPassiveIncome] = useState(0);
//   const [income, setIncome] = useState(0);
//   const [expenses, setExpenses] = useState(0);
//   const [cashflow, setCashflow] = useState(0);

//   useEffect(() => {
//     console.log("FIRST");
//     console.log({ init });
//     setIncomeFields(init);
//   }, []);

//   return (
//     <Wrapper>
//       <Header>
//         <MenuTitle>
//           <Image src={cashflowIcon} />
//           <Strong>RAT RACE</Strong>
//         </MenuTitle>
//         {/* <button onClick={prePopulate}>Prepopulate</button> */}
//         <Subtitle>
//           <Strong>Phase 1</Strong>
//           <Desktop>
//             <Strong>: GET OUT of the RAT RACE!</Strong> Build up your{" "}
//             <Strong>Passive Income</Strong> to be greater than your{" "}
//             <Strong>Total Expenses</Strong>
//           </Desktop>
//         </Subtitle>
//       </Header>
//       <Title>INCOME STATEMENT</Title>
//       <Content>
//         <Column>
//           <Part number={1} title="Income" fields={incomeFields} />
//           {/* <Part number={2} title="Expenses" fields={expenseFields} /> */}
//         </Column>
//         <Column small>
//           <TitleField
//             label="Profession"
//             value={profession}
//             onChange={(value: string) => setProfession(value)}
//           />
//           <TitleField
//             label="Dream"
//             value={dream}
//             onChange={(value: string) => setDream(value)}
//           />
//           <TitleField
//             label="Auditor"
//             value={auditor}
//             onChange={(value: string) => setAuditor(value)}
//           />
//           <SummaryWrapper>{/* <Summary {...summary} /> */}</SummaryWrapper>
//         </Column>
//       </Content>
//       <Title>BALANCE SHEET</Title>
//       <Content>
//         <Column>
//           <Part number={3} title="Assets" />
//         </Column>
//         <Column small>
//           <Part number={4} title="Liabilities" />
//         </Column>
//       </Content>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   padding: 10px;
// `;

// const Subtitle = styled.span`
//   margin: 0 50px;
//   font-weight: 300;
//   font-size: 16px;
// `;
// const Strong = styled.strong`
//   white-space: nowrap;
// `;
// const Desktop = styled.span`
//   display: none;
//   @media (min-width: 600px) {
//     display: inline;
//   }
// `;
// const Title = styled.h1`
//   color: black;
//   font-weight: 300;
//   margin: 5px 0;
// `;

// const Content = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   @media (min-width: 1000px) {
//     flex-wrap: nowrap;
//   }
// `;
// const SummaryWrapper = styled.div`
//   max-width: 100%;
//   overflow-x: scroll;
//   display: flex;
//   justify-content: center;
// `;
// const Column = styled.div<{ small?: boolean }>`
//   width: 100%;

//   @media (min-width: 1000px) {
//     ${(p) =>
//       p.small &&
//       `
//       margin-left: 30px;
//       width: 80%;
//       min-width: 500px;
//   `}
//   }
// `;
// const Image = styled.img`
//   width: 30px;
//   margin-right: 10px;
// `;
// const MenuTitle = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export default Cashflow;
