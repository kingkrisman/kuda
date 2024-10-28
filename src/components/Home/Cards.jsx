import React from 'react';
import styled from 'styled-components';
import onne from  '../../assets/onne.png'
import twwo from  '../../assets/twwo.png'
import three from  '../../assets/three.png'
import four from  '../../assets/four.png'
import five from  '../../assets/five.png'
import six from  '../../assets/six.png'





const HelpSection = () => (
  <SectionContainer>
    <TextContainer>
      <Heading>We're always happy to help you.</Heading>
      <Paragraph>
        You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment,
        send an email or call. However you choose to reach out, there'll always be a friendly person there to make your life easy.
      </Paragraph>
      <Link href="#">Get Help ➔</Link>
    </TextContainer>
    <ImageContainer>
      <Image src={onne} alt="Customer Support" />
    </ImageContainer>
  </SectionContainer>
);

const BlockCardSection = () => (
  <SectionContainer>
    <ImageContainer>
      <Image src={twwo} alt="Block Card" />
    </ImageContainer>
    <TextContainer>
      <Heading>Turn off access, turn on safety.</Heading>
      <Paragraph>
        Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try.
      </Paragraph>
      <Link href="#">Learn more about Cards ➔</Link>
    </TextContainer>
  </SectionContainer>
);
const Three = () => (
  <SectionContainer>
    <TextContainer>
      <Heading>We're always happy to help you.</Heading>
      <Paragraph>
        You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment,
        send an email or call. However you choose to reach out, there'll always be a friendly person there to make your life easy.
      </Paragraph>
      <Link href="#">Get Help ➔</Link>
    </TextContainer>
    <ImageContainer>
      <Image src={three} alt="Customer Support" />
    </ImageContainer>
  </SectionContainer>
);

const Four = () => (
  <SectionContainer>
    <ImageContainer>
      <Image src={four} alt="Block Card" />
    </ImageContainer>
    <TextContainer>
      <Heading>Turn off access, turn on safety.</Heading>
      <Paragraph>
        Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try.
      </Paragraph>
      <Link href="#">Learn more about Cards ➔</Link>
    </TextContainer>
  </SectionContainer>
);
const Five = () => (
  <SectionContainer>
    <TextContainer>
      <Heading>We're always happy to help you.</Heading>
      <Paragraph>
        You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment,
        send an email or call. However you choose to reach out, there'll always be a friendly person there to make your life easy.
      </Paragraph>
      <Link href="#">Get Help ➔</Link>
    </TextContainer>
    <ImageContainer>
      <Image src={five} alt="Customer Support" />
    </ImageContainer>
  </SectionContainer>
);

const Six = () => (
  <SectionContainer>
    <ImageContainer>
      <Image src={six} alt="Block Card" />
    </ImageContainer>
    <TextContainer>
      <Heading>Turn off access, turn on safety.</Heading>
      <Paragraph>
        Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try.
      </Paragraph>
      <Link href="#">Learn more about Cards ➔</Link>
    </TextContainer>
  </SectionContainer>
);

const Cards = () => (
  <div>
    <HelpSection />
    <BlockCardSection />
    <Three/>
    <Four/>
    <Five/>
    <Six/>
  </div>
);

export default Cards;




const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 40px;
  background-color: transparent;
  border-radius: 10px;
   display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 500px;
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #3c3c3c;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const Link = styled.a`
  font-size: 16px;
  color: #5e025e;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 600px;
  height: auto;
  border-radius: 10px;
  @media (max-width: 800px) {
  width: 400px;

}
`;