import s from "./page.module.css";

const page = () => {
  return (
    <div className={s.background}>
      <div className={s.container}>
        <h1 className={s.title}>
          I came from another reality where code is a weapon.
        </h1>
        <p className={s.text}>
          &ldquo; I craft <span className={s.text_accent}>UI</span> like portals
          into a game world, where every detail is part of the experience.
          &rdquo;
        </p>
        <button className={s.btn}>Enter the world</button>
      </div>
    </div>
  );
};

export default page;
