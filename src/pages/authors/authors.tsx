import { Datagrid, List, NumberField, TextField } from "react-admin";

const Authors = () => {
  return (
    <List>
      <Datagrid
        sx={{
          ".RaDatagrid-headerCell": {
            paddingBlock: "8px",
          },
        }}
      >
        <TextField source="id" label="Author ID" />
        <TextField source="name" label="Author Name" />
        <NumberField source="birthYear" label="Birth Year" />
      </Datagrid>
    </List>
  );
};

export default Authors;
