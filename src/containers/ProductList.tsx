import React from 'react';
import { FlatList, View } from 'react-native';
import useProducts from '../hooks/useProducts';
import Product from '../components/Product';

type ProductListProps = {
    nameSearch: string;
    priceSearch: string;
    sort: string;
}

function ProductList(props: ProductListProps) {
    const { filtered } = useProducts(props.nameSearch, props.priceSearch, props.sort);
    return (
        <View style = {{
            flex: 1
        }}>
            <FlatList
                data = { filtered }
                numColumns = {2}
                initialNumToRender = {15}
                renderItem = {({item}) => <Product data={item} />}
                keyExtractor = {item => item.productId.toString()}
                contentContainerStyle={{flex: 1}}
                style={{flex:1}}
                scrollEnabled={false}
             />
        </View>
    );
}

export default ProductList;