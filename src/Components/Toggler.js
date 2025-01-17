import React from 'react'

import styles from '../styles/general.module.scss'

const Toggler = (props) => {
    return (
        <div className={styles.toggler}>
            <input checked={props.value} onChange={props.toggle}  type="checkbox" id="checkbox" className={styles.checkboxed} />
                <label htmlFor="checkbox" className={styles.labeled}>
                    <span className={styles.fasun}>☀</span>
                    <span className={styles.famoon}>☾</span>
                    <div className={styles.ball}></div>
                </label>
        </div>
    )
}

export default Toggler