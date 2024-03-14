import React from "react";
import { Box, Container } from "@mui/material";
import HeaderCard from "./HeaderCard";
import Logo from "./Logo";
import HeaderNavMenu from "./HeaderNavMenu";
import HeaderProfile from "./HeaderProfile";

const Headers = () => {
  return (
    <>
      <Box sx={styles.containerHeader}>
        <Container sx={styles.muContainer}>
          <Box sx={styles.containerLeftSide}>
            <Logo />
          </Box>

          <Box sx={styles.containerRightSide}>
            <Box sx={styles.containerProfileMenu}>
              <Box sx={styles.infoPerson}>
                <HeaderProfile />
              </Box>

              <Box>
                <HeaderNavMenu />
              </Box>
            </Box>

            <Box sx={styles.totalizadores}>
              <HeaderCard></HeaderCard>
              <HeaderCard></HeaderCard>
              <HeaderCard></HeaderCard>
              <HeaderCard></HeaderCard>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Headers;

const styles = {
  containerHeader: {
    width: "100%",
    backgroundColor: "#DCE3E6",
    // padding: "20px 40px",
    // display: "flex",
  },
  muContainer: {
    display: "flex",
    padding: '20px 0'
  },
  containerLeftSide: {
    display: "flex",
    justifyContent: "center",
  },
  containerRightSide: {
    flexGrow: "2",
  },
  containerProfileMenu: {
    display: "flex",
    justifyContent: "space-between",
  },
  infoPerson: {
    display: "flex",
  },
  totalizadores: {
    display: "flex",
    marginTop: "30px",
    justifyContent: "space-between",
  },
};
