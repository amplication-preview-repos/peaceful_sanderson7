import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const JobPostingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="applications"
          reference="Application"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicationTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="location" source="location" />
        <DateTimeInput label="postedDate" source="postedDate" />
        <NumberInput label="salary" source="salary" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
