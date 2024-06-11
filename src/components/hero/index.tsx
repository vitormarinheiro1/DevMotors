import styles from './styles.module.scss'

interface HeroProps{
    heading: string;
    buttonUrl: string;
    buttonTitle: string;
    bannerUrl: string;
}

export default function Hero({ heading, bannerUrl, buttonTitle, buttonUrl }: HeroProps){
    return(
        <main className={styles.main}>
            <div className={styles.containerHero}>
                <h1 className={styles.title}>{heading}</h1>

                <a
                    target='_blank'
                    href={buttonUrl}
                    className={styles.link}
                >
                    {buttonTitle}
                </a>
            </div>

            <div className={styles.contentBanner}>
                
            </div>
        </main>
    )
}