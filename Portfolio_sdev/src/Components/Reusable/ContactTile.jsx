import React from 'react'
import styled from 'styled-components';

const ContactTile = (props) => {
  return (
    
    <ContactWrapper>
      <ContactIcon>
        {props.icon}
      </ContactIcon>
      
      <ContactType>
        {props.type}
      </ContactType>
    </ContactWrapper>

  );
};

export default ContactTile;

const ContactWrapper = styled.div`
  width: 350px;
  height: 200px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid black;
`
const ContactIcon = styled.div`
  width: 150px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`
const ContactType = styled.div`
  width: 185px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`