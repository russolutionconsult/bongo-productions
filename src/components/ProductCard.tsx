import { Link } from "react-router-dom";
import type { Product } from "@/lib/products";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative bg-gradient-card glass-card rounded-2xl overflow-hidden hover-lift cursor-pointer block"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-[hsl(240,12%,6%)]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(240,12%,7%)] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="category-badge mb-2">{product.categoryLabel}</p>
        <h3 className="font-serif text-base font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-foreground font-bold text-lg">GH₵{product.price.toLocaleString()}</span>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-semibold hover:bg-primary hover:text-white transition-all duration-200 group/btn"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
