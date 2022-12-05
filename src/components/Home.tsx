import GlobalStyle from "../styles/global";
import { Container } from "../styles/Container";
import { Header } from "../styles/Header";
import { Links } from "../styles/Links";
import { Logo } from "../styles/Logo";
import { HeaderRight } from "../styles/HeaderRight";
import { PrimaryButton } from "../styles/ButtonPrimary";
import { DangerButton } from "../styles/DangerButton";
import { Column } from "../styles/Column";
import { useNavigate } from "react-router";
import logo from "../assets/React-icon.svg.png";

const isLoggedIn = () => {
  if (localStorage.getItem('token')) {
    return true;
  }

  return false;
}

const Home = () => {
  
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem('token');
    navigate("/");
  }

  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo href="/"><img src={logo} alt={""} /></Logo>
          { isLoggedIn() ? (
            <HeaderRight>
              <PrimaryButton onClick={logout}>Logout</PrimaryButton>
            </HeaderRight>
          ) : (
            <HeaderRight>
                <Links href="/login">Login</Links>
                <Links href="/signup">Signup</Links>
            </HeaderRight>
          )}
      </Header>
      <br />

      <Container>
        <div>
          <Column>
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Gamer</p>
            <PrimaryButton>Edit</PrimaryButton>
            <DangerButton>Delete</DangerButton>
          </Column>
        </div>
        <div>
          <Column>
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Gamer</p>
            <PrimaryButton>Edit</PrimaryButton>
            <DangerButton>Delete</DangerButton>
          </Column>
        </div>
        {/* <Card>
          <img src={pic} alt="Avatar" style={{ width: "100%" }} />
          <CardContainer>
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Gamer</p>
            <PrimaryButton>Edit</PrimaryButton>
            <DangerButton>Delete</DangerButton>
          </CardContainer>
        </Card>
        <Card>
          <CardContainer>
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Gamer</p>
            <PrimaryButton>Edit</PrimaryButton>
            <DangerButton>Delete</DangerButton>
          </CardContainer>
        </Card>
        <Card>
          <img src={pic} alt="Avatar" style={{ width: "100%" }} />
          <CardContainer>
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Gamer</p>
            <PrimaryButton>Edit</PrimaryButton>
            <DangerButton>Delete</DangerButton>
          </CardContainer>
        </Card>
        <Card>
          <img src={pic} alt="Avatar" style={{ width: "100%" }} />
          <CardContainer>
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Gamer</p>
            <PrimaryButton>Edit</PrimaryButton>
            <DangerButton>Delete</DangerButton>
          </CardContainer>
        </Card> */}
      </Container>
    </>
  );
};

export default Home;
