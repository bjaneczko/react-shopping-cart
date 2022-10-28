import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Hello!</h1>
      <p>
        This project is build using React, TypeScript and Vite. Check{" "}
        <Link to="/store">Store</Link> to see all functionalities as adding
        items to cart, suming their price and increasing/decreasing or removing
        them. Everything will be saved in localStorage.
      </p>
    </>
  );
}
