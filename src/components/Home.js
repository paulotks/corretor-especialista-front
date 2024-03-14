import React from "react";
import { Box, Container } from "@mui/material";
import Headers from "./Headers";
import MenuLeft from "./MenuLeft";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <>
      <Headers />
      <Container sx={styles.container}>
        <Box sx={styles.menuLeftBox}>
          <MenuLeft />
        </Box>
        <Box sx={styles.ProductListBox}>
          <ProductList />
        </Box>
      </Container>
    </>
  );
};

const styles = {
  container: {
    padding: '80px 0',
    display: "flex",
    justifyContent: "space-between",
  },
  menuLeftBox: {
  },
  ProductListBox: {
    flexGrow: '2',
    paddingLeft: '100px'
    
  }
};

export default Home;
