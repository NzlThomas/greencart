import App from "./App";
import CartList from "./components/CartList/CartList";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <CartList />,
  },
];

export default routes;
