import React from 'react';
import styled from 'styled-components';
import { FaCreditCard, FaMoon, FaGift, FaPaperPlane, FaPiggyBank } from 'react-icons/fa';




const Info = () => {
  const features = [
    {
      icon: <FaCreditCard />,
      title: 'Order a Kuda card',
      description: 'Order a Kuda card on the app with pickup and delivery options.',
    },
    {
      icon: <FaMoon />,
      title: 'Cashless payments',
      description: 'Enjoy cashless payment options online and offline.',
    },
    {
      icon: <FaGift />,
      title: 'Pay bills & buy gift cards',
      description: 'Pay your essential bills and buy gift cards easily.',
    },
    {
      icon: <FaPaperPlane />,
      title: 'Free transfers',
      description: 'Get 25 free transfers to Nigerian banks every month.',
    },
    {
      icon: <FaPiggyBank />,
      title: 'Automatic savings',
      description: 'Save money automatically any time you spend.',
    },
  ];

  return (
  
    <FeaturesWrapper>
      {features.map((feature, index) => (
        <Card key={index}>
          <Icon>{feature.icon}</Icon>
          <TextContainer>
            <Title>{feature.title}</Title>
            <Description>{feature.description}</Description>
          </TextContainer>
        </Card>
      ))}
      
    </FeaturesWrapper>

  );
};

export default Info;





const FeaturesWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  background-color: transparent;
  
`;

const Card = styled.div`
  width: 250px;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin: 1rem;
  
`;

const Icon = styled.div`
  background-color: #f0f4ff;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6200ea;
  font-size: 1.5rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  font-size: 1rem;
  color: #333;
  margin: 0;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #555;
  margin: 0.5rem 0 0 0;
`;