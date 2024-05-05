import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { ProductList } from "./components/ProductList";
import { ProductEdit } from "./components/ProductEdit";
import { ProductCreate } from "./components/ProductCreate";

const dataProvider = jsonServerProvider("http://localhost:3000");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="products"
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate}
    />
  </Admin>
);

export default App;
