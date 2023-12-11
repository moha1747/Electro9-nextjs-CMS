import Image from "next/image";
import { Box, Button,Grid, Card, Container, Stack, keyframes, styled } from "@mui/material"; // CUSTOM COMPONENT

import { H1,H2,H3, Paragraph } from "components/typography"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate";
const shine = keyframes`
0% {
  background-position: 0% 50%;
}
100% {
  background-position: 100% 50%;
}
`;
const animated = keyframes`
0% {
	background-position: 0 0;
}
50% {
  background-position: 300% 0%;
}
100% {
	background-position: 0 0;
}
`; // STYLED COMPONENTS

const MainTitle = styled(H1)(() => ({
  background: `linear-gradient(300deg, #6950E8 0%,#FB6186 25%, #6950E8 50%, #FB6186 75%,#6950E8 100%)`,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textFillColor: "transparent",
  backgroundSize: "150% auto",
  animation: `${shine} 2s ease-in-out infinite alternate`
}));
const ImageBox = styled(Box)(({
  theme
}) => {
  const color = `${theme.palette.primary[600]}, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.success.main}, ${theme.palette.warning.main}, ${theme.palette.error.main}, ${theme.palette.info.main}, ${theme.palette.primary[400]}`;
  const COMMON_STYLE = {
    top: -3,
    left: -3,
    content: "''",
    borderRadius: 16,
    background: `linear-gradient(45deg, ${color})`,
    position: "absolute",
    backgroundSize: "300%",
    width: "calc(100% + 6px)",
    height: "calc(100% + 6px)",
    animation: `${animated} 20s linear infinite`
  };
  return {
    position: "relative",
    ":before": { ...COMMON_STYLE
    },
    ":after": { ...COMMON_STYLE,
      filter: "blur(8px)"
    }
  };
});
const ShadowBox = styled(Box)(({
  value
}) => ({
  background: `rgba(255,255,255, ${value || 0.012})`,
  borderRadius: 24,
  padding: 32
}));
const CRM_FEATURES = [{
  id: 1,
  image: "/static/landing/icons/undraw_reminder_re_fe15.svg", // Replace with actual image path
  title: "Your Clients, Our Priority",
  description: "Dive into a world where managing client relationships feels like a breeze. Our dashboard is not just a tool; it’s your personal assistant in nurturing and growing client connections. Experience the joy of having all client interactions and histories at your fingertips, tailored just for SMMA."
}, {
  id: 2,
  image: "/static/landing/icons/undraw_analysis_dq08.svg", // Replace with actual image path
  title: "Insights at a Glance",
  description: "Ever wished for a crystal ball to predict your campaign success? Our advanced analytics are the next best thing! Get real-time insights, delightful reports, and make decisions with confidence. Watch your strategies flourish as you track key metrics with ease."
}, {
  id: 3,
  image: "/static/landing/icons/automationsimp.svg", // Replace with actual image path
  title: "Simplify with Automation",
  description: "Imagine a world where mundane tasks are handled for you, leaving you free to focus on creativity and strategy. Welcome to our workflow automation! Let’s make productivity your new best friend, as we handle the nitty-gritty details and keep your projects flowing smoothly."
}, {
  id: 4,
  image: "/static/landing/icons/customizeurway.svg", // Replace with actual image path
  title: "Customize Your Way",
  description: "Your agency is unique, and so should be your tools! Customize your dashboard to reflect your brand’s personality. Seamlessly integrate with your favorite platforms and mold the dashboard to fit your workflow. It’s not just a dashboard; it’s your creative canvas."
}];


const Section1 = () => {
  const navigate = useNavigate();
  return <Box bgcolor="#1C113D" py={4}>
      <Container maxWidth="md">
        <Box textAlign="center" mb={5}>
          <MainTitle  fontSize={42} fontWeight={600}>
            Power up Productivity with
          </MainTitle>

          <MainTitle fontSize={92} fontWeight={800}>
            Electro
          </MainTitle>

          <Paragraph color="white" fontSize={42}  fontWeight={800}mt={1}>
            Automate all your tasks and have everything you need at your fingertips.
          </Paragraph>

          <Stack mt={6} direction="row" gap={2} alignItems="center" justifyContent="center">
            

            <Button variant="outlined" onClick={() => navigate("/dashboard")} sx={{
            paddingInline: 3,
            paddingBlock: 1
          }}>
              View Demo
            </Button>
          </Stack>
        </Box>

        <ShadowBox value={0.012}>
          <ShadowBox value={0.02}>
            <ShadowBox value={0.025} textAlign="center">
              <ImageBox>
                <Card alt="demo" width={1178} height={1024} component={Image} src="/HeroSAAS1.png" sx={{
                zIndex: 1,
                height: "auto",
                width: "100%",
                display: "block",
                position: "relative",
                minHeight: {
                  lg: 374,
                  xs: 200
                }
              }} />
              </ImageBox>
            </ShadowBox>
          </ShadowBox>
        </ShadowBox>

        {/* Card */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={5}>
        <H2 color="white" fontSize={36} fontWeight={700}>
          Key Features of Our CRM Dashboard
        </H2>
        <Paragraph color="white" mt={2} fontSize={18}>
          Discover how our CRM dashboard can revolutionize your social media marketing agency, offering unparalleled efficiency and customization.
        </Paragraph>
      </Box>


      <Grid container spacing={4}>
        {CRM_FEATURES.map((feature) => (
          <Grid item xs={12} md={6} key={feature.id}>
            <Card raised sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
              <Box component="img" src={feature.image} alt={feature.title} sx={{ height: 80, mb: 2 }} />
              <H3 fontSize={22} fontWeight={600}>{feature.title}</H3>
              <Paragraph mt={2}>{feature.description}</Paragraph>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
      </Container>
    </Box>;
};

export default Section1;