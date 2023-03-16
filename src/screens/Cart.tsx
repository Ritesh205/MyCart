import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import Container from '../components/Container';
import CartList from '../containers/CartList';
import { ProductType } from '../types';
import { getData, storeData } from "../utils/storage";

export default function Cart() {

    const navigation = useNavigation();
    const [cart, setCart] = useState<Set<ProductType>>(new Set);
    const updateCart = (productId: number) => {
        let updatedCart = [...cart].filter(item => item.productId !== productId);
        
        setCart(new Set(updatedCart));
        storeData('cart', updatedCart);
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getData('cart')
                .then(data => {
                    setCart(data);
                })
                .catch(err => { });
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <Container scrollable={true} style={{ flex: 1 }} header={true}>
            <CartList data={[...cart]} updateCart = {updateCart}/>
            <Button title='Clear Cart' onPress={() => {
                setCart(new Set);
                storeData('cart', []);
            }} />
        </Container>
    );
}