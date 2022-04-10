import styled from "styled-components";

export const Spaccer = styled.View`
  width: 100%;
  height: ${(props) => props.size};
`;

export const Box = styled.View`
  align-items: center;
  justify-content: flex-end;
  flex: ${(props) => (props.flex ? props.flex : 1)};
`;

export const Title = styled.Text``;

export const Image = styled.Image`
  width: 387px;
  height: 387px;
`;
export const Loader = styled.ActivityIndicator``;
