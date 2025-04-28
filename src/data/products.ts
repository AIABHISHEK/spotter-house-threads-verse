
import { Product } from '@/types';

export const productsData: Product[] = [
  {
    id: 1,
    name: "Classic Graphic Tee",
    description: "Our classic graphic t-shirt featuring original artwork by Spotter House designers. Made with 100% organic cotton for ultimate comfort and breathability.",
    price: 29.99,
    discount: 0,
    category: "Graphic Tees",
    tags: ["graphic", "classic", "unisex"],
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    ],
    colors: ["white", "black", "gray"],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    inStock: true,
    isNew: true,
    featured: true,
    rating: 4.8,
    reviews: 24
  },
  {
    id: 2,
    name: "Minimalist Logo T-Shirt",
    description: "A sleek, minimalist design featuring our subtle Spotter House logo. Perfect for casual everyday wear or layering.",
    price: 24.99,
    discount: 10,
    category: "Minimal Designs",
    tags: ["minimal", "logo", "unisex"],
    images: [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      "https://images.unsplash.com/photo-1583744946564-b52d01a7f418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    ],
    colors: ["black", "white", "navy"],
    sizes: ["xs", "s", "m", "l", "xl"],
    inStock: true,
    isNew: false,
    featured: true,
    rating: 4.5,
    reviews: 18
  },
  {
    id: 3,
    name: "Bold Statement Tee",
    description: "Make a statement with our bold typographic design. This eye-catching t-shirt is sure to turn heads and spark conversations.",
    price: 32.99,
    discount: 0,
    category: "Statement Pieces",
    tags: ["statement", "typography", "bold"],
    images: [
      "https://images.unsplash.com/photo-1583744946564-b52d01a7f418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80"
    ],
    colors: ["black", "red", "white"],
    sizes: ["s", "m", "l", "xl"],
    inStock: true,
    isNew: true,
    featured: false,
    rating: 4.7,
    reviews: 15
  },
  {
    id: 4,
    name: "Community Collab Tee",
    description: "Designed in collaboration with our creative community. Each purchase supports independent artists and designers.",
    price: 34.99,
    discount: 0,
    category: "Community Designed",
    tags: ["collaboration", "community", "limited-edition"],
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    colors: ["white", "gray", "black", "blue"],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    inStock: true,
    isNew: false,
    featured: true,
    rating: 4.9,
    reviews: 31
  },
  {
    id: 5,
    name: "Vintage Graphic Tee",
    description: "A vintage-inspired graphic tee with a worn-in look and feel. Super soft cotton blend for all-day comfort.",
    price: 27.99,
    discount: 15,
    category: "Graphic Tees",
    tags: ["vintage", "graphic", "retro"],
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    ],
    colors: ["navy", "burgundy", "forest-green"],
    sizes: ["s", "m", "l", "xl"],
    inStock: true,
    isNew: false,
    featured: false,
    rating: 4.6,
    reviews: 12
  },
  {
    id: 6,
    name: "Essential Plain Tee",
    description: "Our premium plain t-shirt is the perfect foundation for any outfit. Made with high-quality cotton for exceptional comfort and durability.",
    price: 19.99,
    discount: 0,
    category: "Minimal Designs",
    tags: ["essential", "plain", "basic"],
    images: [
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
    ],
    colors: ["white", "black", "gray", "navy", "olive"],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    inStock: true,
    isNew: false,
    featured: true,
    rating: 4.4,
    reviews: 45
  },
  {
    id: 7,
    name: "Artistic Collaboration Tee",
    description: "A unique design created in collaboration with renowned artist Jane Doe. Limited edition run featuring her signature abstract style.",
    price: 39.99,
    discount: 0,
    category: "Community Designed",
    tags: ["artist", "collaboration", "limited-edition"],
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    ],
    colors: ["white", "black"],
    sizes: ["s", "m", "l", "xl"],
    inStock: true,
    isNew: true,
    featured: true,
    rating: 5.0,
    reviews: 8
  },
  {
    id: 8,
    name: "Power Statement Tee",
    description: "Bold, empowering text makes this t-shirt the perfect choice for those who want to make a statement. High-quality screen printing on premium cotton.",
    price: 31.99,
    discount: 10,
    category: "Statement Pieces",
    tags: ["empowering", "statement", "typography"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
    ],
    colors: ["black", "white", "red"],
    sizes: ["xs", "s", "m", "l", "xl"],
    inStock: true,
    isNew: false,
    featured: false,
    rating: 4.7,
    reviews: 22
  }
];
