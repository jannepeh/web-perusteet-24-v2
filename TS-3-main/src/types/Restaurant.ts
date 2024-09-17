type restaurant = {
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

type Point = {
  type: string;
  coordinates: number[];
};
