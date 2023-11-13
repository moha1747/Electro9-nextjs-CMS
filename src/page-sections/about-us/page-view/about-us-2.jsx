"use client";

import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Card, Grid, IconButton, useTheme } from "@mui/material";
import { nanoid } from "nanoid"; // CUSTOM COMPONENTS

import { FlexRowAlign } from "components/flexbox";
import { NextImage } from "components/next-image";
import { H6, Paragraph } from "components/typography"; // CUSTOM ICON COMPONENTS

import Database from "icons/Database";
import Facebook from "icons/Facebook";
import Minimize from "icons/Minimize";
import Recycle from "icons/Recycle";
import Twitter from "icons/Twitter"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // CUSTOM DUMMY DATA

const DATA = [{
  id: nanoid(),
  title: "Easy",
  Icon: Minimize,
  description: "Lorem ipsum dolor sit amet, consectetur"
}, {
  id: nanoid(),
  Icon: Recycle,
  title: "Universal",
  description: "Lorem ipsum dolor sit amet, consectetur"
}, {
  id: nanoid(),
  Icon: Database,
  title: "Accessible",
  description: "Lorem ipsum dolor sit amet, consectetur"
}];

const AboutUs2PageView = () => {
  const theme = useTheme();
  return <Box py={3} maxWidth={930} margin="auto">
      <Card>
        <NextImage alt="about" width={1864} height={800} src="/static/thumbnail/thumbnail-7.png" />

        <Box p={3}>
          <H6 fontSize={18} mb={1}>
            About Us
          </H6>

          <Paragraph textAlign="justify" color="text.secondary" lineHeight={1.7}>
   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore illo repellendus ut veritatis voluptatem molestias, sequi architecto accusantium? Maiores eum ea reiciendis nisi adipisci ab nulla totam deleniti unde fugiat?
          </Paragraph>

          <Paragraph textAlign="justify" color="text.secondary" mt={2} mb={8} lineHeight={1.7}>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam et debitis consequatur fugit voluptatem minima nihil. Ducimus a veritatis possimus quod molestiae tempore veniam corporis nihil ullam. Ipsum, mollitia expedita?
          </Paragraph>

          <Grid container spacing={3}>
            {DATA.map(({
            id,
            Icon,
            title,
            description
          }) => <Grid item md={4} xs={12} key={id}>
                <Card sx={{
              padding: 3,
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center"
            }}>
                  <Icon fontSize="large" sx={{
                color: "grey.500"
              }} />
                  <H6 fontSize={18} py={1}>
                    {title}
                  </H6>
                  <Paragraph color="text.secondary" px={2}>
                    {description}
                  </Paragraph>
                </Card>
              </Grid>)}
          </Grid>

          <FlexRowAlign mt={3} py={3} borderRadius={4} flexDirection="column" bgcolor={isDark(theme) ? "grey.700" : "grey.100"}>
            <H6 fontSize={16}>Follow More</H6>

            <Box>
              <IconButton>
                <Facebook sx={{
                color: "grey.500"
              }} />
              </IconButton>

              <IconButton>
                <Twitter sx={{
                color: "grey.500"
              }} />
              </IconButton>

              <IconButton>
                <LinkedIn sx={{
                color: "grey.500"
              }} />
              </IconButton>

              <IconButton>
                <GitHub sx={{
                color: "grey.500"
              }} />
              </IconButton>
            </Box>
          </FlexRowAlign>
        </Box>
      </Card>
    </Box>;
};

export default AboutUs2PageView;