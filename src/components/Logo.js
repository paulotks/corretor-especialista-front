import { Avatar } from "@mui/material";
import React from "react";

const LOGO_CORETOR_ESPECIALISTA =
  "https://res.cloudinary.com/fgrinc/image/upload/v1707229553/corretor-especialista/ynxoepjhjuvexvmxsq7h.png";

const Logo = () => {
  return (
    <>
      <Avatar
        sx={styles.corretorEspecialista}
        src={LOGO_CORETOR_ESPECIALISTA}
      />
    </>
  );
};

const styles = {
  corretorEspecialista: {
    width: "256px",
    height: "256px",
    margin: "27px 51px 27px 0",
  },
};

export default Logo;
