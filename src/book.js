import React from 'react'
import styles from "./mystyle.module.css"; 

const Book = (props) => {
  const { img, title, author , type} = props;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}>
      <div className={styles.images}>
        <img src={img} alt="" />
      </div>
      <h3>{title}</h3>
      <a href="#">
        <h4>{author}</h4>
      </a>
      <h5>{type}</h5>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
    </article>
  );
};

export default Book
