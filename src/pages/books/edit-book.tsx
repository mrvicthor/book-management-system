import {
  Edit,
  NumberInput,
  required,
  SimpleForm,
  TextInput,
  useDataProvider,
  useNotify,
  useRedirect,
  useUpdate,
} from "react-admin";
import AuthorReferenceInput from "../../components/shared/AuthorReferenceInput";
import { validateYear } from "../../validators/validateYear";
import { BookFormData } from "../../types";
import { capitalizeWords } from "../../utils/textFormatting";

const EditBook = () => {
  const dataProvider = useDataProvider();
  const [update] = useUpdate();
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

      await update("books", { id: data.id, data: capitalizedData });
      notify("Book edited successfully!", {
        type: "success",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      redirect("list", "books");
    } catch (error) {
      console.error("Error editing book:", error);
      notify("Error editing book", {
        type: "error",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    }
  };
  return (
    <Edit>
      <SimpleForm onSubmit={handleSubmit}>
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
};

export default EditBook;
