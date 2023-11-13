import { ButtonBase, ButtonGroup, Card, Grid, styled } from "@mui/material"; // CUSTOM COMPONENTS

import { H6 } from "components/typography";
import { FlexBetween } from "components/flexbox";
import { MoreButton } from "components/more-button"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // STYLED COMPONENTS

const ButtonOne = styled(ButtonBase)(({
  theme
}) => ({
  fontSize: 14,
  width: "100%",
  cursor: "auto",
  fontWeight: 500,
  overflow: "hidden",
  whiteSpace: "nowrap",
  padding: ".8rem 1rem",
  textOverflow: "ellipsis",
  borderRadius: "8px 0 0 8px",
  backgroundColor: theme.palette.grey[isDark(theme) ? 600 : 100]
}));
const ButtonTwo = styled(ButtonBase)(({
  theme
}) => ({
  fontSize: 14,
  cursor: "auto",
  fontWeight: 600,
  padding: ".8rem 1rem",
  borderRadius: "0 8px 8px 0",
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.divider
})); // CUSTOM DUMMY DATA LIST

const LIST = [{
  id: 1,
  title: "Graphic Design",
  amount: 40
}, {
  id: 2,
  title: "Font End Dev",
  amount: 32
}, {
  id: 3,
  title: "Figma Design",
  amount: 50
}, {
  id: 4,
  title: "Figma Design",
  amount: 50,
  complete: true
}, {
  id: 5,
  title: "Graphic Design",
  amount: 40
}, {
  id: 6,
  title: "Font End Dev",
  amount: 32
}];

const Skills = () => {
  return <Card sx={{
    padding: 3
  }}>
      <FlexBetween mb={3}>
        <H6 fontSize={16}>Skills</H6>
        <MoreButton size="small" />
      </FlexBetween>

      <Grid container spacing={2}>
        {LIST.map(item => <Grid item xl={3} lg={4} sm={6} xs={12} key={item.id}>
            <ButtonGroup fullWidth>
              <ButtonOne disableRipple>{item.title}</ButtonOne>
              <ButtonTwo disableRipple>{item.amount}</ButtonTwo>
            </ButtonGroup>
          </Grid>)}
      </Grid>
    </Card>;
};

export default Skills;