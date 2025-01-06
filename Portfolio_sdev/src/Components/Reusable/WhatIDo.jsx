import React from 'react'
import styled from 'styled-components';

const WhatIDo = (props) => {
  return (
    <WhatIDoWrapper>
      <IconWrapper>
        {props.image}
      </IconWrapper>

      <InfoWrapper>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </InfoWrapper>
    </WhatIDoWrapper>
  );
};

export default WhatIDo;