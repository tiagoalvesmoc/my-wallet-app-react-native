import React from "react";
import COLOR from "../../Utils/colors";

import {
  Container,
  Box,
  Title,
  History,
  Spaccer,
  Icons,
  Touchable,
  SubTitle,
  Caixa,
  Scroll,
} from "./styles";

export default function Activity() {
  return (
    <Container>
      <Box row>
        <Title size="20px" bold>
          Last Activity
        </Title>

        <Touchable>
          <Title size="15px" color={COLOR.blue}>
            See all
          </Title>
        </Touchable>
      </Box>
      <Box>
        <Scroll>
          <History row large>
            <Caixa>
              <Icons source={require("../../assets/package.png")} />
              <History pad="10px">
                <Title size="16px">Shopping</Title>
                <SubTitle size="12px"> June 23, 4:45 pm</SubTitle>
              </History>
            </Caixa>

            <Title size="20px">-$236</Title>
          </History>
          <Spaccer size="5px" />
          <History row>
            <Caixa>
              <Icons source={require("../../assets/package.png")} />
              <History pad="10px">
                <Title size="16px">Shopping</Title>
                <SubTitle size="12px"> June 23, 4:45 pm</SubTitle>
              </History>
            </Caixa>

            <Title size="20px">-$236</Title>
          </History>
          <Spaccer size="10px" />
          <History row>
            <Caixa>
              <Icons source={require("../../assets/package.png")} />
              <History pad="10px">
                <Title size="16px" margin>
                  Shopping
                </Title>
                <SubTitle size="12px"> June 23, 4:45 pm</SubTitle>
              </History>
            </Caixa>

            <Title size="20px">-$236</Title>
          </History>
          <Spaccer size="5px" />
          <History row>
            <Caixa>
              <Icons source={require("../../assets/package.png")} />
              <History pad="10px">
                <Title size="16px" margin>
                  Shopping
                </Title>
                <SubTitle size="12px"> June 23, 4:45 pm</SubTitle>
              </History>
            </Caixa>

            <Title size="20px">-$236</Title>
          </History>
          <Spaccer size="5px" />
        </Scroll>
      </Box>
    </Container>
  );
}
