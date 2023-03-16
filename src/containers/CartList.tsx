import React from 'react';
import { FlatList, View } from 'react-native';
import CartItem from '../components/CartItem';

function CartList(props: { data: ArrayLike<any> | null | undefined, updateCart: any}) {

    return (
        <View style = {{
            flex: 1
        }}>
            <FlatList
                data = { props.data }
                numColumns = {1}
                initialNumToRender = {15}
                renderItem = {({item}) => <CartItem data={item} updateCart={props.updateCart} />}
                keyExtractor = {item => item.productId.toString()}
                contentContainerStyle={{flex: 1}}
                style={{flex:1}}
             />
        </View>
    );
}

export default CartList;