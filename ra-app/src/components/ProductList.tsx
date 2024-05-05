import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

export const ProductList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="category_id" reference="categories" />
      <TextField source="reference" />
      <NumberField source="width" />
      <NumberField source="height" />
      <NumberField source="price" />
      <TextField source="thumbnail" />
      <TextField source="image" />
      <TextField source="description" />
      <NumberField source="stock" />
      <NumberField source="sales" />
    </Datagrid>
  </List>
);
