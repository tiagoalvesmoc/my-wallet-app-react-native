import styled from "styled-components/native";
import COLOR from "../../Utils/colors";

export const Spaccer = styled.View`
  width: 100%;
  height: ${(props) => props.size};
`;

export const Container = styled.View`
  padding: 10px;
`;

export const Box = styled.View`
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: 30px;
  background-color: ${COLOR.white};
  border-radius: 20px;
  justify-content: ${(props) => (props.space ? "center" : " space-between")};
`;

export const History = styled.View`
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding-left: ${(props) => props.pad || "0px"};
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${(props) => props.size || "24px"};
  font-family: "Prompt_400Regular";
  color: ${(props) => props.color || "#000"};

  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  margin-left: 10px;
`;

export const SubTitle = styled.Text`
  font-size: ${(props) => props.size || "24px"};
  font-family: "Prompt_400Regular";
  color: ${(props) => props.color || COLOR.subTitle};

  margin-left: 10px;
`;

export const Icons = styled.Image`
  width: 50px;
  height: 43px;
`;

export const Caixa = styled.View`
  flex-direction: row;
`;

export const Scroll = styled.ScrollView``;

export const Touchable = styled.TouchableOpacity``;
