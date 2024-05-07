import car1_1 from "@/public/cars/1/1.webp";
import car1_2 from "@/public/cars/1/2.webp";
import car1_3 from "@/public/cars/1/3.webp";
import car1_4 from "@/public/cars/1/4.webp";
import car2_1 from "@/public/cars/2/1.webp";
import car2_2 from "@/public/cars/2/2.webp";
import car2_3 from "@/public/cars/2/3.webp";
import car2_4 from "@/public/cars/2/4.webp";
import car3_1 from "@/public/cars/3/1.webp";
import car3_2 from "@/public/cars/3/2.webp";
import car3_3 from "@/public/cars/3/3.webp";
import car3_4 from "@/public/cars/3/4.webp";
import car4_1 from "@/public/cars/4/1.webp";
import car4_2 from "@/public/cars/4/2.webp";
import car4_3 from "@/public/cars/4/3.webp";
import car4_4 from "@/public/cars/4/4.webp";
import car5_1 from "@/public/cars/5/1.webp";
import car5_2 from "@/public/cars/5/2.webp";
import car5_3 from "@/public/cars/5/3.webp";
import car5_4 from "@/public/cars/5/4.webp";
import car6_1 from "@/public/cars/6/1.webp";
import car6_2 from "@/public/cars/6/2.webp";
import car6_3 from "@/public/cars/6/3.webp";
import car6_4 from "@/public/cars/6/4.webp";
import car7_1 from "@/public/cars/7/1.webp";
import car7_2 from "@/public/cars/7/2.webp";
import car7_3 from "@/public/cars/7/3.webp";
import car7_4 from "@/public/cars/7/4.webp";
import car8_1 from "@/public/cars/8/1.webp";
import car8_2 from "@/public/cars/8/2.webp";
import car8_3 from "@/public/cars/8/3.webp";
import car8_4 from "@/public/cars/8/4.webp";
import car9_1 from "@/public/cars/9/1.webp";
import car9_2 from "@/public/cars/9/2.webp";
import car9_3 from "@/public/cars/9/3.webp";
import car9_4 from "@/public/cars/9/4.webp";
import car10_1 from "@/public/cars/10/1.webp";
import car10_2 from "@/public/cars/10/2.webp";
import car10_3 from "@/public/cars/10/3.webp";
import car10_4 from "@/public/cars/10/4.webp";
import car11_1 from "@/public/cars/11/1.webp";
import car11_2 from "@/public/cars/11/2.webp";
import car11_3 from "@/public/cars/11/3.webp";
import car11_4 from "@/public/cars/11/4.webp";
import car12_1 from "@/public/cars/12/1.webp";
import car12_2 from "@/public/cars/12/2.webp";
import car12_3 from "@/public/cars/12/3.webp";
import car12_4 from "@/public/cars/12/4.webp";
import car1_list from "@/public/cars/1.png";
import car2_list from "@/public/cars/2.png";
import car3_list from "@/public/cars/3.png";
import car4_list from "@/public/cars/5.png";
import car5_list from "@/public/cars/6.png";
import car6_list from "@/public/cars/7.png";
import car7_list from "@/public/cars/8.png";
import car8_list from "@/public/cars/8.png";
import car9_list from "@/public/cars/9.png";
import car10_list from "@/public/cars/10.png";
import car11_list from "@/public/cars/11.png";
import car12_list from "@/public/cars/12.png";
import React from "react";
import { Description } from "@/public/cars/2/description";

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
export const category = [
  "Luxury",
  "Sport",
  "Suv",
  "Supercar",
  "Van",
  "Executive"
] as const;
export type Category = (typeof category)[number];
export type Car = {
  id: number;
  name: string;
  category: Category;
  make: Make;
  imageList: CarImage;
  fromPrice: number;
  "0to100": number;
  maxSpeed: number;
  enginePower: number;
  availableColors: ReadonlyArray<string>;
  descriptionShort: string;
  description?: React.JSX.Element;
  gallery: Array<CarImage>;
};

