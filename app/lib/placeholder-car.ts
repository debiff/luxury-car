import car1_1 from "@/public/cars/1/1.jpeg";
import car1_2 from "@/public/cars/1/2.jpeg";
import car1_3 from "@/public/cars/1/3.jpeg";
import car1_4 from "@/public/cars/1/4.jpeg";
import car1_list from "@/public/cars/1.png";
import car2_list from "@/public/cars/2.png";
import car3_list from "@/public/cars/3.png";
import car4_list from "@/public/cars/4.png";
import car5_list from "@/public/cars/5.png";
import car6_list from "@/public/cars/6.png";
import car7_list from "@/public/cars/7.png";
import car8_list from "@/public/cars/8.png";
import car9_list from "@/public/cars/9.png";
import car10_list from "@/public/cars/10.png";
import car11_list from "@/public/cars/11.png";

type CarImage = { src: string; width: number; height: number };
export const make = [
  "Porsche",
  "Mercedes",
  "Land Rover",
  "Audi",
  "Ferrari",
  "Lamborghini",
  "BMW"
] as const;
export type Make = (typeof make)[number];
export const category = ["Luxury", "Sport", "SUV", "Truck", "Van"] as const;
export type Category = (typeof category)[number];
export type Car = {
  id: number;
  name: string;
  category: Category;
  make: Make;
  imageList: CarImage;
  imagePreview?: string;
  fromPrice: number;
  "0to100": number;
  maxSpeed: number;
  enginePower: number;
  availableColors: ReadonlyArray<string>;
  descriptionShort: string;
  previewCar?: boolean;
  gallery: Array<CarImage>;
};

