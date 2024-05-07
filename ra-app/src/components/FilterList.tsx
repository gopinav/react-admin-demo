import {
  SavedQueriesList,
  FilterLiveSearch,
  FilterList,
  FilterListItem,
} from "react-admin";
import { Card, CardContent } from "@mui/material";
import CategoryIcon from "@mui/icons-material/LocalOffer";

export const PosterFilterSidebar = () => (
  <Card sx={{ order: -1, mr: "24px", mt: "48px", width: 250 }}>
    <CardContent>
      <SavedQueriesList />
      <FilterLiveSearch />
      <FilterList label="Category" icon={<CategoryIcon />}>
        <FilterListItem label="animals" value={{ category_id: 1 }} />
        <FilterListItem label="beard" value={{ category_id: 2 }} />
        <FilterListItem label="business" value={{ category_id: 3 }} />
        <FilterListItem label="cars" value={{ category_id: 4 }} />
        <FilterListItem label="city" value={{ category_id: 5 }} />
      </FilterList>
    </CardContent>
  </Card>
);
