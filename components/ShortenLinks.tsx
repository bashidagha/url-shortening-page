import styles from '../styles/Home.module.scss'

const ShortenLinks = ({url}:any) => {

  return(
    <>
    <div className={`${styles.url_container} container px-5`}>
    <p className="fs-4 m-0">{url.original_link}</p>
    <a href={url.full_short_link} className="  text-primary fs-3 text-decoration-none">{url.short_link}</a>
    <button className="cstm_btn" style={{fontSize:'85%'}}>Copy</button>

    </div>


    <div className="container" style={{height:"10px"}}/>
    </>
  );
}

export default ShortenLinks;
