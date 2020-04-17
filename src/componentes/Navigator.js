import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";

export default function NavPillsExample() {
  return (
    <Nav fill>
      <NavItem>
        <NavLink href="#">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Crear CV</NavLink>
      </NavItem>
    </Nav>
  );
}