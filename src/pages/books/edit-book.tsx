import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";
import AuthorReferenceInput from "../../components/shared/AuthorReferenceInput";

const EditBook = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <AuthorReferenceInput source="authorId" />
      <NumberInput source="publishedYear" />
    </SimpleForm>
  </Edit>
);

export default EditBook;
