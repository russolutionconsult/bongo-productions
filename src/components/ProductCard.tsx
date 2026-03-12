import { Link } from "react-router-dom";
import type { Product } from "@/lib/products";
import { ShoppingCart, FileText } from "lucide-react";
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
      className="group relative bg-gradient-card glass-card rounded-none overflow-hidden hover-lift cursor-pointer block h-full flex flex-col"
    >
      {/* Responsive image area: 4:3 on mobile, fixed h-52 on sm+ */}
      <div className={`relative aspect-[4/3] sm:h-52 overflow-hidden shrink-0 ${product.imageFit === 'contain' ? 'bg-white/5' : 'bg-[hsl(240,12%,6%)]'}`}>
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full ${product.imageFit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-700 group-hover:scale-110`}
        />
      </div>

      {/* Content — flex-col to push buttons to bottom */}
      <div className="p-5 flex flex-col flex-1">
        <p className="category-badge mb-2">{product.categoryLabel}</p>
        {/* Fixed min-height for title: fits 2 lines comfortably */}
        <h3 className="font-serif text-base font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors min-h-[2.75rem]">
          {product.name}
        </h3>
        {/* Fixed min-height for description: fits 2 lines */}
        <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]">
          {product.description}
        </p>

        {/* Spacer pushes price & buttons to the bottom */}
        <div className="mt-auto">
          {/* Price */}
          <div className="mb-3">
            <span className="text-foreground font-bold text-lg">GH₵{product.price.toLocaleString()}</span>
          </div>

          {/* Dual Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-none bg-primary/20 border border-primary/30 text-primary text-xs font-semibold hover:bg-primary hover:text-white transition-all duration-200"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              Add to Cart
            </button>
            <Link
              to={`/request-quote?productId=${product.id}`}
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-none bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
