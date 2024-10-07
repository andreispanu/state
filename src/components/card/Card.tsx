import { StyledCard, StyledCardContent } from "./Card.styles";
import { Typography } from "@mui/material";
import { CardProps } from "./Card.types";
import theme from "../theme";

const Card = (props: CardProps) => {
  const { title, children } = props;

  return (
    <StyledCard>
      <StyledCardContent>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ marginLeft: theme.spacing(2) }}
        >
          {title}
        </Typography>
        {children}
      </StyledCardContent>
    </StyledCard>
  );
};

export default Card;
