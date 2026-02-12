import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        { _id: 1, name: "Wireless Headphones", price: 199, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60" },
        { _id: 2, name: "Smart Watch", price: 299, category: "Electronics", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&auto=format&fit=crop&q=60" },
        { _id: 3, name: "Running Shoes", price: 89, category: "Footwear", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60" },
        { _id: 4, name: "Leather Bag", price: 149, category: "Accessories", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60" },
        { _id: 5, name: "Gaming Mouse", price: 59, category: "Electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b91a05c?w=500&auto=format&fit=crop&q=60" },
        { _id: 6, name: "Sunglasses", price: 129, category: "Accessories", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60" },
    ],
    searchTerm: '',
    sortOption: 'default', // default, price-asc, price-desc, name-asc, name-desc
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setSortOption: (state, action) => {
            state.sortOption = action.payload;
        },
        setProducts: (state, action) => {
            state.items = action.payload;
        }
    },
});

export const { setSearchTerm, setSortOption, setProducts } = productSlice.actions;
export default productSlice.reducer;

export const selectAllProducts = (state) => state.product.items;
export const selectSearchTerm = (state) => state.product.searchTerm;
export const selectSortOption = (state) => state.product.sortOption;

export const selectFilteredAndSortedProducts = (state) => {
    const { items, searchTerm, sortOption } = state.product;

    let result = [...items];

    // Filter
    if (searchTerm) {
        const lowerTerm = searchTerm.toLowerCase();
        result = result.filter(item =>
            item.name.toLowerCase().includes(lowerTerm) ||
            item.category.toLowerCase().includes(lowerTerm)
        );
    }

    // Sort
    switch (sortOption) {
        case 'price-asc':
            result.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            result.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            result.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            result.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            break;
    }

    return result;
};
