import { useState, useEffect } from "react";

const useYears = () => {
  const [years, setYears] = useState([]);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const yearOptions = Array.from(
      { length: 21 },
      (_, index) => currentYear - 10 + index
    );

    setYears(yearOptions);
  }, []);

  return { years };
};

export default useYears;
