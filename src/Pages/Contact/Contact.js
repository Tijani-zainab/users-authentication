import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contact}>
            <h2 className={styles.contactHeading}>Get In touch with us</h2>
            <div className={styles.emailButtonWrapper}>
                <input type="email" placeholder='Enter your email' id={styles.enterEmail} />
                <button>Signup</button>
            </div>
        </div>
    );
}
export default Contact;