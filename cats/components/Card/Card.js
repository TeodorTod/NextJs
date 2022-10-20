import styles from './Card.module.css';

function Card({ name, phone, email, image, id }) {
    return (
        <div
            className={styles.card}
        >
            <div className={styles["card-header"]}>
                <img src={image.url} alt={image.alt} className={styles["card-img"]} />
            </div>
            <div >
                <h3>{name}</h3>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card