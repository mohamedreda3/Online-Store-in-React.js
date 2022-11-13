import axios from 'axios';

export const products = async () => await axios.get('https://dummyjson.com/products?limit=100');
export const categories = async () => await axios.get('https://dummyjson.com/products/categories');
export const reviews = async () => await axios.get('https://dummyjson.com/posts');
export const users = async () => await axios.get('https://dummyjson.com/users?limit=100');