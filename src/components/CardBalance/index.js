import React from "react";

import { Container, Box, Title, Card, Spaccer, Icons } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

export default function CardBalance() {
  return (
    <Container>
      <Box>
        <Title>Balance:R$ 900,786</Title>
      </Box>
      <Card>
        <LinearGradient
          style={{
            width: "95%",
            height: 290,
            margin: 10,
            borderRadius: 10,
            padding: 30,
            alignSelf: "center",
            alignContent: "center",
          }}
          start={[0.4, 0.1]}
          end={[0.6, 0.9]}
          colors={[" rgba(255, 134, 94, 1)", "rgba(  148, 0, 211,0.8 )"]}
        >
          <Title color="#fff" size="16px">
            Resumo
          </Title>

          <Box row>
            <Title color="#fff" size="15px" bold>
              R$
            </Title>
            <Title color="#fff" size="50px" bold>
              900,786
            </Title>
          </Box>
          <Box row justify="flex-end">
            <Box row>
              <Title
                color="#fff"
                size="18px"
                adjustsFontSizeToFit={true}
                numberOfLines={1}
              >
                Entra.. 456,204
              </Title>
              <Icons source={require("../../assets/down.png")} />
            </Box>
            <Box row>
              <Title color="#fff" size="18px" adjustsFontSizeToFit>
                Saidas 456,204
              </Title>
              <Icons source={require("../../assets/up.png")} />
            </Box>
          </Box>
        </LinearGradient>
      </Card>
    </Container>
  );
}
