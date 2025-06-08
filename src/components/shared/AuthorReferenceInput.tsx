import { ReferenceInput, required, SelectInput } from "react-admin";

interface AuthorReferenceInputProps {
  source: string;
  label?: string;
}

const AuthorReferenceInput = ({ source, label }: AuthorReferenceInputProps) => {
  return (
    <ReferenceInput source={source} reference="authors" label={label}>
      <SelectInput
        optionText="name"
        optionValue="id"
        fullWidth
        validate={required("Author is required")}
      />
    </ReferenceInput>
  );
};

export default AuthorReferenceInput;
