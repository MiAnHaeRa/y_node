
import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';
import Routers from './routes/index'



export default function LayoutComponent(args) {
    const routers = useRoutes(Routers);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args}>
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/condition">Condition</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/event">Event</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/book">Book</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/productState">ProductState</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/effectComponent">EffectComponent</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/router">Router</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/reduce">Reduce</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/redux">Redux</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/reduxToolkit">ReduxToolkit</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/form_Ref">Form_Ref</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/bc_Component">BC_Component</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
            {routers}
        </div>
    );
}