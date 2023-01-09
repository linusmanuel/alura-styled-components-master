import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from "styled-components";
import { corPrimaria } from "../UI/variaveis";

const StyledHeader = styled.nav`
  background-color: ${({theme}) => theme.header};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`
const Logo = styled.img`
  height: 50px;
  width: 50px;
`

const  BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color: ${props => props.primary ? "white" :  ({theme}) => (theme.header) };
  background: ${props => props.primary ?  ({theme}) => (theme.header) : "white"};
  transition: .2s;

  &:hover {
    background-color: ${props => props.primary ? "white" : ({theme}) => (theme.header) };
    color: ${props => props.primary ?  ({theme}) => (theme.header) : "white"}
  }
`

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho href="https://google.com">
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho primary href="https://google.com">
          Sair
        </BtnCabecalho>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
