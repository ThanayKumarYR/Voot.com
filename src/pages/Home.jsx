import React, { useState } from "react";
import Bigslider from "../components/Bigslider";

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
   <Bigslider/>
  );
};

export default Home;
