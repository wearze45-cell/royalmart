import { CartProvider } from "./CartContext";
import { OrderProvider } from "./OrderContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <OrderProvider>
        {children}
      </OrderProvider>
    </CartProvider>
  );
}