import {
  Edit,
  NumberInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";
import AuthorReferenceInput from "../../components/shared/AuthorReferenceInput";
import { validateYear } from "../../validators/validateYear";

const EditBook = () => (
  <Edit redirect="list">
    <SimpleForm>
      <TextInput source="id" readOnly />
      <TextInput source="title" />
      <AuthorReferenceInput source="authorId" />
      <NumberInput
        source="publishedYear"
        validate={[required(), validateYear]}
      />
    </SimpleForm>
  </Edit>
);

export default EditBook;
