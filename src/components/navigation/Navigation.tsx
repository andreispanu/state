import React from 'react';
import { StyledLink, StyledListItem, StyledNavigationContainer, StyledNavigationContent, StyledUnorderedList } from './Navigation.styles';
import { useLocation } from 'react-router-dom';


const Navigation = () => {
  const location = useLocation();

  return (
    <StyledNavigationContainer data-testid="navigation-container">
      <StyledNavigationContent>
          <StyledUnorderedList>
          <StyledListItem >
              <StyledLink to="/" className={location.pathname === "/" ? 'active':''}>Home</StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to="/login" className={location.pathname === "/login" ? 'active':''}>Login</StyledLink>
            </StyledListItem>
          </StyledUnorderedList>
          </StyledNavigationContent>
        </StyledNavigationContainer>
  );
};

export default Navigation;