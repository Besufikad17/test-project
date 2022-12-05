import GlobalStyle from "../styles/global";
import { Container } from "../styles/Container";
import { Header } from "../styles/Header";
import { Links } from "../styles/Links";
import { Logo } from "../styles/Logo";
import { HeaderRight } from "../styles/HeaderRight";
import { PrimaryButton } from "../styles/ButtonPrimary";
import { DangerButton } from "../styles/DangerButton";
import Popup from "./Popup";
import { useNavigate } from "react-router";
import logo from "../assets/React-icon.svg.png";
import { Table, TableHeader } from "../styles/Table";
import { Center } from "../styles/Center";
import { Footer } from "../styles/Footer";
import { Column } from "../styles/Column";
import { useEffect, useState } from "react";
import axios from "axios";

const isLoggedIn = () => {
  if (localStorage.getItem("token")) {
    return true;
  }

  return false;
};

const Home = () => {

  const [ employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://localhost:4000/api/employees")
        .then((res) => {
          console.log(res.data);
          setEmployees(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo href="/">
          <img src={logo} alt={""} />
        </Logo>
        {isLoggedIn() ? (
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
        <Column>
          <Table>
            <tr>
              <TableHeader>Name</TableHeader>
              <TableHeader>Gender</TableHeader>
              <TableHeader>Date of birth</TableHeader>
              <TableHeader>Salary</TableHeader>
            </tr>
            {employees ? (
              employees.map(employee => {
                return <tr>
                  <td>{employee.name}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.date_of_birth}</td>
                  <td>{employee.salary}</td>
                </tr>
              })
            ) : (null)}
          </Table>
        </Column>
        <Column>
          <Center>
            <Popup />
          </Center>
        </Column>
      </Container>
    
      <Footer>
        <span style={{ color: "white" }}>@Copyright 2022</span>
      </Footer>
    </>
  );
};

export default Home;
