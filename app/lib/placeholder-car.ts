export type Car = {
  id: number;
  name: string;
  image: string;
  width: number;
  height: number;
  imagePreview?: string;
  price: number;
  category: string;
  descriptionShort: string;
  previewCar?: boolean;
};

export const Cars: ReadonlyArray<Car> = [
  {
    id: 1,
    name: "Bmw X2 M35i DriveX",
    imagePreview: "/vehicle-list-1.jpeg",
    image: "/cars/1.jpeg",
    width: 500,
    height: 303,
    price: 100,
    category: "Luxury",
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    previewCar: true
  },
  {
    id: 2,
    name: "Mercedes Benz S-Class",
    imagePreview: "/vehicle-list-2.jpeg",
    image: "/cars/2.jpeg",
    width: 500,
    height: 303,
    price: 100,
    category: "Luxury",
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    previewCar: true
  },
  {
    id: 3,
    name: "Mercedes Benz S-Class",
    imagePreview: "/vehicle-list-3.jpeg",
    image: "/cars/3.jpeg",
    width: 500,
    height: 303,
    price: 100,
    category: "Luxury",
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    previewCar: true
  },
  {
    id: 4,
    name: "Mercedes Benz S-Class",
    imagePreview: "/vehicle-list-1.jpeg",
    image: "/cars/4.jpeg",
    width: 500,
    height: 303,
    price: 100,
    category: "Luxury",
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    previewCar: true
  },
  {
    id: 5,
    name: "Mercedes Benz S-Class",
    imagePreview: "/vehicle-list-2.jpeg",
    image: "/cars/1.jpeg",
    width: 500,
    height: 303,
    price: 100,
    category: "Luxury",
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    previewCar: true
  },
  {
    id: 6,
    name: "Mercedes Benz S-Class",
    imagePreview: "/vehicle-list-3.jpeg",
    image: "/cars/2.jpeg",
    width: 500,
    height: 303,
    price: 100,
    category: "Luxury",
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    previewCar: true
  }
];
