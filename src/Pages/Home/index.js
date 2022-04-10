import React from "react";

import Header from "../../components/Header";
import CardBalance from "../../components/CardBalance";
import Activity from "../../components/Activity";
import NewLaunch from "../../components/NewLaunch";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Header />
      <CardBalance />
      <Activity />
      <NewLaunch />
    </Container>
  );
}
