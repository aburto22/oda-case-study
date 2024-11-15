declare type City = {
  id: number;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
};

declare type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
};

declare type Car = {
  id: number;
  model: string;
  registrationNumber: string;
  price_per_hour: number;
  price_per_day: number;
  homeCity: number;
};

declare type CarPopulated = Car & {
  city: City | undefined;
};

declare type Extra = 'GPS' | 'Child Seat' | 'Wi-Fi' | 'Extra Driver';

declare type Booking = {
  carId: number;
  customerId: number;
  startDate: Date;
  endDate: Date;
  extras: Extra[];
};
