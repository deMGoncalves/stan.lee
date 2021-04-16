import * as f from '@cea/f';
import convertDateBr from './convertDateBr';

export default (dateStart, dateStop) => 
  f.gte(new Date(), new Date(convertDateBr(dateStart))) && f.lte(new Date(), new Date(convertDateBr(dateStop)))