import React from 'react'
import styled from 'styled-components';

const HeaderDesign = (props) => {
  return (

    <HeaderDesignWrapper>
      {props.title}
    </HeaderDesignWrapper>

  );
};

export default HeaderDesign;

const HeaderDesignWrapper = styled.div`
  width: 70%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 50px 15% 50px 15%;

  border: 1px dashed black;
`