import { Box, Card, Container, Grid, Stack } from "@mui/material"; // CUSTOM COMPONENTS

import { H2, H6, Paragraph } from "components/typography"; // DUMMY DATA

const LIST_1 = [{
  id: 1,
  image: "/static/landing/icons/award.svg",
  title: "Crafted by Professionals",
  description: `Lorem Ipsum...`
}, {
  id: 2,
  image: "/static/landing/icons/logos.svg",
  title: "Modern Technologies",
  description: `Lorem Ipsum...`
}, {
  id: 3,
  image: "/static/landing/icons/check_bucket.svg",
  title: "Clean Code",
  description: `Lorem Ipsum...`
}];
const LIST_2 = [{
  id: 1,
  image: "/static/landing/icons/brush.svg",
  title: "Design Files",
  description: `Lorem Ipsum...`
}, {
  id: 2,
  image: "/static/landing/icons/recovery.svg",
  title: "Flexible Structure",
  description: `Lorem Ipsum...`
}, {
  id: 3,
  image: "/static/landing/icons/paint_bucket.svg",
  title: "Easy to Customize",
  description: `Lorem Ipsum...`
}];

const Section2 = () => {
  return <Container maxWidth="lg" sx={{
    mt: {
      sm: 12,
      xs: 6
    }
  }}>
      <Grid container spacing={2}>
        <Grid item lg={5}>
          <Box maxWidth={450} position="sticky" top={0} pt={4}>
            <H2 fontSize={36}>Core Features</H2>
            <Paragraph mt={1} fontSize={18} color="text.secondary">
              Save thousands of marketing hours with Electro's well crafted features and super fast performance
            </Paragraph>
          </Box>
        </Grid>

        <Grid lg={7} container item spacing={4}>
          <Grid item lg={6} xs={12}>
            <Stack mt={{
            lg: 12,
            xs: 6
          }} spacing={{
            md: 4,
            xs: 3
          }} direction={{
            lg: "column",
            md: "row",
            xs: "column"
          }}>
              {LIST_1.map(item => <FeatureCard {...item} key={item.id} />)}
            </Stack>
          </Grid>

          <Grid item lg={6} xs={12}>
            <Stack spacing={{
            md: 4,
            xs: 3
          }} direction={{
            lg: "column",
            md: "row",
            xs: "column"
          }}>
              {LIST_2.map(item => <FeatureCard {...item} key={item.id} />)}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Container>;
}; // ==============================================================


function FeatureCard(props) {
  return <Card sx={{
    padding: {
      xl: 6,
      lg: 5,
      md: 4,
      xs: 6
    },
    textAlign: "center"
  }}>
      <Box component="img" src={props.image} alt="award" py={6} />
      <H6 fontSize={18}>{props.title}</H6>
      <Paragraph fontSize={16} color="grey.500" mt={2}>
        {props.description}
      </Paragraph>
    </Card>;
}

export default Section2;