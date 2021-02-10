import Link from "next/link";
import { useState, useEffect } from 'react';
import styles from '../styles/Counter.module.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) {
            setCount(0);
        } else {
            const timeout = setTimeout(() => setCount(prevState => prevState + 1), 1000);
            return () => {
                clearInterval(timeout);
            }
        }
    }, [isRunning, count]);

    return (
        <div className={styles.counterContainer}>
            <h1>{ count }</h1>
            <button onClick={ () => setIsRunning(prevState => !prevState) }>{ isRunning ? 'Stop' : 'Start' }</button>
            <br/>
            <Link href="/">
                <button>Go back to index</button>
            </Link>
        </div>
    )
}

export default Counter;
