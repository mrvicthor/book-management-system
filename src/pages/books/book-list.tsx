import {
  //   Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
  EditButton,
  ReferenceInput,
  SelectInput,
  DeleteButton,
  SearchInput,
} from "react-admin";
import FadeInDatagrid from "../../components/animations/FadeInDatagrid";

const BookList = () => {
  const bookFilters = [
    <SearchInput source="q" key="title" alwaysOn />,
    <ReferenceInput
      source="authorId"
      label="Author"
      key="authorId"
      reference="authors"
    >
      <SelectInput optionText="name" />
    </ReferenceInput>,
  ];
  return (
    <List filters={bookFilters}>
      <FadeInDatagrid delay={60} duration={350}>
        <TextField source="id" label="Book ID" sortable />
        <TextField source="title" label="Book Title" sortable />
        <ReferenceField
          source="authorId"
          reference="authors"
          label="Author"
          sortable
        >
          <TextField source="name" />
        </ReferenceField>
        <NumberField source="publishedYear" label="Published Year" sortable />
        <EditButton />
        <DeleteButton />
      </FadeInDatagrid>
    </List>
  );
};

export default BookList;
