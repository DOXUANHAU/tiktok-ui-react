import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from "/CodeSpace/ReactNative/tiktok-ui/src/assets/images";
import styles from "./Header.module.scss";
import {
  faCircleXmark,
  faSearch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* logo */}
        <div className={cx("logo")}>
          <figure>
            <img src={images.logo} alt="React TikTok UI" />
          </figure>
        </div>
        {/* input search */}
        <div className={cx("search")}>
          <input
            type="text"
            placeholder="Search account and videos"
            spellCheck={false}
          />
          <button className={cx("clear-btn")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          {/* loading */}
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className={cx("action")}>
          <h1>Action</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
