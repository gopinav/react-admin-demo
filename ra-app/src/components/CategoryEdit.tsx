import { Edit, SimpleForm, TextInput } from "react-admin";

export const CategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);
