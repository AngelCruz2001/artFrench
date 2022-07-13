import styles from './Searchbar.module.scss'
export const Searchbar = () => {
    return (
        <div className={styles.searchbar} >
            <input type="text" placeholder="Search" />
        </div>
    )
}
