import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {fetchForexData} from './index';
import { CircularProgress, List, ListItem, ListItemText, Typography } from '@mui/material';
import { StyledCard, StyledCardContent } from './Forex.styles';

const Forex = () => {
  const { data:forex, error, isLoading, isError } = useQuery({
    queryFn: fetchForexData, 
    queryKey: ['forexData'], 
  });

  if (isLoading) {
    return <div>Loading data from Forex</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <StyledCard>
      <StyledCardContent>
        <Typography variant="h4" gutterBottom>
          Forex Data
        </Typography>

        {isLoading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">Error: {error}</Typography>
        ) : (
          <div>
            <Typography variant="h6">Base Currency: {forex.base}</Typography>
            <List>
              {forex.rates &&
                Object.keys(forex.rates).map((currency) => (
                  <ListItem key={currency} divider>
                    <ListItemText
                      primary={currency}
                      secondary={`Rate: ${forex.rates[currency]}`}
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
