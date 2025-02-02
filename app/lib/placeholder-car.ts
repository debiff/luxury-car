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
import car13_1 from "@/public/cars/13/1.webp";
import car13_2 from "@/public/cars/13/2.webp";
import car13_3 from "@/public/cars/13/3.webp";
import car13_4 from "@/public/cars/13/4.webp";
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
import car12_list from "@/public/cars/12.png";
import car13_list from "@/public/cars/13.png";
import car14_list from "@/public/cars/14.png";
import car15_list from "@/public/cars/15.png";
import car16_list from "@/public/cars/16.png";
import car17_list from "@/public/cars/17.png";
import car18_list from "@/public/cars/18.png";
import car19_list from "@/public/cars/19.png";
import car20_list from "@/public/cars/20.png";
import React from "react";
import { Description as car1_description } from "@/public/cars/1/description";
import { Description as car2_description } from "@/public/cars/2/description";
import { Description as car3_description } from "@/public/cars/3/description";
import { Description as car4_description } from "@/public/cars/4/description";
import { Description as car5_description } from "@/public/cars/5/description";
import { Description as car6_description } from "@/public/cars/6/description";
import { Description as car7_description } from "@/public/cars/7/description";
import { Description as car8_description } from "@/public/cars/8/description";
import { Description as car9_description } from "@/public/cars/9/description";
import { Description as car10_description } from "@/public/cars/10/description";
import { Description as car11_description } from "@/public/cars/11/description";
import { Description as car12_description } from "@/public/cars/12/description";
import { Description as car13_description } from "@/public/cars/13/description";

type CarImage = { src: string; width: number; height: number };
export const make = [
  "Abarth",
  "Porsche",
  "Mercedes",
  "Land Rover",
  "Audi",
  "Ferrari",
  "Lamborghini",
  "BMW",
  "Ford"
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
  category: ReadonlyArray<Category>;
  make: Make;
  imageList: CarImage;
  "0to100": number;
  maxSpeed: number;
  enginePower: number;
  availableColors: ReadonlyArray<{ label: string; value: string }>;
  description?: React.JSX.Element;
  gallery: Array<CarImage>;
  prices: {
    1_3: number;
    7_14: number;
  };
  displacement: number;
  transmission: "automatic" | "manual";
  seat: number;
  tank: number;
};

