import React from 'react'
import styled from 'styled-components';

const WhatIDo = (props) => {
  return (
    <WhatIDoWrapper>
      <IconWrapper>
        {props.image}
      </IconWrapper>

      <InfoWrapper>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </InfoWrapper>
    </WhatIDoWrapper>
  );
};

export default WhatIDo;

const WhatIDoWrapper = styled.div`
  width: 380px;
  height: 150px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
const IconWrapper = styled.div`
  width: 120px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
`
const InfoWrapper = styled.div`
  width: 245px;
  height: 100%;
`
const Title = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #7D5A50;

  margin-bottom: 10px;
  
  text-transform: uppercase;
`
const Description = styled.div`
  font-size: 14px;
  font-weight: 100;
  color: #7D5A50;
  text-align: justify;
`