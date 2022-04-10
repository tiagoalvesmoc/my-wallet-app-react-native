import React from "react";

import { Container, IconBoxButton, Image, Title } from "./styles";

export default function Header() {
  return (
    <Container>
      <IconBoxButton row>
        <Image source={require("../../assets/avatar.png")} />
        <Title>Nermeen Saif</Title>
      </IconBoxButton>
      <IconBoxButton>
        <Image source={require("../../assets/notification.png")} />
      </IconBoxButton>
    </Container>
  );
}
