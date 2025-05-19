import { Plus, Minus, Trash } from 'lucide-react';
import { Button } from "@/components/ui/button"; // Assuming you have a Button component from shadcn/ui

export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string; // Optional image URL
}

interface CartItemProps {
  item: Product;
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemoveItem }) => {
  const handleIncreaseQuantity = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    } else {
      // Optionally, remove item if quantity becomes 0, or just prevent going below 1
      onRemoveItem(item.id);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <img
          src={item.image || 'https://via.placeholder.com/64'} // Default placeholder if no image
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" onClick={handleDecreaseQuantity} aria-label="Decrease quantity">
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{item.quantity}</span>
        <Button variant="outline" size="icon" onClick={handleIncreaseQuantity} aria-label="Increase quantity">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="text-lg font-semibold">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      <Button variant="ghost" size="icon" onClick={() => onRemoveItem(item.id)} aria-label="Remove item">
        <Trash className="h-5 w-5 text-red-500 hover:text-red-700" />
      </Button>
    </div>
  );
};

export default CartItem;