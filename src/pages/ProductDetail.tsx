import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    
    // Removed setPurchaseType

    useEffect(() => {
        // Fetch product details
    }, [id]);

    return <div>Product Detail</div>;
};

export default ProductDetail;