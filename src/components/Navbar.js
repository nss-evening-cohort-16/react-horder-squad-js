import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
} from 'reactstrap';
import { signOutUser } from '../api/auth';

const StuffNavbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React Hoarder</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container-fluid" navbar>
            {user ? (
              <>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/New">New</NavLink>
                </NavItem>
                <UncontrolledDropdown className="user-menu" nav inNavbar>
                  <DropdownToggle nav caret>
                    <img className="user-img" src={user.profilePic} alt="user" />{user.user}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink className="sign-out-user" onClick={signOutUser}>Sign Out</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </>
            ) : ''}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

StuffNavbar.defaultProps = {
  user: null,
};

StuffNavbar.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    profilePic: PropTypes.string,
    uid: PropTypes.string,
    user: PropTypes.string,
  }),
};

export default StuffNavbar;
