import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AnalyticsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="generatedAt" source="generatedAt" />
        <TextInput label="reportType" source="reportType" />
      </SimpleForm>
    </Edit>
  );
};
