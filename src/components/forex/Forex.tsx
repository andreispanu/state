import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchForexData } from "./index";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import Card from "../card";
import theme from "../theme";

const Forex = () => {
  const {
    data: forex,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryFn: fetchForexData,
    queryKey: ["forexData"],
  });

  if (isLoading) {
    return <Box>Loading data from Forex</Box>;
  }

  if (isError) {
    return <Box>Error: {error.message}</Box>;
  }

  const forexContent = () => {
    return (
      <>
        {isLoading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">Error: {error}</Typography>
        ) : (
          <Box>
            <Typography variant="h6" ml={theme.spacing(2)}>
              Base Currency: {forex.base}
            </Typography>
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
          </Box>
        )}
      </>
    );
  };

  return <Card title="Homepage with Forex Data" data={forexContent()} />;
};

export default Forex;
