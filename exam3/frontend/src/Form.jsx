import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const validation = z.object({
    productName: z.string().min(2).max(50, 'Product name must 2  characters'),
    productDescription: z.string().min(2).max(200, 'Description must 2 characters'),
    price: z.string().min(1, 'Price must be at least 1'),
});

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(validation),
    });

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8090/product/all");
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    const create = async (data) => {
        try {
            const res = await axios.post("http://localhost:8090/product/create", data);
            console.log("Product created:", res.data);
        } catch (error) {
            console.error("Error creating product:", error);
        }
    };

    const onSubmit = (data) => {
        if (data) {
            console.log('Form submitted:', data);
            create(data);
        } else {
            console.log('Form not submitted due to validation errors');
        }
    };

    return (
        <div>
            {/* Product form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Product Name" {...register('productName')} />
                {errors.productName && <p>{errors.productName.message}</p>}

                <input type="text" placeholder="Product Description" {...register('productDescription')} />
                {errors.productDescription && <p>{errors.productDescription.message}</p>}

                <input type="number" placeholder="Price" {...register('price')} />
                {errors.price && <p>{errors.price.message}</p>}

                <input type="submit" />
            </form>

            <h2>Product List</h2>
            <div>
                {
                    <ul>
                        {products.map((product) => (
                            <li key={product.id}>
                                <h3>{product.productName}</h3>
                                <p>{product.productDescription}</p>
                                <p>Price: ${product.price}</p>
                                <p>Quantity: {product.quantity}</p>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </div>
    );
};

export default Form;
