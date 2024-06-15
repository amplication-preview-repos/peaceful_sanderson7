import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AnalyticsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="generatedAt" source="generatedAt" />
        <TextInput label="reportType" source="reportType" />
      </SimpleForm>
    </Create>
  );
};
