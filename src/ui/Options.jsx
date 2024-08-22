/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { Link } from "react-router-dom";
import { MenusContext, NotificationContext } from "../utils/contexts";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  outline: none;
  &:focus {
    outline: none;
  }

  /* &:hover {
    background-color: var(--color-grey-100);
  } */

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;
  /* position: absolute; */
  background-color: var(--color-grey-800);
  border-radius: 2rem;
  border: 1px solid var(--color-grey-400);
  overflow: hidden;
  z-index: 30;

  & li {
    display: flex;
    /* padding: 0.8rem; */
    color: var(--color-grey-300);
    text-transform: capitalize;
    width: 20rem;
  }

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

// const MenusContext = createContext();
// MenusContext
function Options({ children }) {
  // const { openNotification } = useContext(NotificationContext);
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);
  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id, showToggleBtn, children }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);
  function handleClick(e) {
    const rect = e.target.closest("button")?.getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }
  return (
    <StyledToggle onClick={handleClick}>
      {showToggleBtn ? <HiEllipsisVertical /> : <>{children}</>}
    </StyledToggle>
  );
}
function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close);

  // MAKE HEADER FIXED ON SCROLL THAN USING THIS METHOD
  if (openId !== id) return null;

  return createPortal(
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body
  );
}
function Button({ children, addClickFunc = true, onClickFunc }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClickFunc?.();
    close();
  }
  return addClickFunc ? (
    <li onClick={handleClick}>{children}</li>
  ) : (
    <li>{children}</li>
  );
}

Options.Menu = Menu;
Options.Toggle = Toggle;
Options.List = List;
Options.Button = Button;

export default Options;
