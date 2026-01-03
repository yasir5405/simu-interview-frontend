import qs from "query-string";

interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

export const formUrlQuery = ({ key, params, value }: UrlQueryParams) => {
  const queryString = qs.parse(params);
  queryString[key] = value;

  const newQuery = qs.stringify(queryString);

  return `${window.location.pathname}?${newQuery}`;
};

interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

export const removeKeysFromQuery = ({
  keysToRemove,
  params,
}: RemoveUrlQueryParams) => {
  const queryString = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete queryString[key];
  });

  const newQuery = qs.stringify(queryString, { skipNull: true });

  return `${window.location.pathname}?${newQuery}`;
};