export const Cars: ReadonlyArray<Car> = [
  {
    id: 0,
    name: "Panamera",
    category: "Luxury",
    make: "Porsche",
    imagePreview: "/cars/1/preview.webp",
    imageList: {
      src: car1_list.src,
      width: car1_list.width,
      height: car1_list.height
    },
    fromPrice: 500,
    "0to100": 5.3,
    maxSpeed: 272,
    enginePower: 353,
    availableColors: ["#000000"],
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    previewCar: true,
    gallery: [
      { src: car1_1.src, width: car1_1.width, height: car1_1.height },
      { src: car1_2.src, width: car1_2.width, height: car1_2.height },
      { src: car1_3.src, width: car1_3.width, height: car1_3.height },
      { src: car1_4.src, width: car1_4.width, height: car1_4.height }
    ]
  },
  {
    id: 1,
    name: "SL 63",
    category: "Luxury",
    make: "Mercedes",
    imagePreview: "/cars/1/preview.webp",
    imageList: {
      src: car2_list.src,
      width: car2_list.width,
      height: car2_list.height
    },
    fromPrice: 500,
    "0to100": 5.3,
    maxSpeed: 272,
    enginePower: 353,
    availableColors: ["#000000"],
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    previewCar: true,
    gallery: [
      { src: car1_1.src, width: car1_1.width, height: car1_1.height },
      { src: car1_2.src, width: car1_2.width, height: car1_2.height },
      { src: car1_3.src, width: car1_3.width, height: car1_3.height },
      { src: car1_4.src, width: car1_4.width, height: car1_4.height }
    ]
  },
  {
    id: 2,
    name: "G 4x4 63",
    category: "Luxury",
    make: "Mercedes",
    imagePreview: "/cars/1/preview.webp",
    imageList: {
      src: car3_list.src,
      width: car3_list.width,
      height: car3_list.height
    },
    fromPrice: 500,
    "0to100": 5.3,
    maxSpeed: 272,
    enginePower: 353,
    availableColors: ["#000000"],
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    previewCar: true,
    gallery: [
      { src: car1_1.src, width: car1_1.width, height: car1_1.height },
      { src: car1_2.src, width: car1_2.width, height: car1_2.height },
      { src: car1_3.src, width: car1_3.width, height: car1_3.height },
      { src: car1_4.src, width: car1_4.width, height: car1_4.height }
    ]
  },
  {
    id: 3,
    name: "G 63",
    category: "Luxury",
    make: "Mercedes",
    imagePreview: "/cars/1/preview.webp",
    imageList: {
      src: car3_list.src,
      width: car3_list.width,
      height: car3_list.height
    },
    fromPrice: 500,
    "0to100": 5.3,
    maxSpeed: 272,
    enginePower: 353,
    availableColors: ["#000000"],
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    previewCar: true,
    gallery: [
      { src: car1_1.src, width: car1_1.width, height: car1_1.height },
      { src: car1_2.src, width: car1_2.width, height: car1_2.height },
      { src: car1_3.src, width: car1_3.width, height: car1_3.height },
      { src: car1_4.src, width: car1_4.width, height: car1_4.height }
    ]
  },
  {
    id: 4,
    name: "V Class",
    category: "Luxury",
    make: "Mercedes",
    imagePreview: "/cars/1/preview.webp",
    imageList: {
      src: car4_list.src,
      width: car4_list.width,
      height: car4_list.height
    },
    fromPrice: 500,
    "0to100": 5.3,
    maxSpeed: 272,
    enginePower: 353,
    availableColors: ["#000000"],
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    previewCar: true,
    gallery: [
      { src: car1_1.src, width: car1_1.width, height: car1_1.height },
      { src: car1_2.src, width: car1_2.width, height: car1_2.height },
      { src: car1_3.src, width: car1_3.width, height: car1_3.height },
      { src: car1_4.src, width: car1_4.width, height: car1_4.height }
    ]
  },
  {
    id: 5,
    name: "Range Rover Sport",
    category: "Luxury",
    make: "Land Rover",
    imagePreview: "/cars/1/preview.webp",
    imageList: {
      src: car5_list.src,
      width: car5_list.width,
      height: car5_list.height
    },
    fromPrice: 500,
    "0to100": 5.3,
    maxSpeed: 272,
    enginePower: 353,
    availableColors: ["#000000"],
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    previewCar: true,
    gallery: [
      { src: car1_1.src, width: car1_1.width, height: car1_1.height },
      { src: car1_2.src, width: car1_2.width, height: car1_2.height },
      { src: car1_3.src, width: car1_3.width, height: car1_3.height },
      { src: car1_4.src, width: car1_4.width, height: car1_4.height }
    ]
  },
  {
    id: 6,
    name: "Range Rover Defender",
    category: "Luxury",
    make: "Land Rover",
    imagePreview: "/cars/1/preview.webp",
    imageList: {
      src: car6_list.src,
      width: car6_list.width,
      height: car6_list.height
    },
    fromPrice: 500,
    "0to100": 5.3,
    maxSpeed: 272,
    enginePower: 353,
    availableColors: ["#000000"],
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    previewCar: true,
    gallery: [
      { src: car1_1.src, width: car1_1.width, height: car1_1.height },
      { src: car1_2.src, width: car1_2.width, height: car1_2.height },
      { src: car1_3.src, width: car1_3.width, height: car1_3.height },
      { src: car1_4.src, width: car1_4.width, height: car1_4.height }
    ]
  },
  {
    id: 7,
    name: "Q7",
    category: "Luxury",
    make: "Audi",
    imagePreview: "/cars/1/preview.webp",
    imageList: {
      src: car7_list.src,
      width: car7_list.width,
      height: car7_list.height
    },
    fromPrice: 500,
    "0to100": 5.3,
    maxSpeed: 272,
    enginePower: 353,
    availableColors: ["#000000"],
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    previewCar: true,
    gallery: [
      { src: car1_1.src, width: car1_1.width, height: car1_1.height },
      { src: car1_2.src, width: car1_2.width, height: car1_2.height },
      { src: car1_3.src, width: car1_3.width, height: car1_3.height },
      { src: car1_4.src, width: car1_4.width, height: car1_4.height }
    ]
  },
  {
    id: 8,
    name: "Portofino",
    category: "Luxury",
    make: "Ferrari",
    imagePreview: "/cars/1/preview.webp",
    imageList: {
      src: car8_list.src,
      width: car8_list.width,
      height: car8_list.height
    },
    fromPrice: 500,
    "0to100": 5.3,
    maxSpeed: 272,
    enginePower: 353,
    availableColors: ["#000000"],
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    previewCar: true,
    gallery: [
      { src: car1_1.src, width: car1_1.width, height: car1_1.height },
      { src: car1_2.src, width: car1_2.width, height: car1_2.height },
      { src: car1_3.src, width: car1_3.width, height: car1_3.height },
      { src: car1_4.src, width: car1_4.width, height: car1_4.height }
    ]
  },
  {
    id: 9,
    name: "Huracán Evo Spyder",
    category: "Luxury",
    make: "Lamborghini",
    imagePreview: "/cars/1/preview.webp",
    imageList: {
      src: car9_list.src,
      width: car9_list.width,
      height: car9_list.height
    },
    fromPrice: 500,
    "0to100": 5.3,
    maxSpeed: 272,
    enginePower: 353,
    availableColors: ["#000000"],
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    previewCar: true,
    gallery: [
      { src: car1_1.src, width: car1_1.width, height: car1_1.height },
      { src: car1_2.src, width: car1_2.width, height: car1_2.height },
      { src: car1_3.src, width: car1_3.width, height: car1_3.height },
      { src: car1_4.src, width: car1_4.width, height: car1_4.height }
    ]
  },
  {
    id: 10,
    name: "4S Cabriolet",
    category: "Luxury",
    make: "Porsche",
    imagePreview: "/cars/1/preview.webp",
    imageList: {
      src: car10_list.src,
      width: car10_list.width,
      height: car10_list.height
    },
    fromPrice: 500,
    "0to100": 5.3,
    maxSpeed: 272,
    enginePower: 353,
    availableColors: ["#000000"],
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    previewCar: true,
    gallery: [
      { src: car1_1.src, width: car1_1.width, height: car1_1.height },
      { src: car1_2.src, width: car1_2.width, height: car1_2.height },
      { src: car1_3.src, width: car1_3.width, height: car1_3.height },
      { src: car1_4.src, width: car1_4.width, height: car1_4.height }
    ]
  },
  {
    id: 11,
    name: "4 Series",
    category: "Luxury",
    make: "BMW",
    imagePreview: "/cars/1/preview.webp",
    imageList: {
      src: car11_list.src,
      width: car11_list.width,
      height: car11_list.height
    },
    fromPrice: 500,
    "0to100": 5.3,
    maxSpeed: 272,
    enginePower: 353,
    availableColors: ["#000000"],
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    previewCar: true,
    gallery: [
      { src: car1_1.src, width: car1_1.width, height: car1_1.height },
      { src: car1_2.src, width: car1_2.width, height: car1_2.height },
      { src: car1_3.src, width: car1_3.width, height: car1_3.height },
      { src: car1_4.src, width: car1_4.width, height: car1_4.height }
    ]
  }
];
