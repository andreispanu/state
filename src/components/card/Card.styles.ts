import { styled } from '@mui/material/styles';
import theme from '../theme';
import { Card, CardContent } from '@mui/material';

export const StyledCard = styled(Card)({
    width: '100%',
     maxHeight: '600px', 
     overflow: 'auto', 
     marginTop: theme.spacing(8)
});

export const  StyledCardContent = styled(CardContent)({
    overflow: 'auto', 
    height: '600px'
  });

