import React from "react";
import styled from "styled-components";
import Title from "../atoms/Title";
import cardData from "../JS/cardData";

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SingleCards = styled.a`
  border: 5px solid #f150b4;
  background-color: #000000;
  border-radius: 8px;
  padding: 20px;
  text-decoration: none;
  margin: 30px;
  width: 250px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardTitle = styled(Title)`
  text-align: center;
  margin-left: 10px;
  color: pink;
`;

function CardsA() {
  return (
    <CardsContainer>
      {cardData.map((card, index) => (
        <SingleCards key={index} href={card.href}>
          <CardTitle title={card.title} />
        </SingleCards>
      ))}
    </CardsContainer>
  );
}

export default CardsA;
