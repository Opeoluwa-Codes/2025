import React from 'react'
import styled from 'styled-components';

const WhatIDo = (props) => {
  return (
    <WhatIDoWrapper>
      <img src={props.image} alt="" />

      <InfoWrapper>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </InfoWrapper>
    </WhatIDoWrapper>
  );
};

export default WhatIDo;

const WhatIDoWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img{
    width: 50px;
  }
`

const InfoWrapper = styled.div`
  width: 82%;
  height: 100%;
`
const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  font-family: Fira Sans;
  color: #7D5A50;

  margin-bottom: 8px;
  
  text-transform: uppercase;
`
const Description = styled.div`
  font-size: 14px;
  font-weight: 300;
  font-family: Lato;
  color: #7D5A50;

  text-align: justify;
`