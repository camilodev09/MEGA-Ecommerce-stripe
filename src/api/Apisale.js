import axios from "axios";

export async function productorData() {
  const prodSale = await axios.get(
    "https://fakestoreapiserver.reactbd.com/cart"
  );
  return prodSale;
}
