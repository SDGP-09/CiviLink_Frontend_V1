import React from "react";
import Image from "next/image";
import styles from "./Contractorgrid.module.css";

const contractors = [
  {
    name: "Super Constructions",
    category: "Building construction",
    location: "Kandy, Sri Lanka",
    rating: 4.7,
    projects: 7,
  },
  {
    name: "Super Constructions",
    category: "Building construction",
    location: "Kandy, Sri Lanka",
    rating: 4.7,
    projects: 7,
  },
  {
    name: "Super Constructions",
    category: "Building construction",
    location: "Kandy, Sri Lanka",
    rating: 4.7,
    projects: 7,
  },
  {
    name: "Super Constructions",
    category: "Building construction",
    location: "Kandy, Sri Lanka",
    rating: 4.7,
    projects: 7,
  },

  {
    name: "Super Constructions",
    category: "Building construction",
    location: "Kandy, Sri Lanka",
    rating: 4.7,
    projects: 7,
  },
  {
    name: "Super Constructions",
    category: "Building construction",
    location: "Kandy, Sri Lanka",
    rating: 4.7,
    projects: 7,
  },
];

const Contractorgrid = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>CiviLink</h1>
      <h2 className={styles.subHeader}>Sri Lankan Largest Construction Network</h2>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search text here..." className={styles.searchInput} />
      </div>
      <div className={styles.grid}>
        {contractors.map((contractor, index) => (
          <div key={index} className={styles.card}>
            <Image
              src="/image.png"
              alt={contractor.name}
              width={200}
              height={200}
              className={styles.image}
            />
            <div className={styles.cardDetails}>
              <h3>{contractor.name}</h3>
              <p>{contractor.category}</p>
              <p>{contractor.location}</p>
              <div className={styles.rating}>
                <span>⭐ {contractor.rating}</span>
                <span>{contractor.projects} Projects</span>
              </div>
              <button className={styles.connectBtn}>Connect</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
    </div>
  );
};

export default Contractorgrid;