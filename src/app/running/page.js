"use client";
import s from "@/app/running/page.module.css";
import { useEffect, useState } from "react";

const Page = () => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Arrival via...{seconds}</h2>
    </div>
  );
};

export default Page;
