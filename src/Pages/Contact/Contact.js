import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contact}>
            <h2 className={styles.contactHeading}>Get In touch with us</h2>
            <div className={styles.emailButtonWrapper}>
                <input placeholder='Enter your email' />
                <button>Signup</button>
            </div>
        </div>
    );
}
export default Contact;