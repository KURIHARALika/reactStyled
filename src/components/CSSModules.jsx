import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <>
      <div className={classes.contener}>
        <p className={classes.title}> -css modules- -aobajosai</p>
        <button className={classes.button}>OIKAWA</button>
      </div>
    </>
  );
};
