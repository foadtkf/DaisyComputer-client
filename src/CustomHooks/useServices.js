import { useEffect, useState } from "react";

const useServices = (six) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    let url = `https://daisycomputer-server.onrender.com/products${six}`;
    if (!six) url = `https://daisycomputer-server.onrender.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};
export default useServices;
