"use client";
import s from "@/app/running/page.module.css";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import welcome from "../assets/welcome.json";

const LottieWithNoSSR = dynamic(() => import("lottie-react"), { ssr: false });

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
    <>
      <div className={s.container}>
        <h2 className={s.title}>Arrival via...{seconds}</h2>
      </div>
      {seconds === 0 && (
        <div className={s.backdrop}>
          <motion.div
            className={s.icon}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <LottieWithNoSSR animationData={welcome} loop={false} />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Page;
