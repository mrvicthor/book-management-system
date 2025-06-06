import { ReferenceInput, SelectInput } from "react-admin";

interface AuthorReferenceInputProps {
  source: string;
  label?: string;
}

const AuthorReferenceInput = ({ source, label }: AuthorReferenceInputProps) => {
  return (
    <ReferenceInput source={source} reference="authors" label={label}>
      <SelectInput optionText="name" optionValue="id" fullWidth />
    </ReferenceInput>
  );
};

export default AuthorReferenceInput;
