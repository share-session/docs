import React, {useState, useEffect} from 'react';

import styles from './test.module.css';

export default function Home(): JSX.Element {
    const [complete, setComplete] = useState(false);

    useEffect(() => {

        function check() {
            setComplete(document.cookie.includes("share-session-test"));
        }

        check();

        const interval = setInterval(check, 1000)

        return () => {
            clearInterval(interval)
        }
    }, []);

    return (
        <div className={styles.container}>
            {!complete && (
                <>
                    <h1>Testing...</h1>
                    <h2>Please click "Use session" in the pop up</h2>
                </>
            )}

            {complete && (
                <>
                    <h1>Success! ✅</h1>
                    <h2>You can safely close this window</h2>
                </>
            )}
        </div>
    );
}
