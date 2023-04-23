import styles from './header.module.css'


const Header = () =>{
    return(
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Projects</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>Skills</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;