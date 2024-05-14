import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FeedbackWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
};
