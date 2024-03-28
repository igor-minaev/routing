import React from 'react';
import s from './components/Site.module.css'
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Audi, audiArr} from './components/Audi';
import {Mercedes, mercedesArr} from './components/Mercedes';
import {Kia, kiaArr} from './components/Kia';
import {Error404} from './components/Error404';
import {S} from './components/_styles';
import {Car} from './components/Car';

export const PATH = {
    PAGE1: '/audi',
    PAGE2: '/kia',
    PAGE3: '/mercedes',
    ERROR: '/error404'
} as const


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
                        <NavLink to={PATH.PAGE1}>Audi</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE2}>Kia</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE3}>Mercedes</NavLink>
                    </S.NavWrapper>
                </div>
                <div className={s.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>
                        <Route path={PATH.PAGE1} element={<Audi/>}/>
                        <Route path={PATH.PAGE2} element={<Kia/>}/>
                        <Route path={PATH.PAGE3} element={<Mercedes/>}/>
                        <Route path={PATH.ERROR} element={<Error404/>}/>
                        <Route path={`${PATH.PAGE1}/:id`} element={<Car cars={audiArr}/>}/>
                        <Route path={`${PATH.PAGE2}/:id`} element={<Car cars={kiaArr}/>}/>
                        <Route path={`${PATH.PAGE3}/:id`} element={<Car cars={mercedesArr}/>}/>
                        <Route path={'*'} element={<Navigate to={PATH.ERROR}/>}/>
                    </Routes>
                </div>
            </div>
            <footer className={s.footer}>Footer</footer>
        </div>
    );
}

export default App;



