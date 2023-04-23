import styles from './header.module.css'


const Header = () =>{
    return(
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>Skills</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;