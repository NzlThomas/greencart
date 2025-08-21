import Layout from "./Layout";
import App from "./App";
import CartList from "./components/CartList/CartList";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "cart", element: <CartList /> },
    ],
  },
];

export default routes;
