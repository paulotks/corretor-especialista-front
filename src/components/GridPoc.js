import { Box, Container, useMediaQuery } from "@mui/material";
import React from "react";

const GridPoc = () => {
    const mobileScreen = useMediaQuery('(max-width:600px');


  return (
    <Container>
      <Box sx={mobileScreen ? styles.mobileGrid : styles.grid }>
        <Box sx={styles.box1}>Box 1</Box>
        <Box sx={mobileScreen ? styles.mobileBox2 : styles.box2}> Box 2</Box>
        <Box sx={styles.box3}>Box 3</Box>
        <Box sx={styles.box4}>Box 4</Box>
        <Box sx={styles.box5}>Box 5</Box>
      </Box>
    </Container>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: '30% 70%',
    gridTemplateRows: '150px 400px 200px 150px',
    gridGap: '20px',
    gridTemplateAreas: `
       "box1 box1"
       "box2 box3"
       "box2 box4"
       "box5 box5"
        `,
  },
  mobileGrid: {
    display: "grid",
    gridTemplateColumns: '100%',
    gridTemplateRows: '150px 400px 200px 150px',
    gridGap: '20px',
    gridTemplateAreas: `
       "box1"
       "box3"
       "box4"
       "box5"
        `,
  },
  box1: {
    gridArea: "box1",
    backgroundColor: 'yellow'
  },
  box2: {
    gridArea: "box2",
    backgroundColor: 'purple'
  },
  mobileBox2: {
    display: 'none'
  },
  box3: {
    gridArea: "box3",
    backgroundColor: 'aliceBlue'
  },
  box4: {
    gridArea: "box4",
    backgroundColor: 'crimson'
  },
  box5: {
    gridArea: "box5",
    backgroundColor: 'darkOrange'
  },
};

export default GridPoc;
