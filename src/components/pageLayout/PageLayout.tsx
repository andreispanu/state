import React from "react";
import { PageLayoutProps } from "./PageLayout.types";
import {
  StyledPageLayout,
  StyledPageLayoutContainer,
} from "./PageLayout.styles";

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <StyledPageLayout>
      <StyledPageLayoutContainer>{children}</StyledPageLayoutContainer>
    </StyledPageLayout>
  );
};