export const Cars: ReadonlyArray<Car> = [
  {
    id: 1,
    name: "Panamera",
    make: "Porsche",
    category: "Luxury",
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
    gallery: [
      { src: car1_1.src, width: car1_1.width, height: car1_1.height },
      { src: car1_2.src, width: car1_2.width, height: car1_2.height },
      { src: car1_3.src, width: car1_3.width, height: car1_3.height },
      { src: car1_4.src, width: car1_4.width, height: car1_4.height }
    ]
  },
  {
    id: 2,
    name: "SL 63",
    make: "Mercedes",
    category: "Luxury",
    imageList: {
      src: car2_list.src,
      width: car2_list.width,
      height: car2_list.height
    },
    fromPrice: 500,
    "0to100": 3.6,
    maxSpeed: 315,
    enginePower: 585,
    availableColors: ["#000000"],
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    description: Description,

    gallery: [
      { src: car2_1.src, width: car2_1.width, height: car2_1.height },
      { src: car2_2.src, width: car2_2.width, height: car2_2.height },
      { src: car2_3.src, width: car2_3.width, height: car2_3.height },
      { src: car2_4.src, width: car2_4.width, height: car2_4.height }
    ]
  },
  {
    id: 3,
    name: "G 4x4 63",
    make: "Mercedes",
    category: "Luxury",
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
    gallery: [
      { src: car3_1.src, width: car3_1.width, height: car3_1.height },
      { src: car3_2.src, width: car3_2.width, height: car3_2.height },
      { src: car3_3.src, width: car3_3.width, height: car3_3.height },
      { src: car3_4.src, width: car3_4.width, height: car3_4.height }
    ]
  },
  {
    id: 4,
    name: "G 63",
    make: "Mercedes",
    category: "Luxury",
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
    gallery: [
      { src: car4_1.src, width: car4_1.width, height: car4_1.height },
      { src: car4_2.src, width: car4_2.width, height: car4_2.height },
      { src: car4_3.src, width: car4_3.width, height: car4_3.height },
      { src: car4_4.src, width: car4_4.width, height: car4_4.height }
    ]
  },
  {
    id: 5,
    name: "V Class",
    make: "Mercedes",
    category: "Luxury",
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
    gallery: [
      { src: car5_1.src, width: car5_1.width, height: car5_1.height },
      { src: car5_2.src, width: car5_2.width, height: car5_2.height },
      { src: car5_3.src, width: car5_3.width, height: car5_3.height },
      { src: car5_4.src, width: car5_4.width, height: car5_4.height }
    ]
  },
  {
    id: 6,
    name: "Range Rover Sport",
    make: "Land Rover",
    category: "Luxury",
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
    gallery: [
      { src: car6_1.src, width: car6_1.width, height: car6_1.height },
      { src: car6_2.src, width: car6_2.width, height: car6_2.height },
      { src: car6_3.src, width: car6_3.width, height: car6_3.height },
      { src: car6_4.src, width: car6_4.width, height: car6_4.height }
    ]
  },
  {
    id: 7,
    name: "Range Rover Defender",
    make: "Land Rover",
    category: "Luxury",
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
    gallery: [
      { src: car7_1.src, width: car7_1.width, height: car7_1.height },
      { src: car7_2.src, width: car7_2.width, height: car7_2.height },
      { src: car7_3.src, width: car7_3.width, height: car7_3.height },
      { src: car7_4.src, width: car7_4.width, height: car7_4.height }
    ]
  },
  {
    id: 8,
    name: "Q7",
    make: "Audi",
    category: "Luxury",
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
    gallery: [
      { src: car8_1.src, width: car8_1.width, height: car8_1.height },
      { src: car8_2.src, width: car8_2.width, height: car8_2.height },
      { src: car8_3.src, width: car8_3.width, height: car8_3.height },
      { src: car8_4.src, width: car8_4.width, height: car8_4.height }
    ]
  },
  {
    id: 9,
    name: "Portofino",
    make: "Ferrari",
    category: "Luxury",
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
    gallery: [
      { src: car9_1.src, width: car9_1.width, height: car9_1.height },
      { src: car9_2.src, width: car9_2.width, height: car9_2.height },
      { src: car9_3.src, width: car9_3.width, height: car9_3.height },
      { src: car9_4.src, width: car9_4.width, height: car9_4.height }
    ]
  },
  {
    id: 10,
    name: "Huracán Evo Spyder",
    make: "Lamborghini",
    category: "Luxury",
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
    gallery: [
      { src: car10_1.src, width: car10_1.width, height: car10_1.height },
      { src: car10_2.src, width: car10_2.width, height: car10_2.height },
      { src: car10_3.src, width: car10_3.width, height: car10_3.height },
      { src: car10_4.src, width: car10_4.width, height: car10_4.height }
    ]
  },
  {
    id: 11,
    name: "992 4S Cabriolet",
    make: "Porsche",
    category: "Luxury",
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
    gallery: [
      { src: car11_1.src, width: car11_1.width, height: car11_1.height },
      { src: car11_2.src, width: car11_2.width, height: car11_2.height },
      { src: car11_3.src, width: car11_3.width, height: car11_3.height },
      { src: car11_4.src, width: car11_4.width, height: car11_4.height }
    ]
  },
  {
    id: 12,
    name: "4 Series",
    make: "BMW",
    category: "Luxury",
    imageList: {
      src: car12_list.src,
      width: car12_list.width,
      height: car12_list.height
    },
    fromPrice: 500,
    "0to100": 5.3,
    maxSpeed: 272,
    enginePower: 353,
    availableColors: ["#000000"],
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    gallery: [
      { src: car12_1.src, width: car12_1.width, height: car12_1.height },
      { src: car12_2.src, width: car12_2.width, height: car12_2.height },
      { src: car12_3.src, width: car12_3.width, height: car12_3.height },
      { src: car12_4.src, width: car12_4.width, height: car12_4.height }
    ]
  }
];
