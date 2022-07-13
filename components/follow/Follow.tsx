import styles from './Follow.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface FollowProps {
    index: number;
}
export const Follow = ({ index }: FollowProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <img src={`https://picsum.photos/300/300?random=${index}`} alt="profile" />
                <div>
                    <p>Art club France HMS</p>
                    <span>company</span>
                </div>
                <FontAwesomeIcon icon={faPlus} />
            </div>
        </div>
    )
}
