import React from "react";
import { Text } from "react-native";

import * as S from "./styles";

export default function Overlay({ displayName, description }) {
  return (
    <S.Container>
      <S.displayName> {displayName} </S.displayName>
      <S.description> {description} </S.description>
    </S.Container>
  );
}
