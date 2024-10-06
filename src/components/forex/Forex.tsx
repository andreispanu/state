import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/hooks'; 
import { fetchForexData } from '../../features/forexSlice';
import { CircularProgress, List, ListItem, ListItemText, Typography } from '@mui/material';
import { StyledCard, StyledCardContent } from './Forex.styles';

const Forex = () => {
  const dispatch: ReturnType<typeof useAppDispatch> = useDispatch();
  const forex = useSelector((state: any) => state.forex);

  useEffect(() => {
    dispatch(fetchForexData());
  }, [dispatch]);

  return (
    <StyledCard>
      <StyledCardContent>
        <Typography variant="h4" gutterBottom>
          Forex Data
        </Typography>

        {forex.loading ? (
          <CircularProgress />
        ) : forex.error ? (
          <Typography color="error">Error: {forex.error}</Typography>
        ) : (
          <div>
            <Typography variant="h6">Base Currency: {forex.data.base}</Typography>
            <List>
              {forex.data.rates &&
                Object.keys(forex.data.rates).map((currency) => (
                  <ListItem key={currency} divider>
                    <ListItemText
                      primary={currency}
                      secondary={`Rate: ${forex.data.rates[currency]}`}
                    />
                  </ListItem>
                ))}
            </List>
          </div>
        )}
      </StyledCardContent>
    </StyledCard>
  );
};

export default Forex;
