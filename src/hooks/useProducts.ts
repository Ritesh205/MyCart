import { useEffect, useState } from 'react';
import { ProductType } from '../types';

function useProducts(nameSearch: string, priceSearch: string, sort: string) {
    const [data, setData] = useState<ProductType[]>([]);
    const [error, setError] = useState<string>('');
    const [filtered, setFiltered] = useState<ProductType[]>([]);
    
    useEffect(() => {
        const endpoint = 'https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json';
        fetch(endpoint)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => setError(err)); 
    }, []);

    useEffect(() => {
        let price: number = parseInt(priceSearch);
        
        if (data && data.length > 0 && (nameSearch && nameSearch.length > 2) || price) {
            setFiltered(data.filter(item => item.productName
                                                .toLowerCase()
                                                .includes(nameSearch.trim().toLowerCase()) 
                                            && (price ? item.productPrice <= parseInt(priceSearch) : true)))
        } else {
            setFiltered(data);
        }

    }, [nameSearch, priceSearch, data]);

    useEffect(() => {
        if (sort === 'name_asc') {
            const localData = filtered.sort((a, b) => (a.productName.toLowerCase() > b.productName.toLowerCase())
                ? 1
                : ((b.productName.toLowerCase() > a.productName.toLowerCase()) ? -1 : 0));
            setFiltered(localData);                                                
        } else if (sort === 'name_desc') {
            const localData = filtered.sort((a, b) => (a.productName.toLowerCase() > b.productName.toLowerCase())
                ? 1
                : ((b.productName.toLowerCase() > a.productName.toLowerCase()) ? -1 : 0)).reverse();
            setFiltered(localData);
        } else if (sort === 'price_asc') {
            const localData = filtered.sort((a, b) => (a.productPrice - b.productPrice));
            setFiltered(localData);
        } else if (sort === 'price_desc') {
            const localData = filtered.sort((a, b) => (a.productPrice - b.productPrice)).reverse();
            setFiltered(localData);
        }
    }, [sort]);

    return { data, error, filtered };
}

export default useProducts;