import { OVERVIEW } from "store/root/type";

export const getOverview = (request: number) => {
  return {
    type: OVERVIEW.getOverview,
    payload: request,
  };
};

