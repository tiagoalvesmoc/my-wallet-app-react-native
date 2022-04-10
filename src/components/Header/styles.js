import styled from "styled-components/native";
import COLOR from "../../Utils/colors";

export const Container = styled.View`
  margin-top: 10%;
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Image = styled.Image`
  border-radius: 100px;
  width: 56px;
  height: 56px;
`;

export const Title = styled.Text`
  text-align: center;
  padding: 10px;
  font-size: 16px;
  font-family: "Prompt_400Regular";
`;
export const IconBoxButton = styled.TouchableOpacity`
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-self: center;
  justify-content: center;
  align-items: center;
`;
