import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import logoHome from "../../assets/images/logoHome.jpg";
import styles from "./styles.module.css";

function BlankPage() {
  return (
    <div className="index">
      <div className={styles.container}>
        <h1> Write something here....</h1>
      </div>
      <div>
        <form className={styles.form}>
          <h1>Topic </h1>
          <div className="topic">
            <input type="text" name="topic" required></input>
          </div>
          <textarea id="review" name="reviews" rows="10" cols="100"></textarea>
          <button type="submit" className={styles.saved}>
            <Link to="/"> HomePage</Link> <h2>Save</h2>
          </button>
        </form>
      </div>
    </div>
  );
}

export default BlankPage;
