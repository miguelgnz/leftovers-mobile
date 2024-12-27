export interface Product {
  id: number;
  name: string;
  pickupStart: string;
  pickupEnd: string;
  price: number;
  originalPrice: number;
  image: string;
  quantity: number;
  distance: number;
  favorite: boolean;
  store: {
    id: number;
    name: string;
  };
  reviews: {
    total: number;
    average: number;
  };
}
