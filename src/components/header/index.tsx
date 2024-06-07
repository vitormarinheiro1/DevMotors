import Link from 'next/link'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentLogo}>
                        <Link href="/">
                            Dev Motors
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}