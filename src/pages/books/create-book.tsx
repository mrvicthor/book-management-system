import {
  Create,
  NumberInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";
import AuthorReferenceInput from "../../components/shared/AuthorReferenceInput";

const CreateBook = () => {
  return (
    <Create>
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
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  );
};

export default CreateBook;
