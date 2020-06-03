import { useState, useEffect } from "react";

const data = [
  {
    name: "阿🐝",
    age: 26,
    gender: "male",
    height: 160,
    weight: 200,
  },
  {
    name: "阿🐔",
    age: 26,
    gender: "male",
    height: 160,
    weight: 200,
  },
  {
    name: "阿🐱",
    age: 26,
    gender: "male",
    height: 160,
    weight: 200,
  },
  {
    name: "阿🐺",
    age: 26,
    gender: "male",
    height: 160,
    weight: 200,
  },
];

function store() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setDataSource(data);
      setLoading(false);
    }, 1000);
  }, []);

  return {
    dataSource,
    loading,
  };
}
export default store;
