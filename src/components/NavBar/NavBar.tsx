import styles from "./Navbar.module.scss";
import { SearchBox } from "../../commonComponents";
import { cart, wishlist } from "../../assets";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["nav-title-head"]}>
        <a href="/">
          {" "}
          <span> Exclusive </span>{" "}
        </a>
      </div>
      <div className={styles["nav-tabs"]}>
        <ul className={`${styles["tab-containers"]}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="'">SignUp/Login</a>
          </li>
        </ul>
      </div>
      <div className={styles["nav-actions"]}>
        <SearchBox />
        <div className={styles["wishlist-icon"]}>
          <img src={wishlist} alt="" />
        </div>
        <div className={styles["cart-icon"]}>
          <img src={cart} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
