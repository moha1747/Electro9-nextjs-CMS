import { Box, Chip, Grid, Alert, Radio, Stack, Avatar, Button, Switch, Tooltip, Checkbox, Container, ButtonBase, IconButton, AvatarGroup, LinearProgress, FormControlLabel, CircularProgress } from "@mui/material";
import { Add, Delete, Error, KeyboardTab } from "@mui/icons-material";
import Masonry from "@mui/lab/Masonry"; // CUSTOM COMPONENTS

import { H2, Paragraph } from "components/typography"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // CUSTOM PAGE SECTION COMPONENTS

import ReturnRate from "page-sections/dashboards/ecommerce/ReturnRate";
import DailyVisitors from "page-sections/dashboards/ecommerce/DailyVisitors";
import LiveUser from "page-sections/dashboards/analytics/LiveUser";
import CompleteGoal from "page-sections/dashboards/analytics/CompleteGoal";
import SessionBrowser from "page-sections/dashboards/analytics/SessionBrowser";

const Section3 = () => {
  const navigate = useNavigate();
  return <Container maxWidth="lg" sx={{
    mt: {
      sm: 24,
      xs: 12
    }
  }}>
      <Grid container spacing={2}>
        <Grid item lg={5} md={6} xs={12}>
          <Box maxWidth={450} position="sticky" top={0} pt={4} mb={{
          xs: 4,
          mb: 0
        }}>
            <H2 fontSize={36}>At your fingertips</H2>
            <Paragraph mt={1} mb={3} fontSize={18} color="text.secondary">
              Save thousands of development hours with Electro's well ready to use dashboard.
              </Paragraph>

            <Button color="secondary" variant="outlined" startIcon={<KeyboardTab />} onClick={() => navigate("/dashboard")}>
              Check it out!
            </Button>
          </Box>
        </Grid>

        <Grid item lg={7} md={6} xs={12}>
          <Stack spacing={4}>
            {/* <Alert variant="outlined" severity="info">
              This is an info alert — check it out!
            </Alert>

            <Alert severity="error" icon={<Error />} action={<Stack className="btn-group" direction="row">
                  <ButtonBase>UNDO</ButtonBase>
                  <ButtonBase>Action</ButtonBase>
                </Stack>}>
              This is an error alert — check it out!
            </Alert> */}

            {/* <Stack direction="row" alignItems="center" spacing={2} rowGap={2}>
              <Button>Primary</Button>
              <Button variant="outlined" color="warning">
                Warning
              </Button>

              <Button color="success" startIcon={<Add />}>
                With Icon
              </Button>

              <Button variant="text">Click Me</Button>

              <LinearProgress />
            </Stack> */}



            <Masonry columns={{
            sm: 2,
            xs: 1
          }}>
              <Box>
                <SessionBrowser />
              </Box>

              <CompleteGoal chart="area" />


              <Box>
                <LiveUser />
              </Box>

              <Box>
                <ReturnRate />
              </Box>
            </Masonry>
          </Stack>
        </Grid>
      </Grid>
    </Container>;
};

export default Section3;