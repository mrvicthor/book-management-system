import { Datagrid, List, NumberField, TextField } from "react-admin";

const Authors = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <NumberField source="birthYear" />
      </Datagrid>
    </List>
  );
};

export default Authors;