export const Cars: ReadonlyArray<Car> = [
  {
    id: 1,
    name: "Panamera",
    make: "Porsche",
    category: ["Luxury", "Executive"],
    imageList: {
      src: car1_list.src,
      width: car1_list.width,
      height: car1_list.height
    },
    availableColors: [{ label: "Black", value: "#000000" }],
    description: car1_description,
    gallery: [
      { src: car1_1.src, width: car1_1.width, height: car1_1.height },
      { src: car1_2.src, width: car1_2.width, height: car1_2.height },
      { src: car1_3.src, width: car1_3.width, height: car1_3.height },
      { src: car1_4.src, width: car1_4.width, height: car1_4.height }
    ],
    prices: {
      1_3: 500,
      7_14: 400
    },
    "0to100": 3.1,
    maxSpeed: 315,
    enginePower: 630,
    displacement: 3996,
    transmission: "automatic",
    seat: 4,
    tank: 90
  },
  {
    id: 2,
    name: "SL 63",
    make: "Mercedes",
    category: ["Luxury", "Sport", "Supercar"],
    imageList: {
      src: car2_list.src,
      width: car2_list.width,
      height: car2_list.height
    },

    availableColors: [{ label: "Black", value: "#000000" }],
    description: car2_description,
    gallery: [
      { src: car2_1.src, width: car2_1.width, height: car2_1.height },
      { src: car2_2.src, width: car2_2.width, height: car2_2.height },
      { src: car2_3.src, width: car2_3.width, height: car2_3.height },
      { src: car2_4.src, width: car2_4.width, height: car2_4.height }
    ],
    prices: {
      1_3: 900,
      7_14: 750
    },
    "0to100": 3.6,
    maxSpeed: 315,
    enginePower: 585,
    displacement: 3982,
    transmission: "automatic",
    seat: 2,
    tank: 70
  },
  {
    id: 3,
    name: "G 4x4 63",
    make: "Mercedes",
    category: ["Luxury", "Suv"],
    imageList: {
      src: car3_list.src,
      width: car3_list.width,
      height: car3_list.height
    },
    availableColors: [{ label: "Black", value: "#000000" }],
    description: car3_description,
    gallery: [
      { src: car3_1.src, width: car3_1.width, height: car3_1.height },
      { src: car3_2.src, width: car3_2.width, height: car3_2.height },
      { src: car3_3.src, width: car3_3.width, height: car3_3.height },
      { src: car3_4.src, width: car3_4.width, height: car3_4.height }
    ],
    prices: {
      1_3: 1800,
      7_14: 1400
    },
    "0to100": 4.5,
    maxSpeed: 220,
    enginePower: 585,
    displacement: 3982,
    transmission: "automatic",
    seat: 5,
    tank: 100
  },
  {
    id: 4,
    name: "G 63",
    make: "Mercedes",
    category: ["Luxury", "Suv"],
    imageList: {
      src: car4_list.src,
      width: car4_list.width,
      height: car4_list.height
    },
    availableColors: [{ label: "Black", value: "#000000" }],
    description: car4_description,
    gallery: [
      { src: car4_1.src, width: car4_1.width, height: car4_1.height },
      { src: car4_2.src, width: car4_2.width, height: car4_2.height },
      { src: car4_3.src, width: car4_3.width, height: car4_3.height },
      { src: car4_4.src, width: car4_4.width, height: car4_4.height }
    ],
    prices: {
      1_3: 900,
      7_14: 800
    },
    "0to100": 4.5,
    maxSpeed: 220,
    enginePower: 585,
    displacement: 3982,
    transmission: "automatic",
    seat: 5,
    tank: 100
  },
  {
    // https://www.alvolante.it/primo_contatto/mercedes-v-300-d
    id: 5,
    name: "V Class",
    make: "Mercedes",
    category: ["Van", "Executive"],
    imageList: {
      src: car5_list.src,
      width: car5_list.width,
      height: car5_list.height
    },
    availableColors: [{ label: "Black", value: "#000000" }],
    description: car5_description,
    gallery: [
      { src: car5_1.src, width: car5_1.width, height: car5_1.height },
      { src: car5_2.src, width: car5_2.width, height: car5_2.height },
      { src: car5_3.src, width: car5_3.width, height: car5_3.height },
      { src: car5_4.src, width: car5_4.width, height: car5_4.height }
    ],
    prices: {
      1_3: 350,
      7_14: 250
    },
    "0to100": 7.8,
    maxSpeed: 205,
    enginePower: 239,
    displacement: 2987,
    transmission: "automatic",
    seat: 8,
    tank: 70
  },
  {
    // https://www.quattroruote.it/auto/land-rover/rr-sport-2-serie/range-rover-sport-30-sdv6-249-cv-s-125149201806
    id: 6,
    name: "Range Rover Sport",
    make: "Land Rover",
    category: ["Suv", "Sport"],
    imageList: {
      src: car6_list.src,
      width: car6_list.width,
      height: car6_list.height
    },
    availableColors: [{ label: "Black", value: "#000000" }],
    description: car6_description,
    gallery: [
      { src: car6_1.src, width: car6_1.width, height: car6_1.height },
      { src: car6_2.src, width: car6_2.width, height: car6_2.height },
      { src: car6_3.src, width: car6_3.width, height: car6_3.height },
      { src: car6_4.src, width: car6_4.width, height: car6_4.height }
    ],
    prices: {
      1_3: 550,
      7_14: 380
    },
    "0to100": 4.5,
    maxSpeed: 280,
    enginePower: 530,
    displacement: 4395,
    transmission: "automatic",
    seat: 5,
    tank: 90
  },
  {
    // https://www.alvolante.it/primo_contatto/land-rover-defender-90-p400
    id: 7,
    name: "Defender",
    make: "Land Rover",
    category: ["Suv", "Luxury"],
    imageList: {
      src: car7_list.src,
      width: car7_list.width,
      height: car7_list.height
    },
    availableColors: [{ label: "Black", value: "#000000" }],
    description: car7_description,
    gallery: [
      { src: car7_1.src, width: car7_1.width, height: car7_1.height },
      { src: car7_2.src, width: car7_2.width, height: car7_2.height },
      { src: car7_3.src, width: car7_3.width, height: car7_3.height },
      { src: car7_4.src, width: car7_4.width, height: car7_4.height }
    ],
    prices: {
      1_3: 550,
      7_14: 380
    },
    "0to100": 5.2,
    maxSpeed: 240,
    enginePower: 400,
    displacement: 2996,
    transmission: "automatic",
    seat: 5,
    tank: 90
  },
  {
    // https://www.quattroruote.it/auto/audi/q7-2-serie/q7-30-tdi-272-cv-quattro-tiptronic-108820201504
    id: 8,
    name: "Q7",
    make: "Audi",
    category: ["Suv", "Sport"],
    imageList: {
      src: car8_list.src,
      width: car8_list.width,
      height: car8_list.height
    },
    availableColors: [{ label: "Black", value: "#000000" }],
    description: car8_description,
    gallery: [
      { src: car8_1.src, width: car8_1.width, height: car8_1.height },
      { src: car8_2.src, width: car8_2.width, height: car8_2.height },
      { src: car8_3.src, width: car8_3.width, height: car8_3.height },
      { src: car8_4.src, width: car8_4.width, height: car8_4.height }
    ],
    prices: {
      1_3: 360,
      7_14: 300
    },
    "0to100": 5.9,
    maxSpeed: 250,
    enginePower: 340,
    displacement: 2995,
    transmission: "automatic",
    seat: 7,
    tank: 85
  },
  {
    // https://listino.motori24.ilsole24ore.com/auto-prezzi/ferrari/portofino-m/portofino-m/
    id: 9,
    name: "Portofino",
    make: "Ferrari",
    category: ["Supercar", "Sport", "Luxury"],
    imageList: {
      src: car9_list.src,
      width: car9_list.width,
      height: car9_list.height
    },
    availableColors: [{ label: "Black", value: "#000000" }],
    description: car9_description,
    gallery: [
      { src: car9_1.src, width: car9_1.width, height: car9_1.height },
      { src: car9_2.src, width: car9_2.width, height: car9_2.height },
      { src: car9_3.src, width: car9_3.width, height: car9_3.height },
      { src: car9_4.src, width: car9_4.width, height: car9_4.height }
    ],
    prices: {
      1_3: 1250,
      7_14: 880
    },
    "0to100": 3.5,
    maxSpeed: 320,
    enginePower: 620,
    displacement: 3855,
    transmission: "automatic",
    seat: 4,
    tank: 80
  },
  {
    // https://www.lamborghini.com/it-en/modelli/huracan/huracan-evo-spyder
    id: 10,
    name: "Huracán Evo Spyder",
    make: "Lamborghini",
    category: ["Supercar", "Sport", "Luxury"],
    imageList: {
      src: car10_list.src,
      width: car10_list.width,
      height: car10_list.height
    },
    availableColors: [{ label: "White", value: "#FFF" }],
    description: car10_description,
    gallery: [
      { src: car10_1.src, width: car10_1.width, height: car10_1.height },
      { src: car10_2.src, width: car10_2.width, height: car10_2.height },
      { src: car10_3.src, width: car10_3.width, height: car10_3.height },
      { src: car10_4.src, width: car10_4.width, height: car10_4.height }
    ],
    prices: {
      1_3: 1600,
      7_14: 1200
    },
    "0to100": 3.1,
    maxSpeed: 325,
    enginePower: 640,
    displacement: 5204,
    transmission: "automatic",
    seat: 2,
    tank: 83
  },
  {
    // https://www.porsche.com/italy/models/911/911-models/carrera-4s-cabriolet/
    id: 11,
    name: "992 4S Cabriolet",
    make: "Porsche",
    category: ["Sport", "Luxury"],
    imageList: {
      src: car11_list.src,
      width: car11_list.width,
      height: car11_list.height
    },
    availableColors: [{ label: "Blue", value: "#00194b" }],
    description: car11_description,
    gallery: [
      { src: car11_1.src, width: car11_1.width, height: car11_1.height },
      { src: car11_2.src, width: car11_2.width, height: car11_2.height },
      { src: car11_3.src, width: car11_3.width, height: car11_3.height },
      { src: car11_4.src, width: car11_4.width, height: car11_4.height }
    ],
    prices: {
      1_3: 1000,
      7_14: 650
    },
    "0to100": 3.6,
    maxSpeed: 304,
    enginePower: 450,
    displacement: 2981,
    transmission: "automatic",
    seat: 4,
    tank: 67
  },
  {
    id: 12,
    name: "4 Series",
    make: "BMW",
    category: ["Sport", "Executive"],
    imageList: {
      src: car12_list.src,
      width: car12_list.width,
      height: car12_list.height
    },

    availableColors: [{ label: "Black", value: "#000000" }],
    description: car12_description,
    gallery: [
      { src: car12_1.src, width: car12_1.width, height: car12_1.height },
      { src: car12_2.src, width: car12_2.width, height: car12_2.height },
      { src: car12_3.src, width: car12_3.width, height: car12_3.height },
      { src: car12_4.src, width: car12_4.width, height: car12_4.height }
    ],
    prices: {
      1_3: 360,
      7_14: 300
    },
    "0to100": 4.3,
    maxSpeed: 250,
    enginePower: 374,
    displacement: 2998,
    transmission: "automatic",
    seat: 4,
    tank: 59
  },
  {
    id: 13,
    name: "Urus",
    make: "Lamborghini",
    category: ["Suv", "Supercar", "Luxury"],
    imageList: {
      src: car13_list.src,
      width: car13_list.width,
      height: car13_list.height
    },
    availableColors: [{ label: "Black", value: "#000000" }],
    description: car13_description,
    gallery: [
      { src: car13_1.src, width: car13_1.width, height: car13_1.height },
      { src: car13_2.src, width: car13_2.width, height: car13_2.height },
      { src: car13_3.src, width: car13_3.width, height: car13_3.height },
      { src: car13_4.src, width: car13_4.width, height: car13_4.height }
    ],
    prices: {
      1_3: 1800,
      7_14: 1400
    },
    "0to100": 3.6,
    maxSpeed: 305,
    enginePower: 650,
    displacement: 3996,
    transmission: "automatic",
    seat: 5,
    tank: 85
  },
  {
    id: 14,
    name: "SF90",
    make: "Ferrari",
    category: ["Supercar", "Sport", "Luxury"],
    imageList: {
      src: car14_list.src,
      width: car14_list.width,
      height: car14_list.height
    },
    availableColors: [{ label: "Black", value: "#000000" }],
    description: car13_description,
    gallery: [
      { src: car13_1.src, width: car13_1.width, height: car13_1.height },
      { src: car13_2.src, width: car13_2.width, height: car13_2.height },
      { src: car13_3.src, width: car13_3.width, height: car13_3.height },
      { src: car13_4.src, width: car13_4.width, height: car13_4.height }
    ],
    prices: {
      1_3: 3200,
      7_14: 2800
    },
    "0to100": 2.5,
    maxSpeed: 340,
    enginePower: 1000,
    displacement: 3990,
    transmission: "automatic",
    seat: 2,
    tank: 68
  },
  {
    id: 15,
    name: "5 Series",
    make: "BMW",
    category: ["Executive", "Sport"],
    imageList: {
      src: car15_list.src,
      width: car15_list.width,
      height: car15_list.height
    },
    availableColors: [{ label: "Black", value: "#000000" }],
    description: car13_description,
    gallery: [
      { src: car13_1.src, width: car13_1.width, height: car13_1.height },
      { src: car13_2.src, width: car13_2.width, height: car13_2.height },
      { src: car13_3.src, width: car13_3.width, height: car13_3.height },
      { src: car13_4.src, width: car13_4.width, height: car13_4.height }
    ],
    prices: {
      1_3: 450,
      7_14: 350
    },
    "0to100": 5.2,
    maxSpeed: 250,
    enginePower: 340,
    displacement: 2998,
    transmission: "automatic",
    seat: 5,
    tank: 68
  },
  {
    id: 16,
    name: "Transit 9 places",
    make: "Ford",
    category: ["Van", "Executive"],
    imageList: {
      src: car16_list.src,
      width: car16_list.width,
      height: car16_list.height
    },
    availableColors: [{ label: "Black", value: "#000000" }],
    description: car13_description,
    gallery: [
      { src: car13_1.src, width: car13_1.width, height: car13_1.height },
      { src: car13_2.src, width: car13_2.width, height: car13_2.height },
      { src: car13_3.src, width: car13_3.width, height: car13_3.height },
      { src: car13_4.src, width: car13_4.width, height: car13_4.height }
    ],
    prices: {
      1_3: 250,
      7_14: 200
    },
    "0to100": 14.3,
    maxSpeed: 165,
    enginePower: 170,
    displacement: 1995,
    transmission: "manual",
    seat: 9,
    tank: 70
  },
  {
    id: 17,
    name: "Rs 6",
    make: "Audi",
    category: ["Sport", "Luxury"],
    imageList: {
      src: car17_list.src,
      width: car17_list.width,
      height: car17_list.height
    },
    availableColors: [{ label: "Black", value: "#000000" }],
    description: car13_description,
    gallery: [
      { src: car13_1.src, width: car13_1.width, height: car13_1.height },
      { src: car13_2.src, width: car13_2.width, height: car13_2.height },
      { src: car13_3.src, width: car13_3.width, height: car13_3.height },
      { src: car13_4.src, width: car13_4.width, height: car13_4.height }
    ],
    prices: {
      1_3: 900,
      7_14: 750
    },
    "0to100": 3.6,
    maxSpeed: 305,
    enginePower: 600,
    displacement: 3996,
    transmission: "automatic",
    seat: 5,
    tank: 73
  },
  {
    id: 18,
    name: "595 Cabrio",
    make: "Abarth",
    category: ["Sport"],
    imageList: {
      src: car18_list.src,
      width: car18_list.width,
      height: car18_list.height
    },
    availableColors: [{ label: "Black", value: "#000000" }],
    description: car13_description,
    gallery: [
      { src: car13_1.src, width: car13_1.width, height: car13_1.height },
      { src: car13_2.src, width: car13_2.width, height: car13_2.height },
      { src: car13_3.src, width: car13_3.width, height: car13_3.height },
      { src: car13_4.src, width: car13_4.width, height: car13_4.height }
    ],
    prices: {
      1_3: 300,
      7_14: 160
    },
    "0to100": 7.3,
    maxSpeed: 225,
    enginePower: 165,
    displacement: 1368,
    transmission: "manual",
    seat: 4,
    tank: 35
  },
  {
    id: 19,
    name: "GLE",
    make: "Mercedes",
    category: ["Suv", "Executive"],
    imageList: {
      src: car19_list.src,
      width: car19_list.width,
      height: car19_list.height
    },
    availableColors: [{ label: "Black", value: "#000000" }],
    description: car13_description,
    gallery: [
      { src: car13_1.src, width: car13_1.width, height: car13_1.height },
      { src: car13_2.src, width: car13_2.width, height: car13_2.height },
      { src: car13_3.src, width: car13_3.width, height: car13_3.height },
      { src: car13_4.src, width: car13_4.width, height: car13_4.height }
    ],
    prices: {
      1_3: 500,
      7_14: 300
    },
    "0to100": 5.7,
    maxSpeed: 250,
    enginePower: 367,
    displacement: 2999,
    transmission: "automatic",
    seat: 5,
    tank: 85
  },
  {
    id: 20,
    name: "F8 Spider",
    make: "Ferrari",
    category: ["Supercar", "Sport", "Luxury"],
    imageList: {
      src: car20_list.src,
      width: car20_list.width,
      height: car20_list.height
    },
    availableColors: [{ label: "Black", value: "#000000" }],
    description: car13_description,
    gallery: [
      { src: car13_1.src, width: car13_1.width, height: car13_1.height },
      { src: car13_2.src, width: car13_2.width, height: car13_2.height },
      { src: car13_3.src, width: car13_3.width, height: car13_3.height },
      { src: car13_4.src, width: car13_4.width, height: car13_4.height }
    ],
    prices: {
      1_3: 1600,
      7_14: 1200
    },
    "0to100": 2.9,
    maxSpeed: 340,
    enginePower: 720,
    displacement: 3902,
    transmission: "automatic",
    seat: 2,
    tank: 78
  }
];
