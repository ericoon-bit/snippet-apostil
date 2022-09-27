import Symbols from '../symbols'
import styles from './styles/nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav__container}>
            <div className={styles.nav__hot_entry}>
                <h3 className={styles.nav__entry_label}>快捷入口</h3>
                <ul className={styles.nav__entry_items}>
                    <li className={styles.nav__entry_item}>
                        <span className={styles.item__icon_backdrop}>
                            <Symbols.SymbolEdit />
                        </span>
                        <span className={styles.item__label}>任务</span>
                    </li>
                    <li className={styles.nav__entry_item}>
                        <span className={styles.item__icon_backdrop}>
                            <Symbols.SymbolPut />
                        </span>
                        <span className={styles.item__label}>投放</span>
                    </li>
                    <li className={styles.nav__entry_item}>
                        <span className={styles.item__icon_backdrop}>
                            <Symbols.SymbolMedia />
                        </span>
                        <span className={styles.item__label}>媒体</span>
                    </li>
                    <li className={styles.nav__entry_item}>
                        <span className={styles.item__icon_backdrop}>
                            <Symbols.SymbolMessage />
                        </span>
                        <span className={styles.item__label}>消息</span>
                    </li>
                </ul>
            </div>
            <div className={styles.nav__menu}>

            </div>
        </nav>
    )
}

export default Nav