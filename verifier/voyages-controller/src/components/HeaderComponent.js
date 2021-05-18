import React, { useState, useEffect } from 'react';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } 
                                      from 'reactstrap';
import { useLocation }                from 'react-router-dom';
import { useTranslation }             from 'react-i18next'
import { globalStyles }               from '../assets/styles/globalStyles';
import AppLogo                        from '../assets/images/airplane-logo.png';
import LangueComponent                from './LangueComponent'
import { returnIssuer }               from '../helpers/NavigationHelpers'; 



const HeaderComponent = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const location = useLocation();
  
  const { t } = useTranslation();

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <Navbar expand="sm" fixed="top" style={globalStyles.navbar}>     
      <NavbarBrand className="navbar-brand oneliner">
        <img src={AppLogo} alt="air-secur-logo" style={globalStyles.navbarLogoMini} />
        <span style={{ color: '#fff', marginleft: '10px' }}><a href="http://localhost:10000/">AIR-SECUR</a></span>
      </NavbarBrand>
      <Button style={{backgroundColor: '#707482', color: '#ffffff', marginRight: '300px' }}  onClick={returnIssuer}>
        {t('vaccine:backToIssuer')}
      </Button>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="ml-auto">
              <NavItem>
                <LangueComponent style={{ marginLeft: '50px' }}/>
              </NavItem>
        </Nav>
      </Collapse> 
    </Navbar>
  );
};

export default HeaderComponent;
