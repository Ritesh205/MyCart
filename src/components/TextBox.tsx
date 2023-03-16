import React from "react";
import { TextInput, TextInputProps } from "react-native";

type Props = TextInputProps;
const TextBox: React.FC<Props> = props => (
    <TextInput
        style={{
            borderColor: '#333',
            borderWidth: 1
        }}
        keyboardType={'default'}
        autoFocus
        {...props} />
);

export default TextBox;