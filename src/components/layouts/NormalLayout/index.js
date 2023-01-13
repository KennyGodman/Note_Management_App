import { Icon } from "@iconify/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { images } from "../../../assets/images";
import styles from "./styles.module.css";

function NormalLayout() {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div>
          <img src={images.logo} alt="logo" className={styles.logo} />
          <ul className={styles.nav}>
            <li className={styles.active}>
              <Link to="/emptyPage">
                <Icon
                  icon="ic:baseline-note-alt"
                  width={24}
                  height={24}
                  style={{ marginRight: 10 }}
                  inline
                />{" "}
                All note
              </Link>
            </li>
            <li>
              <Link to="tasks">
                <Icon
                  icon="ic:baseline-playlist-add-check-circle"
                  width={24}
                  height={24}
                  style={{ marginRight: 10 }}
                  inline
                />{" "}
                Tasks
              </Link>
            </li>
            <li>
              <Link to="reminder">
                <Icon
                  icon="mdi:alarm-light"
                  width={24}
                  height={24}
                  style={{ marginRight: 10 }}
                  inline
                />{" "}
                Reminder
              </Link>
            </li>
            <li>
              <Link to="favourite">
                {" "}
                <Icon
                  icon="mdi:heart-box"
                  width={24}
                  height={24}
                  style={{ marginRight: 10 }}
                  inline
                />{" "}
                Favourite
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <h3>Kenny Godman</h3>
          <h5>
            <Link to="/login">Logout</Link>
          </h5>
        </div>
      </aside>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default NormalLayout;
