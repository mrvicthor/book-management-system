import { List, NumberField, TextField } from "react-admin";

import FadeInDatagrid from "../../components/animations/FadeInDatagrid";

const Authors = () => {
  return (
    <List>
      <FadeInDatagrid delay={60} duration={350}>
        <TextField source="id" label="Author ID" />
        <TextField source="name" label="Author Name" />
        <NumberField source="birthYear" label="Birth Year" />
      </FadeInDatagrid>
    </List>
  );
};

export default Authors;
