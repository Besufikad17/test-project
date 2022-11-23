import React from "react";
import pic from "../assets/img_avatar.png";
import GlobalStyle from "../styles/global";
import { Container } from "../styles/Container";
import { Card } from "../styles/Card";
import { CardContainer } from "../styles/CardContainer";
import { Header } from "../styles/Header";
import { Links } from "../styles/Links";
import { Logo } from "../styles/Logo";
import { HeaderRight } from "../styles/HeaderRight";

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo href="/">Logo</Logo>
        <HeaderRight>
          <Links href="/login">Login</Links>
          <Links href="/signup">Signup</Links>
        </HeaderRight>
      </Header><br/>
      <Container>
        <Card>
          <img src={pic} alt="Avatar" style={{ width: "100%" }} />
          <CardContainer>
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Gamer</p>
          </CardContainer>
        </Card>
        <Card>
          <img src={pic} alt="Avatar" style={{ width: "100%" }} />
          <CardContainer>
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Gamer</p>
          </CardContainer>
        </Card>
        <Card>
          <img src={pic} alt="Avatar" style={{ width: "100%" }} />
          <CardContainer>
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Gamer</p>
          </CardContainer>
        </Card>
        <Card>
          <img src={pic} alt="Avatar" style={{ width: "100%" }} />
          <CardContainer>
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Gamer</p>
          </CardContainer>
        </Card>
      </Container>
    </>
  );
};

export default Home;
