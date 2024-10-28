import React from "react";
import styled from "styled-components";
import { BiLogoPlayStore } from "react-icons/bi"
import { FaApple } from "react-icons/fa"
import logo from "../assets/kuda.png"
const Footer = () => {
  return (
    <FooterContainer>
    
      <LinksContainer>
      <Logo><img src={logo} width="100px" /></Logo>
        <Column>
          <ColumnTitle>Personal</ColumnTitle>
          <FooterLink href="#">Discover Personal</FooterLink>
          <FooterLink href="#">Transfer & Spend</FooterLink>
          <FooterLink href="#">Save</FooterLink>
          <FooterLink href="#">Investments</FooterLink>
          <FooterLink href="#">Kuda card</FooterLink>
        </Column>
        <Column>
          <ColumnTitle>Business</ColumnTitle>
          <FooterLink href="#">Discover Business</FooterLink>
          <FooterLink href="#">Business Registration</FooterLink>
          <FooterLink href="#">softPOS</FooterLink>
          <FooterLink href="#">Invoicing</FooterLink>
          <FooterLink href="#">POS Machine</FooterLink>
          <FooterLink href="#">Business Loan</FooterLink>
          <FooterLink href="#">Business API</FooterLink>
          <FooterLink href="#">Join Kuda Business</FooterLink>
        </Column>
        <Column>
          <ColumnTitle>Company</ColumnTitle>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Press</FooterLink>
          <FooterLink href="#">Join Our Team</FooterLink>
          <FooterLink href="#">About Us</FooterLink>
        </Column>
        <Column>
          <ColumnTitle>Help</ColumnTitle>
          <FooterLink href="#">Get Help</FooterLink>
          <FooterLink href="#">Scam Awareness</FooterLink>
          <FooterLink href="#">FAQs</FooterLink>
          <FooterLink href="#">Security</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
          <FooterLink href="#">Self Help</FooterLink>
        </Column>
        <Column>
          <ColumnTitle>Transparency</ColumnTitle>
          <FooterLink href="#">Terms & Conditions</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Information Security Policy</FooterLink>
          <FooterLink href="#">Cookie Policy</FooterLink>
          <FooterLink href="#">Whistleblowing Policy</FooterLink>
        </Column>
      </LinksContainer>
      <AppButtonsContainer>
      <Buttons>
                    <button className="btn" > <FaApple /><span>App store</span></button>
                    <button className="btn"> <BiLogoPlayStore /> <span>Play store</span></button>
                   </Buttons>
    
       
      </AppButtonsContainer>

      <FooterContainertwo>
    <ContactContainer>
      <ContactColumn>
        <ContactHeading>Contact</ContactHeading>
        <ContactLink href="mailto:help@kuda.com">help@kuda.com</ContactLink>
        <SocialIcons>
          <FaTwitter />
          <FaInstagram />
          <FaFacebook />
          <FaYoutube />
          <FaMedium />
          <FaLinkedin />
        </SocialIcons>
      </ContactColumn>
      <ContactColumn>
        <ContactHeading>Lagos</ContactHeading>
        <Address>1-11 Commercial Avenue,<br /> Yaba, Lagos,<br /> Nigeria</Address>
      </ContactColumn>
      <ContactColumn>
        <ContactHeading>London</ContactHeading>
        <Address>5 New Street Square,<br /> London, EC4A 3TW,<br /> United Kingdom</Address>
      </ContactColumn>
      <ContactColumn>
        <ContactHeading>Cape Town</ContactHeading>
        <Address>146 Campground Road,<br /> Snakepit Building, Level 4,<br /> Newlands, Cape Town</Address>
      </ContactColumn>
      <ContactColumn>
        <ContactHeading>Canada</ContactHeading>
        <Address>3080 Yonge Street,<br /> Suite 6060, Toronto,<br /> Ontario M4N 3N1</Address>
      </ContactColumn>
    </ContactContainer>
    
   
  </FooterContainertwo>

  <LegalText>
      © 2024 Kuda Technologies Ltd (Company No.11472232). All rights reserved.<br /><br />
      If you would like to find out more about which Kuda entity you receive services from, please reach out to us via the in-app chat in the Kuda app. Nigerian banking services offered by Kuda Microfinance Bank (RC796975) with registered address at 1-11 Commercial Avenue, Yaba, Lagos, Nigeria. Kuda Microfinance Bank is licensed by the Central Bank of Nigeria. Deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC).<br /><br />
      UK services are offered by Kuda EMI Ltd (Company No. 13724208) with registered address at 5 New Street Square, London, EC4A 3TW, United Kingdom.<br /><br />
      Canada services will be provided by Kuda Canada Technologies Limited, an Ontario corporation registered under number 1000286176, with its registered address located at 3080 Yonge Street, Suite 6060, Toronto, Ontario M4N 3N1. Kuda Canada Technologies Limited is duly registered with The Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) as a money service business, bearing registration number M23163015.
    </LegalText>
    </FooterContainer>



  );
};

export default Footer;




const Buttons = styled.span`
 display: flex;
            justify-content: center;
            gap: 10px;
           
        
`








const FooterContainer = styled.footer`
  background-color: transparent;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:50px;
  margin-right:100px;
 
`;

const Logo = styled.div`


`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-bottom: 20px;
  margin-left: 100px;
align-content:center;
  flex-wrap: wrap;


@media (max-width: 800px) {
display:grid;
  grid-template-columns: repeat(2, 1fr); 
      grid-template-rows: repeat(2, 1fr);    
      gap: 100px; 
      align-content:left;
      justify-content:left;
      
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 120px;
 
`;

const ColumnTitle = styled.h4`
  color: #4a148c;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const AppButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-right: 650px;
  
  
`;

const AppButton = styled.img`
  height: 40px;
  cursor: pointer;
`;

























import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaMedium, FaLinkedin } from 'react-icons/fa';

const FooterContainertwo = styled.footer`
  padding: 40px;
  background-color:transparent;
  text-align: center;
  color: #666;
  justify-content:center;
@media (max-width: 800px) {
justify-content:center;
margin-left:-50px;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 30px;
   display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  
      
`;

const ContactColumn = styled.div`
  text-align: left;
`;

const ContactHeading = styled.h3`
  font-size: 18px;
  color: #4a148c;
  margin-bottom: 15px;
  @media (max-width: 800px) {
margin-left: auto;
margin-right: auto;
align-content:center;
justify-content:center;
text-align:left;
  
`;

const ContactLink = styled.a`
  color: #4a148c;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 15px;
  

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  font-size: 24px;
  margin-top: 10px;
  color: #4a148c;
`;

const Address = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color:black;
   display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 800px) {
margin-left: auto;
margin-right: auto;
align-content:center;
justify-content:center;
text-align:left;
`;

const LegalText = styled.p`
  font-size: 13px;
  line-height: 1.5;
  margin-top: 50px;
  margin-left: 60px;
  margin-right: 60px;
  color: gray;
  text-align: left;
  font-weight:300;
  display:flex;
 @media (max-width: 800px) {
margin-left: auto;
margin-right: auto;
align-content:center;
justify-content:center;
text-align:left;
`;
