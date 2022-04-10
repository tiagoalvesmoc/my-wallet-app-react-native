import React from "react";

import { Container, Icons, Touch } from "./styles";

import { useNavigation } from "@react-navigation/native";

import { navigate } from "../../Utils/navigation";

export default function NewLaunch() {
  const navigation = useNavigation();

  function go() {
    return goPage("History");
  }
  return (
    <Container>
      <Touch>
        <Icons
          source={require("../../assets/button.png")}
          onPress={() => {
            navigate("History");
          }}
        />
      </Touch>
    </Container>
  );
}
