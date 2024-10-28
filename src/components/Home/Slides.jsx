import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
@media (max-width: 800px) {
  
   display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

`;

const CarouselContent = styled.div`
  display: flex;
  animation: ${slide} 25s linear infinite;
  
`;

const TestimonialCard = styled.div`
  flex: 0 0 25%;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  margin: 0 10px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-weight: bold;
  margin: 10px 0;
`;

const TestimonialText = styled.p`
  font-style: italic;
  color: #555;
`;

const testimonials = [
  {
    name: "Mu'azu Muhammad Kudu",
    text: "Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours later and my money is back in my account... Special shout out to Maxwell and Norah",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Tomisimv",
    text: "Just joined the best Digital Bank in Nigeria. I have no complaints whatsoever since I started using Kuda.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Tomisimv",
    text: "Just joined the best Digital Bank in Nigeria. I have no complaints whatsoever since I started using Kuda.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Babajide Duroshola",
    text: "Never thought an app would stylish become my everyday way to bank and have access to physical cash. @kudabank is sleek",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Babajide Duroshola",
    text: "Never thought an app would stylish become my everyday way to bank and have access to physical cash. @kudabank is sleek",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Mu'azu Muhammad Kudu",
    text: "Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours later and my money is back in my account... Special shout out to Maxwell and Norah",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Tomisimv",
    text: "Just joined the best Digital Bank in Nigeria. I have no complaints whatsoever since I started using Kuda.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Tomisimv",
    text: "Just joined the best Digital Bank in Nigeria. I have no complaints whatsoever since I started using Kuda.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Babajide Duroshola",
    text: "Never thought an app would stylish become my everyday way to bank and have access to physical cash. @kudabank is sleek",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Babajide Duroshola",
    text: "Never thought an app would stylish become my everyday way to bank and have access to physical cash. @kudabank is sleek",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Mu'azu Muhammad Kudu",
    text: "Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours later and my money is back in my account... Special shout out to Maxwell and Norah",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Tomisimv",
    text: "Just joined the best Digital Bank in Nigeria. I have no complaints whatsoever since I started using Kuda.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Tomisimv",
    text: "Just joined the best Digital Bank in Nigeria. I have no complaints whatsoever since I started using Kuda.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Babajide Duroshola",
    text: "Never thought an app would stylish become my everyday way to bank and have access to physical cash. @kudabank is sleek",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Babajide Duroshola",
    text: "Never thought an app would stylish become my everyday way to bank and have access to physical cash. @kudabank is sleek",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Mu'azu Muhammad Kudu",
    text: "Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours later and my money is back in my account... Special shout out to Maxwell and Norah",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Tomisimv",
    text: "Just joined the best Digital Bank in Nigeria. I have no complaints whatsoever since I started using Kuda.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Tomisimv",
    text: "Just joined the best Digital Bank in Nigeria. I have no complaints whatsoever since I started using Kuda.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Babajide Duroshola",
    text: "Never thought an app would stylish become my everyday way to bank and have access to physical cash. @kudabank is sleek",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "Babajide Duroshola",
    text: "Never thought an app would stylish become my everyday way to bank and have access to physical cash. @kudabank is sleek",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  },
  {
    name: "@RealSOK_",
    text: "This is the best banking app! I'm enjoying seamless banking plus the free transfers to other banks is the height of joy. This is what I call freedom. I've made Kuda my main bank account and I'm gonna refer all my friends.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
  }
];

const Slides = () => {
  return (
    <CarouselWrapper>
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <Avatar src={testimonial.avatar} alt={testimonial.name} />
            <Name>{testimonial.name}</Name>
            <TestimonialText>{testimonial.text}</TestimonialText>
          </TestimonialCard>
        ))}
      </CarouselContent>
    </CarouselWrapper>
  );
};

export default Slides;