import Products from '..';
import NewProducts from "../components/NewProducts"
import EditProducts from "../components/EditProducts"

const ProductRoutes = [
  {
    path: "/",
    component: Products,
    auth: false,
    exact: true
  },
  {
    path: "/products/new",
    component: NewProducts,
    auth: false,
    exact: true
  },
  {
    path: "/products/edit/:id",
    component: EditProducts,
    auth: false,
    exact: true
  },
]

export default ProductRoutes;