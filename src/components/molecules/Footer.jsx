import React from "react";
import styled from "styled-components";
import Title from "../atoms/Title";
import Date from "../JS/FechaActual";

// Estilos para el footer
const FooterContainer = styled.footer`
  background-color: #000000;
  color: white;
  border: 5px solid #f150b4;
  padding: 10px;
  display: flex;
  justify-content: space-between; /* Alinea los elementos en los extremos */
  align-items: center; /* Centra verticalmente los elementos */
`;

const Footer = () => {
  const fecha = Date(); // Usa la función para obtener la fecha actual

  return (
    <FooterContainer>
      <p>{fecha}</p>
      <Title title="Empleado" />
    </FooterContainer>
  );
};

export default Footer;
