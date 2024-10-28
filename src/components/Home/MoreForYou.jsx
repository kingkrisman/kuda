import React from "react";
import styled from "styled-components";
import { FaBriefcase } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { TbMoneybag } from "react-icons/tb";


const MoreForYou = () => {
  return (
    <Container>
       
      <Title>More for you</Title>
      <CardContainer>
        <Card>
    <Button>   <FaBriefcase /></Button> 
          <CardTitle>Kuda Business</CardTitle>
          <CardText>
            Grow your business with our all-in-one business manager. Get a POS,
            bulk transfers, payroll and more.
          </CardText>
          <LearnMore href="#">Learn more &gt;</LearnMore>
        </Card>

        <Card>

        <Button>    <IoIosSend /></Button> 
          <CardTitle>Transfer & Spend</CardTitle>
          <CardText>
            Send money for free to any Nigerian account with 25 free transfers
            every<br/>month.
          </CardText>
          <LearnMore href="#">Learn more &gt;</LearnMore>
        </Card>

        <Card>
        <Button>   <TbMoneybag /></Button> 
          <CardTitle>Loans</CardTitle>
          <CardText>
            Get up to ₦150,000 in your Kuda account easily and repay in
            convenient <br />installments.
          </CardText>
          <LearnMore href="#">Learn more &gt;</LearnMore>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default MoreForYou;






const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  margin-top:50px;
  
`;
const Button = styled.div`
color:#4a148c;
width:40px;
`;



const Title = styled.h2`
  color: #4a148c;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
   display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  background-color: #f5f5f5;
  padding: 60px;
  border-radius: 10px;
  width: 250px;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  color: #4a148c;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  color: #333;
  margin-bottom: 20px;
  font-weight: 500;
`;

const LearnMore = styled.a`
  color: #4a148c;
  text-decoration: none;
  font-weight: normal;
    text-decoration: underline;
  }
`;