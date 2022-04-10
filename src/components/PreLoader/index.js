import React from "react";

import { Spaccer, Box, Image, Loader, Title } from "./styles";
import COLOR from "../../Utils/colors";

export default function PreLoader() {
  return (
    <>
      <Box flex={2}>
        <Image source={require("../../assets/splash.png")} />
      </Box>

      <Box>
        <Loader size="large" color={COLOR.blueSky} />
        <Spaccer size="50px" />
      </Box>
    </>
  );
}
