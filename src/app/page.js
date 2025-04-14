"use client";
import s from "./page.module.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import developer from "./assets/developer.json";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { fairyDustCursor } from "cursor-effects";
import Link from "next/link";

const LottieWithNoSSR = dynamic(() => import("lottie-react"), { ssr: false });

const Page = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      new fairyDustCursor({ color: "#e0f7fa" });
    }
  }, []);

  return (
    <div className={s.background}>
      <div className={s.container}>
        <h1 className={s.title}>
          <Typewriter
            words={["I came from another reality where code is a weapon."]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={0}
            delaySpeed={100}
          />
        </h1>
        <motion.p
          className={s.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
        >
          &ldquo; I craft <span className={s.text_accent}>UI</span> like portals
          into a game world, where every detail is part of the experience.
          &rdquo;
        </motion.p>
        <motion.button
          className={s.btn}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 5, duration: 1, type: "spring" }}
        >
          <Link href="/running" className={s.link}>Enter the world</Link>
        </motion.button>
        <motion.div
          className={s.icon}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.5, duration: 1 }}
        >
          <LottieWithNoSSR animationData={developer} loop={true} />
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
