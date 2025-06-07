import { useEffect, useState } from "react";
import axios from "axios";
import ProductsProvider from "./ProductsProvider";

const GetProducts = ({ children }) => {
  const [cardsData, setcardsData] = useState(null);
  const [pushProduct, setpushProduct] = useState([]);
  const [signelProduct, setsignelProduct] = useState();
  const [Search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  ////////////////SelectorStates\\\\\\\\\\\\\\\
  const [Quantityvalue, setQuantityvalue] = useState("1");
  const [buttonText, setButtonText] = useState("Add to Cart");
  const [addedToCart, setAddedToCart] = useState(false);
  const [finalPrice, setfinalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  /////////////////loginpage\\\\\\\\\\\\\\\\\\\
  const [Users, setUsers] = useState(null);
  const [render, setrender] = useState(1);
  const [isAdmin, setisAdmin] = useState(false);
  const [NameAdmin, setNameAdmin] = useState("");

  const getProduct = async () => {
    try {
      const fetchProducts = await fetch(
        `https://amazondata-8al0.onrender.com/product`
      );
      const response = await fetchProducts.json();
      setcardsData(response);
    } finally {
    }
  };
  const getUsers = async () => {
    try {
      const users = axios
        .get(`https://amazondata-8al0.onrender.com/Users`)
        .then((response) => setUsers(response?.data));
    } finally {
    }
  };
  const findProduct = cardsData?.find((find) => find.name == signelProduct);

  //////////////////GET IP\\\\\\\\\\\\\\\
  const fetchLocation = async () => {
    try {
      await axios
        .get("https://ipapi.co/json/")
        .then((response) => setLocation(response?.data?.country_name));
    } finally {
    }
  };

  useEffect(() => {
    getProduct();
    getUsers();
    fetchLocation();
  }, []);

  useEffect(() => {
    getProduct();
    getUsers();
  }, [render]);
  //////////میدونم شلوغه XD\\\\\\\\\\
  return (
    <ProductsProvider.Provider
      value={{
        cardsData,
        Users,
        setsignelProduct,
        pushProduct,
        setpushProduct,
        findProduct,
        totalPrice,
        setTotalPrice,
        totalQuantity,
        setTotalQuantity,
        addedToCart,
        setAddedToCart,
        Quantityvalue,
        setQuantityvalue,
        buttonText,
        setButtonText,
        finalPrice,
        setfinalPrice,
        Search,
        setSearch,
        setrender,
        isAdmin,
        setisAdmin,
        NameAdmin,
        setNameAdmin,
        location,
      }}
    >
      {children}
    </ProductsProvider.Provider>
  );
};

export default GetProducts;
