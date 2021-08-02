import React from 'react'
import styles from "./mystyle.module.css"; 

const Book = (props) => {
  const { img, title, author , type, number} = props;
  return (
    <article className="book">
      <div className={styles.number}>
        <h4>{number}</h4>
      </div>

      <div className={styles.images}>
        <img src={img} alt="" />
      </div>
      <div className={styles.desc}>
        <h3>{title}</h3>
        <a href="//">
          <h4>{author}</h4>
        </a>
        <h5>{type}</h5>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
      </div>
    </article>
  );
};

export default Book
