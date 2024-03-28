import React from 'react';
import s from './components/Site.module.css'

function App() {
    return (
        <div className='App'>
            <header className={s.header}>Header</header>
            <div className={s.body}>
                <div className={s.nav}>Nav</div>
                <div className={s.content}>Content</div>
            </div>
            <footer className={s.footer}>Footer</footer>
        </div>
    );
}

export default App;
