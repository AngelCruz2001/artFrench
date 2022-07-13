import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './Publication.module.scss'

interface PublicationProps {
    index?: number,
    profile?: string,
    tags?: string[],
}
export const Publication = ({ index, profile, tags }: PublicationProps) => {
    return (
        <div className={styles.publication}>
            <div className={styles.header}>
                <img src={`https://picsum.photos/300/300?random=${index}`} alt="profile" />
                <div>
                    <p>Art club France HMS</p>
                    <span>company</span>
                </div>
                <FontAwesomeIcon icon={faPlus} />
            </div>

            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p>
                <img src={`https://picsum.photos/1000/1000?random=${index}`} alt="content" />
            </div>
        </div>
    )
}
