import { styled } from '@mui/material/styles';
import { customColorPalette } from '../theme';

export const  StyledPageLayout = styled('div')({
  padding: '20px',
  backgroundColor: customColorPalette.betfredBlue,
  height: 'calc(100vh - 47px)',
});

export const  StyledPageLayoutContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  });

