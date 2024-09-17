import {Point} from './Point';

type Restaurant = {
  _id: string;
  companyId: Number;
  name: string;
  address: string;
  postalCode: string;
  city: string;
  phone: string;
  location: Point;
  company: string;
};

export {Restaurant};
