import styled from "styled-components/native";
import COLOR from "../../Utils/colors";

export const Spaccer = styled.View`
  width: 100%;
  height: ${(props) => props.size};
`;

export const Container = styled.View``;

export const Box = styled.View`
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};

  padding: 30px;
`;
export const Card = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${(props) => props.size || "24px"};
  font-family: "Prompt_400Regular";
  color: ${(props) => props.color || COLOR.primary};

  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
`;

export const Icons = styled.Image`
  width: 20px;
  height: 20px;
  margin: 5px;
`;
