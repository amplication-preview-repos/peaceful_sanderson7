import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CANDIDATE_TITLE_FIELD } from "./CandidateTitle";
import { JOBPOSTING_TITLE_FIELD } from "../jobPosting/JobPostingTitle";

export const CandidateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="experience" source="experience" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="phone" source="phone" />
        <TextField label="skills" source="skills" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Application"
          target="candidateId"
          label="Applications"
        >
          <Datagrid rowClick="show">
            <TextField label="applicationDate" source="applicationDate" />
            <ReferenceField
              label="Candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="JobPosting"
              source="jobposting.id"
              reference="JobPosting"
            >
              <TextField source={JOBPOSTING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
