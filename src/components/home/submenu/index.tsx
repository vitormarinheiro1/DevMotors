"use client"
import Link from 'next/link'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import { X, Menu } from 'lucide-react'

export function Submenu() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        }

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)

    }, [])

    function toggleMenu() {
        setIsOpen(!isOpen);
    }


    return (
        <section className={styles.submenu}>
            <div className={styles.submenuIcon} onClick={toggleMenu}>
                <Menu size={34} color="#121212" />
                Serviços
            </div>
            <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>

                {isOpen &&
                    <button onChange={toggleMenu}>
                        <X size={54} color='#121212' />
                    </button>
                }
                <li>
                    <Link href="/post/pagina-1">
                        Pagina 1
                    </Link>
                </li>
                <li>
                    <Link href="/post/pagina-2">
                        Pagina 2
                    </Link>
                </li>
            </ul>
        </section>
    )
}