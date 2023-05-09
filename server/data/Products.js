const products = [
  {
    name: "Coca tươi thượng hang",
    image: "/images/9.jpg",
    description:
      "cocacola cho nguoi co nhieu tam trang",
    price: 56.000,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,
  },
  {
    name: "Bánh mì pate ",
    image: "/images/8.jpg",
    description:
      "banh mi pate cho nguoi co nhieu tam trang",
    price: 39.000,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    name: "Bún Giò Heo",
    image: "/images/7.jpg",
    description:
      "Bún cho nguoi co nhieu tam trang",
    price: 89.400,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "Đậu lướt ván",
    image: "/images/5.jpg",
    description:
      "Đậu rán cho nguoi co nhieu tam trang",
    price: 59.000,
    countInStock: 10,
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Vịt quay",
    image: "/images/4.jpg",
    description:
      "Bvịt quay cho nguoi co nhieu tam trang",
    price: 92.000,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,
  },
  {
    name: "Heo Quay",
    image: "/images/3.jpg",
    description:
      "heo quay cho nguoi co nhieu tam trang",
    price: 39.000,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    name: "Cá hấp",
    image: "/images/2.jpg",
    description:
      "cá hấp cho nguoi co nhieu tam trang",
    price: 49.000,
    countInStock: 7,
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Tôm chiên",
    image: "/images/1.jpg",
    description:
      "Tôm chiên cho nguoi co nhieu tam trang",
    price: 69.000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Tôm chiên",
    image: "/images/1.jpg",
    description:
      "Tôm chiên cho nguoi co nhieu tam trang",
    price: 69.000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Tôm chiên",
    image: "/images/1.jpg",
    description:
      "Tôm chiên cho nguoi co nhieu tam trang",
    price: 69.000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Tôm chiên",
    image: "/images/1.jpg",
    description:
      "Tôm chiên cho nguoi co nhieu tam trang",
    price: 69.000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Tôm chiên",
    image: "/images/1.jpg",
    description:
      "Tôm chiên cho nguoi co nhieu tam trang",
    price: 69.000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Tôm chiên",
    image: "/images/1.jpg",
    description:
      "Tôm chiên cho nguoi co nhieu tam trang",
    price: 69.000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Tôm chiên",
    image: "/images/1.jpg",
    description:
      "Tôm chiên cho nguoi co nhieu tam trang",
    price: 69.000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Tôm chiên",
    image: "/images/1.jpg",
    description:
      "Tôm chiên cho nguoi co nhieu tam trang",
    price: 69.000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Tôm chiên",
    image: "/images/1.jpg",
    description:
      "Tôm chiên cho nguoi co nhieu tam trang",
    price: 69.000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Tôm chiên",
    image: "/images/1.jpg",
    description:
      "Tôm chiên cho nguoi co nhieu tam trang",
    price: 69.000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Tôm chiên",
    image: "/images/1.jpg",
    description:
      "Tôm chiên cho nguoi co nhieu tam trang",
    price: 69.000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Tôm chiên",
    image: "/images/1.jpg",
    description:
      "Tôm chiên cho nguoi co nhieu tam trang",
    price: 69.000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Tôm chiên",
    image: "/images/1.jpg",
    description:
      "Tôm chiên cho nguoi co nhieu tam trang",
    price: 69.000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Tôm chiên",
    image: "/images/1.jpg",
    description:
      "Tôm chiên cho nguoi co nhieu tam trang",
    price: 69.000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Tôm chiên",
    image: "/images/1.jpg",
    description:
      "Tôm chiên cho nguoi co nhieu tam trang",
    price: 69.000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Tôm chiên",
    image: "/images/1.jpg",
    description:
      "Tôm chiên cho nguoi co nhieu tam trang",
    price: 69.000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Tôm chiên",
    image: "/images/1.jpg",
    description:
      "Tôm chiên cho nguoi co nhieu tam trang",
    price: 69.000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
];

export default products;
