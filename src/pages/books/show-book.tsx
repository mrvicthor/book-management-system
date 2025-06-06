import { Divider } from "@mui/material";
import {
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

const BookDetails = () => (
  <Show>
    <SimpleShowLayout divider={<Divider flexItem />} spacing={2}>
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="authorId" reference="authors" />
      <NumberField source="publishedYear" label="Published Year" />
    </SimpleShowLayout>
  </Show>
);

export default BookDetails;
