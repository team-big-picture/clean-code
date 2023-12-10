import React, { useCallback } from "react";
import styles from "./Authors.module.css";

const AUTHORS = {
  donghakim: {
    name: "dongha",
    title: "Front End Engineer",
    url: "https://github.com/dongha1992",
    image_url: "https://github.com/dongha1992.png",
  },
};

export default function Authors({ bookLeader, authors }) {
  const Author = ({ author }) => {
    const authorInfo = AUTHORS[author];

    return (
      <div className={styles.author}>
        <a
          href={authorInfo.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.avatar__link}
        >
          <img
            src={authorInfo.image_url}
            alt={author}
            className={styles.avatar__photo}
          />
        </a>
        <div className={styles.avatar__info}>
          <span className={styles.bold}>
            {authorInfo.name} {author === bookLeader && ` 🏆`}
          </span>
          <span>{authorInfo.title}</span>
        </div>
      </div>
    );
  };

  const renderAuthors = useCallback(() => {
    return (
      <div className={styles.authors}>
        {AUTHORS[bookLeader] && <Author author={bookLeader} />}
        {authors &&
          authors.map((author) => {
            if (AUTHORS[author]) {
              return <Author author={author} key={author} />;
            }
          })}
      </div>
    );
  }, [bookLeader, authors]);

  return (
    <section>
      <span className={styles.title}>written by</span>
      {renderAuthors()}
    </section>
  );
}
