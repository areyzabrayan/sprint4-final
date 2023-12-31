"use client";
import React, { useEffect, useMemo } from "react";
import "./footer.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const Footer = () => {
  const orders = useSelector((store) => store.order);
  const { status } = useSelector((state) => state.auth);
  const currentPath = usePathname();
  const router = useRouter();
  const isLogin = useMemo(() => status === "authenticated", [status]);
  const isLogout = useMemo(() => status === "not-authenticated", [status]);

  const goRute = (page) => {
    if (page == "home") {
      router.push("/home");
    }
    if (page == "search") {
      router.push("/search");
    }
    if (page == "order") {
      router.push("/order");
    }
    if (page == "newOrder") {
      if (orders.orders.length == 0) {
        Swal.fire(
          "Espera un momento!",
          "Aun no tienes ordenes pendientes!",
          "info"
        );
      } else {
        router.push("/newOrder");
      }
    }
    if (page == "perfil") {
      if (isLogout) {
        Swal.fire("Oops", "debes iniciar sesion para ir al perfil", "error");
        router.push("/user/login");
      }
      if (isLogin) {
        router.push("/user/perfil");
      }
    }
  };

  return (
    <div className="footerPrimary">
      <i
        className={`bi bi-house-door ${
          currentPath === "/home" ? "text-warning puntito" : ""
        }`}
        onClick={() => goRute("home")}
      ></i>
      <i
        className={`bi bi-search ${
          currentPath === "/search" ? "text-warning puntito" : ""
        }`}
        onClick={() => goRute("search")}
      ></i>
      {isLogin ? (
        <i
          className={`bi bi-stopwatch  ${
            currentPath === "/order" || currentPath === "/detail"
              ? "text-warning puntito"
              : ""
          }`}
          onClick={() => goRute("order")}
        ></i>
      ) : (
        ""
      )}
      <i
        className={`bi bi-cart-plus  ${
          currentPath === "/newOrder" ? "text-warning puntito" : ""
        }`}
        onClick={() => goRute("newOrder")}
      ></i>
      <i
        className={`bi bi-person  ${
          currentPath === "/user/login" ||
          currentPath === "/user/perfil" ||
          currentPath === "/user/perfil-edit"
            ? "text-warning puntito"
            : ""
        }`}
        onClick={() => goRute("perfil")}
      ></i>
    </div>
  );
};

export default Footer;

//comentario
