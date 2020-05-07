import registerCookiesBatteries, {
  registerSetCookieEffect,
  registerGetCookieCoeffect,
} from './cookies';
import registerGlobalBatteries, { registerGlobalCoeffect, globals } from './global';
import registerHttpBatteries from './http';
import registerQueryParamsBatteries, {
  registerQueryParamsCoeffect,
  queryParams,
} from './queryParams';

export {
  registerSetCookieEffect,
  registerGetCookieCoeffect,
  registerCookiesBatteries,
  registerGlobalCoeffect,
  registerGlobalBatteries,
  registerHttpBatteries,
  registerQueryParamsCoeffect,
  registerQueryParamsBatteries,
  globals,
  queryParams,
};
