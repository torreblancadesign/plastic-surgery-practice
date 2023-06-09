import React, { useState, useEffect } from "react";
import styles from "../styles/style.module.css";

const Component = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/api");
      const jsonData = await res.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navbar}>
            <li onClick={() => scrollToSection("about")}>About Us</li>
            <li onClick={() => scrollToSection("services")}>Services Offered</li>
            <li onClick={() => scrollToSection("doctor")}>Doctor Profile</li>
            <li onClick={() => scrollToSection("location")}>Location & Hours</li>
          </ul>
        </nav>
      </header>
      <section id="about" className={`${styles.about} ${styles.section}`}>
        <h2>About Us</h2>
        <p>{data.about}</p>
      </section>
      <section id="services" className={`${styles.services} ${styles.section}`}>
        <h2>Services Offered</h2>
        <ul>
          {data.services &&
            data.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
        </ul>
      </section>
      <section id="doctor" className={`${styles.doctor} ${styles.section}`}>
        <h2>Doctor Profile</h2>
        <p>{data.doctorProfile}</p>
      </section>
      <section id="location" className={`${styles.location} ${styles.section}`}>
        <h2>Location & Hours</h2>
        <p>{data.location}</p>
        <p>{data.hours}</p>
      </section>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Plastic Surgery Practice</p>
      </footer>
    </div>
  );
};

export default Component;
