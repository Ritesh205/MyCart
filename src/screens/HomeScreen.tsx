import React, { useState } from 'react';
import { View } from 'react-native';
import { Badge, Card, IconButton, MD3Colors, Searchbar, Text } from 'react-native-paper';
import Container from '../components/Container';
import ProductList from '../containers/ProductList';

export default function HomeScreen() {
    const [nameSearch, setNameSearch] = useState('');
    const [priceSearch, setPriceSearch] = useState('');
    const onChangeName = (query: React.SetStateAction<string>) => setNameSearch(query);
    const onChangePrice = (query: React.SetStateAction<string>) => setPriceSearch(query);

    const [sort, setSort] = useState<string>('name_asc');

    return (
        <Container scrollable={true} style={{ flex: 1 }} >
            <Card>
                <Card.Title title="Filters" />
                <Card.Content>
                    <Text variant="titleSmall">Filter By Name</Text>
                    <Searchbar style={{
                        borderColor: 'black',
                        borderWidth: 2,
                        fontSize: 12,
                        height: 46,
                        borderRadius: 10,
                    }}
                        onChangeText={onChangeName}
                        value={nameSearch}
                    />
                    <Text variant="titleSmall">Filter By Price Limit</Text>
                    <Searchbar style={{
                        borderColor: 'black',
                        borderWidth: 2,
                        fontSize: 12,
                        height: 46,
                        borderRadius: 10
                    }}
                        keyboardType={'numeric'}
                        onChangeText={onChangePrice}
                        value={priceSearch}
                    />
                </Card.Content>
                <Card.Content>
                    <View style={{
                        flex: 1,
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text variant="titleSmall">Sort By Name</Text>
                        <IconButton
                            icon="sort"
                            iconColor={MD3Colors.error50}
                            size={30}
                            onPress={() => {
                                setSort(sort !== 'name_asc' ? 'name_asc' : 'name_desc');
                            }}
                        />
                        <Text variant="titleSmall">Sort By Price</Text>
                        <IconButton
                            icon="sort"
                            iconColor={MD3Colors.error50}
                            size={30}
                            onPress={() => {
                                setSort(sort !== 'price_asc' ? 'price_asc' : 'price_desc');
                            }}
                        />
                    </View>
                </Card.Content>
            </Card>
            <ProductList nameSearch={nameSearch} priceSearch={priceSearch} sort={sort} />
        </Container>
    );
}