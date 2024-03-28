import React from 'react';
import s from './components/Site.module.css'
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Audi} from './components/Audi';
import {Mercedes} from './components/Mercedes';
import {Kia} from './components/Kia';
import {Error404} from './components/Error404';
import { S } from './components/_styles';


function App() {
    return (
        <div className="App">
            <header className={s.header}>Header</header>
            <div className={s.body}>
                {/* <div className={s.nav}>
                    <div>
                        <NavLink to={'/audi'} className={({isActive}) => isActive ? s.active : s.navLink}>Audi</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/kia'} className={({isActive}) => isActive ? s.active : s.navLink}>Kia</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/mercedes'}
                                 className={({isActive}) => isActive ? s.active : s.navLink}>Mercedes</NavLink>
                    </div>
                </div>*/}
                <div className={s.nav}>
                    <S.NavWrapper>
                        <NavLink to={'/audi'}>Audi</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={'/kia'}>Kia</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={'/mercedes'}>Mercedes</NavLink>
                    </S.NavWrapper>
                </div>
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



