import React, { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import { responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions";
import { useToast } from "react-native-toast-notifications";
import { ProductType } from "../types";
import Container from "./Container";
import { getData, storeData } from "../utils/storage";
import NumericInput from 'react-native-numeric-input'

type Props = { data: ProductType, updateCart: any }
const CartItem: React.FC<Props> = ({ data, updateCart }) => {
    const toast = useToast();
    const [quantity, setQuantity] = useState<number>(1);
    return (
        <Container scrollable={false} style={{
            width: responsiveWidth(100),
            height: responsiveHeight(40),
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flex: 1
        }}>
            <TouchableOpacity style={{
                height: '60%',
                width: '60%'
            }} >
                <Image source={{ uri: data.productImage }}
                    style={{
                        height: '100%',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        resizeMode: 'center',
                        backgroundColor: 'grey',
                        borderRadius: 10,
                        borderColor: 'black',
                        borderWidth: 2
                    }} />
            </TouchableOpacity>
            <Text variant="labelSmall">{data.productName.toUpperCase()}</Text>
            <Text variant="labelSmall">{'Price: $' + data.productPrice}</Text>
            <NumericInput
                value={quantity}
                onChange={value => setQuantity(value)}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                minValue={1}
                totalWidth={100}
                totalHeight={30}
                iconSize={25}
                step={1}
                valueType='real'
                rounded
                textColor='#B0228C'
                rightButtonBackgroundColor='#EA3788'
                leftButtonBackgroundColor='#E56B70' />

            <Button style={{
                padding: 0,
                borderRadius: 5,
                backgroundColor: 'tomato',
            }}
                labelStyle={{ fontSize: 10, includeFontPadding:false}}
                mode="contained"
                compact={true}
                onPress={async () => {
                    const cartData: ProductType[] = await getData('cart');
                    updateCart(data.productId);
                    toast.show("Item removed from the Cart", {
                        type: 'success',
                        placement: 'bottom',
                        duration: 1000,
                        animationType: 'zoom-in',
                    });
                }}>Remove</Button>
        </Container>
    );
}

export default CartItem;