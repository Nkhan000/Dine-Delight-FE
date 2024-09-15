/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetUser } from "../features/authentication/useGetUser";
import Spinner from "./Spinner";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const FullPageSpinner = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--color-grey-900);
  position: absolute;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

/* eslint-disable no-unused-vars */
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user, isLoading, error } = useGetUser();

  useEffect(() => {
    // If not loading and there's no user data, navigate to the login page
    if (!isLoading && !user) {
      navigate("/login");
    }
    // If user data is present and they are on the login page, navigate to home
    else if (user && window.location.pathname === "/login") {
      navigate("/home");
    }
  }, [isLoading, user, navigate]);

  // Handle the loading state separately
  if (isLoading) {
    return (
      <FullPageSpinner>
        <Spinner />
      </FullPageSpinner>
    );
  }

  // Prevent rendering children if user data isn't present
  // if (!data?.user) {
  //   navigate("/login");
  // }

  // Render children if user data is present and user is authenticated
  return <>{children}</>;
}

export default ProtectedRoute;
