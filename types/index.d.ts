interface IDish {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: {
    asset: {
      _ref: string;
    };
  };
}

export interface IRestaurant {
  _id: string;
  name: string;
  address: string;
  logo: {
    asset: {
      _ref: string;
    };
  };
  description: string;
  category: {
    name: string;
  };
  rating: number;
  dishes: IDish[];
  latitude: number;
  longitude: number;
}
