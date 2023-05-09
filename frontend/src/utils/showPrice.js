const showPrice = (price) => {
    price=price+'.000'
    return price.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  };
  export default showPrice