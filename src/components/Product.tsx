import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { ProductType } from '../types';
import { useNavigation } from '@react-navigation/native';
import Container from './Container';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { Button, Text } from 'react-native-paper';
import { getData, storeData } from '../utils/storage';
import { useToast } from "react-native-toast-notifications";

type Props = { data: ProductType }
const Product: React.FC<Props> = ({ data }) => {
    const navigation = useNavigation();
    const toast = useToast();

    return (
        <Container scrollable={false} style={{
            width: responsiveWidth(50),
            height: responsiveHeight(25),
            alignItems: 'center',
            justifyContent: 'space-evenly'
        }}>
            <TouchableOpacity style={{
                height: '60%',
                width: '60%'
            }}
                onPress={() => navigation.navigate('Details', { pid: data.productId })}
            >
                <Image source={{ uri: data.productImage }}
                    style={{
                        height: '100%',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        resizeMode: 'stretch',
                        backgroundColor: 'grey',
                        borderRadius: 10,
                        borderColor: 'black',
                        borderWidth: 2
                    }} />
            </TouchableOpacity>
            <Text variant="labelSmall">{data.productName.toUpperCase()}</Text>
            <Text variant="labelSmall">{data.productPrice}</Text>
            <Button style={{
                padding: 0,
                borderRadius: 10,
                backgroundColor: 'tomato',

            }}
                labelStyle={{ fontSize: 10 }}
                icon="cart"
                mode="contained"
                compact={true}
                onPress={async () => {
                    const cartData: ProductType[] = await getData('cart');
                    const isAddedToCart: boolean = cartData ? cartData.some(d => d.productId === data.productId) : false;
                    
                    if (!isAddedToCart) {
                        storeData('cart', [...cartData ?? [], data]);
                        toast.show("Added to Cart", {
                            type: 'success',
                            placement: 'bottom',
                            duration: 1000,
                            animationType: 'zoom-in',
                        });
                    } else {
                        toast.show("Item already added to Cart", {
                            type: 'warning',
                            placement: 'bottom',
                            duration: 1000,
                            animationType: 'zoom-in',
                        });
                    }
                }}
            >
                Add To Cart
            </Button>
        </Container>
    );
}
export default Product;