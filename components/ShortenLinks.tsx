import styles from '../styles/Home.module.scss'

const ShortenLinks = ({url}:any) => {

return(
  <div className={`${styles.url_container} container my-2`}>{url}</div>
);
}

export default ShortenLinks;
