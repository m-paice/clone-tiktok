import React from "react";

import EntypoIcons from "react-native-vector-icons/Entypo";

import { View } from "react-native";

import * as S from "./styles";

export default function Button() {
  return (
    <S.Button>
      <EntypoIcons name="plus" size={12} color="#000" />
    </S.Button>
  );
}
