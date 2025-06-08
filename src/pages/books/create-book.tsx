import {
  Create,
  NumberInput,
  required,
  SimpleForm,
  TextInput,
  useCreate,
  useDataProvider,
  useNotify,
  useRedirect,
} from "react-admin";
import AuthorReferenceInput from "../../components/shared/AuthorReferenceInput";
import { validateYear } from "../../validators/validateYear";

import { capitalizeWords } from "../../utils/textFormatting";
import { BookFormData } from "../../types";

const CreateBook = () => {
  const dataProvider = useDataProvider();
  const [create] = useCreate();
  const notify = useNotify();
  const redirect = useRedirect();

  const handleSubmit = async (data: Partial<BookFormData>) => {
    try {
      const capitalizedData = {
        ...data,
        title: data.title ? capitalizeWords(data.title.trim()) : "",
      };

      const existingBook = await dataProvider.getList("books", {
        filter: {
          title: capitalizedData.title,
          authorId: capitalizedData.authorId,
        },
        pagination: { page: 1, perPage: 1 },
        sort: { field: "id", order: "ASC" },
      });

      if (existingBook.total && existingBook.total > 0) {
        notify("This book by the same author already exists.", {
          type: "warning",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
        return;
      }

      await create("books", { data: capitalizedData });
      notify("Book added successfully!", {
        type: "success",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      redirect("list", "books");
    } catch (error) {
      console.error("Error adding book:", error);
      notify("Error adding book", { type: "error" });
    }
  };

  return (
    <Create>
      <SimpleForm onSubmit={handleSubmit}>
        <TextInput source="title" label="Book Title" fullWidth />
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
