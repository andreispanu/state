import React from 'react';
import { StyledLink, StyledListItem, StyledNavigationContainer, StyledNavigationContent, StyledUnorderedList } from './Navigation.styles';

const Navigation = () => {
  return (
    <StyledNavigationContainer data-testid="navigation-container">
      <StyledNavigationContent>
          <StyledUnorderedList>
          <StyledListItem>
              <StyledLink to="/">Home</StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to="/login">Form</StyledLink>
            </StyledListItem>
            {/* <StyledListItem>
              <Link to="/test">Test Page</Link>
            </StyledListItem> */}
          </StyledUnorderedList>
          </StyledNavigationContent>
        </StyledNavigationContainer>
  );
};

export default Navigation;