import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
  text-align: center;
  border:1px  solid #ccc;
  box-shadow: 1px 4px 58px 1px rgba(115,115,115,0.75);
-webkit-box-shadow: 1px 4px 58px 1px rgba(115,115,115,0.75);
-moz-box-shadow: 1px 4px 58px 1px rgba(115,115,115,0.75);
margin-top:50px;

`;

const Title = styled.h2`
  font-size: 28px;
  color: #5b2dac;
  margin-bottom: 20px;
`;

const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
`;

const TableHeader = styled.th`
  background-color: #f4f4f4;
  padding: 10px 30px;
  font-weight: bold;
  color: #5b2dac;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableData = styled.td`
  padding: 20px 50px;
  text-align: center;
  border: 1px solid #ddd;
   @media (max-width: 800px) {
 padding: 5px 20px;

}
`;

const CheckMark = styled.span`
  color: #5b2dac;
  font-size: 18px;
`;

const CrossMark = styled.span`
  font-size: 18px;
`;

const comparisonData = [
  { feature: "Transfer Fee", otherBanks: "Up to ₦50 plus V.A.T.", kuda: "25 free transfers every month" },
  { feature: "Card Delivery", otherBanks: "🙁", kuda: "Yes" },
  { feature: "Card Maintenance Fee", otherBanks: "Up to ₦50 per quarter", kuda: "No" },
  { feature: "Alerts", otherBanks: "Charge for SMS alerts", kuda: "Free instant notifications" },
  { feature: "Annual Interest", otherBanks: "4%", kuda: "Up to 15%" },
  { feature: "Bill Payment Fee", otherBanks: "Up to ₦100 per bill", kuda: "No" },
  { feature: "Instant Reversals", otherBanks: "🙁", kuda: "Yes" },
  { feature: "Maintenance", otherBanks: "Yes", kuda: "No" },
];

const Comparison = () => {
  return (
    <Container>
      <Title>Choose the freedom you need.</Title>
      <ComparisonTable>
        <thead>
          <TableRow>
          <TableHeader></TableHeader>
            <TableHeader>Other Banks</TableHeader>
            <TableHeader>Kuda</TableHeader>
            
          </TableRow>
        </thead>
        <tbody>
          {comparisonData.map((row, index) => (
            <TableRow key={index}>
                 <TableData>{row.feature}</TableData>
              <TableData>{row.otherBanks}</TableData>
              <TableData>{row.kuda}</TableData>
             
            </TableRow>
          ))}
        </tbody>
      </ComparisonTable>
    </Container>
  );
};

export default Comparison;