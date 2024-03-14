import React from "react";
import { ButtonGroup, Button } from "@mui/material";

const HeaderNavMenu = () => {

  const [ativo, setAtivo] = React.useState(false);
  

  function handleClick() {
    setAtivo(!ativo)
    console.log(ativo);
  }

  return (
    <>
      <ButtonGroup
        size="small"
        color="primary"
        variant="text"
        aria-label="text button group"
      >
        <Button onClick={handleClick} sx={styles.buttonMenu}>Meus dados</Button>
        <Button sx={styles.buttonMenu}>Alterar senha</Button>
        <Button sx={styles.buttonMenu}>Sair</Button>
      </ButtonGroup>
    </>
  );
};

const styles = {
  buttonMenu: {
    padding: "0 20px",
  },
};

export default HeaderNavMenu;
