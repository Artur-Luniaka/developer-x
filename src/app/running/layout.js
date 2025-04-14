"use client";
import s from "@/app/running/page.module.css";

const layout = ({ children }) => {
  return <div className={s.background}>{children}</div>;
};

export default layout;
