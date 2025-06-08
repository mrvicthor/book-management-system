import {
  Create,
  NumberInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";
import AuthorReferenceInput from "../../components/shared/AuthorReferenceInput";
import { validateYear } from "../../validators/validateYear";

const CreateBook = () => {
  return (
    <Create redirect="list">
      <SimpleForm>
        <TextInput
          source="title"
          label="Book Title"
          validate={[required()]}
          fullWidth
        />
        <AuthorReferenceInput source="authorId" />
        <NumberInput
          source="publishedYear"
          label="Published Year"
          validate={[required(), validateYear]}
        />
      </SimpleForm>
    </Create>
  );
};

export default CreateBook;
