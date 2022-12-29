import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IProductSubCategory} from "../../interfaces/ICategory";

function ProductSubCategories() {
    const baseUrl = `products/sub-categories`;
    const {slug} = useParams<{ slug: string }>();
    const [productSubCategory, setProductSubCategory] = useState<Partial<IProductSubCategory>>({});
    const getProductSubCategoryBySlug = async () => {
        try {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            };
            const data = await fetch(`http://localhost:5500/${baseUrl}/${slug}`, requestOptions);
            const productSubCategory: IProductSubCategory = await data.json();
            setProductSubCategory(productSubCategory);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getProductSubCategoryBySlug();
    }, []);

    return (
        <h1>{productSubCategory.title}</h1>
    )
}

export default ProductSubCategories;
