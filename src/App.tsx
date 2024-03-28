import React from 'react';
import s from './components/Site.module.css'
import {Navigate, Route, Routes} from 'react-router-dom';
import {Audi} from './components/Audi';
import {Mercedes} from './components/Mercedes';
import {Kia} from './components/Kia';
import {Error404} from './components/Error404';

function App() {
    return (
        <div className="App">
            <header className={s.header}>Header</header>
            <div className={s.body}>
                <div className={s.nav}>Nav</div>
                <div className={s.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/audi'}/>}/>
                        <Route path={'/audi'} element={<Audi/>}/>
                        <Route path={'/kia'} element={<Kia/>}/>
                        <Route path={'/mercedes'} element={<Mercedes/>}/>
                        <Route path={'/error404'} element={<Error404/>}/>
                        <Route path={'*'} element={<Navigate to={'/error404'}/>}/>
                    </Routes>
                </div>
            </div>
            <footer className={s.footer}>Footer</footer>
        </div>
    );
}

export default App;
