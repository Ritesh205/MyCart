import React, { PropsWithChildren } from 'react';
import { View, ScrollView } from 'react-native';

type Props = {
    scrollable?: boolean;
    header?: boolean;
    footer?: boolean;
    style?: any
} & PropsWithChildren;

const Container: React.FC<Props> = ({ scrollable, children, style }) => {
    return scrollable ? (<ScrollView style={ style }>{children}</ScrollView>) : (<View style={style}>{children}</View>);
}

export default Container;