import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import theme, { customColorPalette } from '../theme';

export const StyledNavigationContainer = styled('nav')({
  backgroundColor: customColorPalette.lightBlue,
  padding: theme.spacing(1),
  textAlign: 'center',
});

export const StyledNavigationContent = styled('nav')({
  maxWidth: '1200px',
  margin: '0 auto',
  textAlign: 'center',
});

export const StyledUnorderedList = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  margin: 0,
  padding: 0,
});

export const StyledListItem = styled('li')({
  fontSize: theme.typography.body1.fontSize,
  color: theme.palette.common.white,  
});

export const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: theme.palette.common.white,
  fontWeight: theme.typography.fontWeightBold,
  padding: '5px 10px',
  '&:hover, &.active': {
    borderRadius: theme.spacing(4),
    backgroundColor: theme.palette.common.black,
    color: customColorPalette.inteseBlue, 
  },
});