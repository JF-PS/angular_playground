import { queryParamType } from '../types';

const formatQueryParams = (params: queryParamType) => {
  let filter = '';

  Object.entries(params).forEach((param, index) => {
    if (param[1]) filter += `${index === 0 ? '?' : '&'}${param[0]}=${param[1]}`;
  });

  return filter;
};

export default formatQueryParams;
