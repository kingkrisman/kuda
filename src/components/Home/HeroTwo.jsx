import React from "react";
import styled from "styled-components";
import htwo from "../../assets/herotwo.png"
const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e8eaf6;
  padding: 40px;
  border-radius: 10px;
  width: 80%;
  max-width: 1200px;
  margin: 20px auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
border:0.5px solid  #e8eaf6;
`;

const TextContent = styled.div`
  max-width: 500px;
  margin-left:80px;
      @media (max-width: 800px) {
text-align:center;
 margin-left:20px;
} 
`;

const Title = styled.h1`
  color: #4a148c;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: black;
  font-size: 1rem;
  margin-bottom: 20px;
 
`; 

const Button = styled.button`
  background-color: #4a148c;
  color: #fff;
  padding: 15px 40px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #370a75;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 600px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
    @media (max-width: 800px) {
display:none;

} 
`;

const StyledImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

const HeroTwo = () => {
  return (
    <Section>
      <TextContent>
        <Title>The money app for <br />Africans.</Title>
        <Subtitle>Save, spend, send and invest money across borders.</Subtitle>
        <Button>Join Kuda</Button>
      </TextContent>
      <ImageContainer>
        <StyledImage src={htwo} alt="Kuda app preview" />
      </ImageContainer>
    </Section>
  );
};

export default HeroTwo;