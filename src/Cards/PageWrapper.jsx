import * as React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const PageWrapperContainer = styled.div`
  display: flex;
  gap: 32px;
  height: 100%;
`;

const SideBarContainer = styled.div`
  display: flex;
  padding: 32px 32px;
  min-width: 150px;
  flex-direction: column;
  gap: 48px;
  text-align: center;
  background: black;
  height:100vh;

  color: white;
  & > a {
    text-decoration: none;
    color: white;
    font-weight: 100;
    font-size: 20px;
  }
`;

const CenterContainer = styled.div`
  display: flex;
  padding: 32px 32px;
  flex-grow: 1;
  flex-direction: column;
  /* overflow-y: auto; */
`;

const activeStyles = {
    fontWeight: 500,
    fontSize: "24px"
};

const inActiveStyles = {
    fontWeight: 300,
    fontSize: "20px",
    color: "gray"
};

export const PageWrapper = ({ children }) => {
    return (
        <PageWrapperContainer>
            <SideBarContainer>
                <NavLink
                    to="/"
                    style={({ isActive }) => (isActive ? activeStyles : inActiveStyles)}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/department"
                    style={({ isActive }) => (isActive ? activeStyles : inActiveStyles)}
                >
                    Department
                </NavLink>
                <NavLink
                    to="/products"
                    style={({ isActive }) => (isActive ? activeStyles : inActiveStyles)}
                >
                    Product
                </NavLink>
            </SideBarContainer>
            <CenterContainer>{children}</CenterContainer>
        </PageWrapperContainer>
    );
};
