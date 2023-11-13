import { Box, Button, Container, useTheme } from "@mui/material"; // CUSTOM COMPONENTS

import { H6, Paragraph } from "components/typography";
import { FlexBox } from "components/flexbox"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants";

const Footer = () => {
  const theme = useTheme();
  return <Box component="footer">
      <Box sx={{
      backgroundColor: "#1C113D"
    }}>
        <Container maxWidth="xl" sx={{
        position: "relative"
      }}>
          <Box pt={{
          sm: 12,
          xs: 8
        }} pb={{
          sm: 24,
          xs: 20
        }}>
            <H6 fontSize={{
            sm: 36,
            xs: 27
          }} fontWeight={700} lineHeight={1.4} color="white" mb={4}>
              Streamline your workflow <br /> with Electro
            </H6>

            <FlexBox alignItems="center" gap={2}>
     

              <Button size="large" color="inherit" variant="outlined" sx={{
              borderColor: "white",
              color: "white"
            }} LinkComponent="a" href="/dashboard">
                Live Preview
              </Button>
            </FlexBox>
          </Box>

          <Box alt="footer" component="img" src="/static/landing/illustration.svg" sx={{
          position: "absolute",
          right: 0,
          bottom: 0,
          display: {
            md: "block",
            xs: "none"
          }
        }} />
        </Container>
      </Box>

      <Container>
        <Box px={4} py={5} zIndex={1} boxShadow={2} marginTop={-10} borderRadius={4} textAlign="center" position="relative" bgcolor={isDark(theme) ? "grey.800" : "white"}>
        

          <FlexBox justifyContent="center" alignItems="center" gap={2}>
            <Button LinkComponent="a" href="/" >
              Submit Ticket
            </Button>
            <Button variant="outlined" LinkComponent="a" href="/" >
              Send an email
            </Button>
          </FlexBox>
        </Box>
      </Container>

      <Paragraph fontSize={16} textAlign="center" py={6}>
        Copyright ©{" "}
        <Box component="a" href="/" >
          Electro
        </Box>
        . All rights reserved
      </Paragraph>
    </Box>;
};

export default Footer;