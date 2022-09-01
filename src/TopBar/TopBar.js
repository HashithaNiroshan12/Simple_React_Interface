import amzonLogo from "../amazon-log.png";
import classes from "./TopBar.module.css";

const Topbar = () => {
  return (
    <header>
      <nav className={classes.Topbar}>
        <img src={amzonLogo} alt="amzon logo" />
      </nav>
    </header>
  );
};

export default Topbar;
