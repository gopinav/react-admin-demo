import {
  ExportButton,
  ImageField,
  List,
  NumberField,
  ReferenceField,
  SelectColumnsButton,
  TextField,
  TopToolbar,
  useRecordContext,
  DatagridConfigurable,
  EditButton,
} from "react-admin";
import { PosterFilterSidebar } from "./FilterList";

const UrlField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <a href={record[source]} target="_blank">
      View
    </a>
  );
};

const PosterListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
    <ExportButton />
  </TopToolbar>
);

export const PosterList = () => (
  <List aside={<PosterFilterSidebar />} actions={<PosterListActions />}>
    <DatagridConfigurable>
      <TextField source="id" />
      <TextField source="title" />
      <ImageField
        source="thumbnail"
        title="title"
        sx={{
          "& img": { maxWidth: 80, maxHeight: 80, objectFit: "contain" },
        }}
      />
      <ReferenceField source="category_id" reference="categories" />
      <NumberField source="width" label="width(cm)" />
      <NumberField source="height" label="height(cm)" />
      <NumberField source="price" />
      <UrlField source="image" />
      <TextField source="description" />
      <NumberField source="stock" />
      <NumberField source="sales" sx={{ fontWeight: "bold" }} />
      <EditButton />
    </DatagridConfigurable>
  </List>
);
