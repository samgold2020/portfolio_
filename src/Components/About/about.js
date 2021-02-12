import React from 'react';
import Toby from '../../images/TobyKeith.jpeg';
import { FaLinkedin } from 'react-icons/fa';
import PersonalResume from '../../docs/Resume.pdf';

import {
  AboutWrapper,
  AboutContainer,
  AboutPhoto,
  AboutDescription,
  Description,
  AboutImg,
  LinksWrapper,
  LinksContainer,
  ItemContainerOne,
  ItemContainerTwo,
  LinkedIn,
  DetailOne,
  DetailTwo,
  DetailLinks,
  Resume,
} from './about-style';

const data = {
  title: "👋 Nice to meet you!",
  aboutdetailsone: "I am a fullstack software engineer based in Chicago. I enjoy building object-oriented, responsive web applications that are easy to navigate and user friendly.",
  aboutdetailstwo: "In my spare time I can be found hanging out with my cat, Toby Keith (pictured left), playing piano, or biking around Chi-Town.",
  resume: "Resume",
}

const About = () => {
  return (
    <AboutWrapper>
        <AboutContainer className="about">
          <AboutPhoto>
            <AboutImg src={Toby} alt="cat photo"></AboutImg>
          </AboutPhoto>
          <AboutDescription>
            <Description>{data.aboutdetailsone}</Description>
            <Description>{data.aboutdetailstwo}</Description>
    
          </AboutDescription>
  
          
      </AboutContainer>
      <LinksWrapper>
      <LinksContainer>
      <ItemContainerOne>
            <DetailOne>
              <DetailLinks>
         <LinkedIn
         data-aos="fade-down"
         data-aos-duration="1500"
         href='https://www.linkedin.com/in/sgoldstein312/'
         target='_blank'
         aria-label='LinkedIn'>
          <FaLinkedin />
          </LinkedIn>
          </DetailLinks>
          </DetailOne></ItemContainerOne>
      </LinksContainer>

      <LinksContainer>
      <ItemContainerTwo>
          <DetailTwo>  
            <DetailLinks>
          <Resume 
          data-aos="fade-down"
          data-aos-duration="1500"
          href={PersonalResume} 
          target='_blank' 
          rel='noreferrer'> 
          {data.resume}</Resume>
          </DetailLinks> 
          </DetailTwo>
          </ItemContainerTwo>
          </LinksContainer>
      </LinksWrapper>
    </AboutWrapper>
  )
}

export default About;

