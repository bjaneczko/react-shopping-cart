import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import StoreItems from "../data/items.json";
import { formatCurrency } from "../utlities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  const item = StoreItems.find((i) => i.id === id);

  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      ></img>
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              {quantity}x
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price * quantity)}
        </div>
      </div>
      <Button
        variant="outline-primary"
        onClick={() => decreaseCartQuantity(item.id)}
      >
        -
      </Button>
      <Button variant="outline-danger" onClick={() => removeFromCart(item.id)}>
        X
      </Button>
      <Button
        variant="outline-primary"
        onClick={() => increaseCartQuantity(item.id)}
      >
        +
      </Button>
    </Stack>
  );
}
