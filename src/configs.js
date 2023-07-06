export const STABLEDIFFUSION_KEY = process.env.STABLEDIFFUSION_KEY
export const SERVER = process.env.SERVER
export const dimensions = [
  {width:'640', height:'480'},
  {width:'800', height:'600'},
  {width:'800', height:'800'},
  {width:'900', height:'600'},
  {width:'1024', height:'1024'},
]

export const packages = [
  {
    name: "Starter",
    services: [
      "1,000 fast generations per month.",
      "No slow generations.",
      "2 parallel fast generations.",
      "Commercial license (solo)",
      "Images are public.",
    ],
    price: 8,
  },
  {
    name: "Pro",
    services: [
      "1,000 fast generations per month.",
      "No slow generations.",
      "2 parallel fast generations.",
      "Commercial license (solo)",
      "Images are public.",
    ],
    price: 15,
  },
  {
    name: "Max",
    services: [
      "1,000 fast generations per month.",
      "No slow generations.",
      "2 parallel fast generations.",
      "Commercial license (solo)",
      "Images are public.",
    ],
    price: 25,
  },
];