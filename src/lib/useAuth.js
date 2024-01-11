import { useState, useEffect } from "react";
import { BASE_URL, SECRET_TOKEN } from "./global";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      fetch(`${BASE_URL}/users/user-info/me`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem(SECRET_TOKEN)}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.message === "Forbidden Access") {
            setIsLoading(false);
          } else {
            setUser(data);
            setIsLoading(false);
          }
        });
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const logout = () => {
    setIsLoading(true);
    localStorage.removeItem(SECRET_TOKEN);
    setUser(null);
    window.location.reload();
    setIsLoading(false);
  };

  const refetch = async () => {
    setIsLoading(true);
    await fetchData();
  };

  return { user, isLoading, refetch, setUser, logout };
};

export default useAuth;
