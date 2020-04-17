import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";
import './Navmain.css';

export default function Navmain() {
  return (
    <Nav pills justified className="Navmain-container">
      <NavItem>
        <NavLink active href="#">
          Inicio
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Propósito</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Cuenta</NavLink>
      </NavItem>
    </Nav>
  );
}