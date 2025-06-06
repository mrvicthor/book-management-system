import { Divider } from "@mui/material";
import { NumberField, ReferenceField, Show, TextField } from "react-admin";
import AnimatedShowLayout from "../../components/animations/AnimatedShowLayout";

const BookDetails = () => (
  <Show>
    <AnimatedShowLayout
      divider={<Divider flexItem />}
      spacing={2}
      animationDelay={120}
      duration={500}
    >
      <TextField source="id" label="Book ID" />
      <TextField source="title" label="Book Title" />
      <ReferenceField source="authorId" reference="authors" />
      <NumberField source="publishedYear" label="Published Year" />
    </AnimatedShowLayout>
  </Show>
);

export default BookDetails;
