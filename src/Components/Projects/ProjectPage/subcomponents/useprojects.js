import { useState, useEffect } from "react";

const useprojects = () => {
  const [projects, setprojects] = useState(null);
  const [search, setSearch] = useState("");

  return { projects };
};

export default useprojects;
