import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem("token") ? navigate("/todo") : navigate("/signin");
  }, []);
};
