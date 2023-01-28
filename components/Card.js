import styles from "./Card.module.css";

const Card = (props) => {
  return (
    // Create a section styled with module.css and pass props.children (Any content)
    <section className={styles.card}> 
      {props.children}
    </section>
  )
};

export default Card;
