import { JsonValue } from "type-fest";

export type Analytics = {
  createdAt: Date;
  data: JsonValue;
  generatedAt: Date | null;
  id: string;
  reportType: string | null;
  updatedAt: Date;
};
