import {Navigate, NavLink, Route, Routes} from "react-router"
import './App.css'
import styles from './components/Site.module.css'
import {Adidas} from "./components/Adidas";
import {Puma} from "./components/Puma";
import {Reebok} from "./components/Reebok";
import {Asics} from "./components/Asics";
import {Error404} from "./components/Error404";
import styled from "styled-components";

function App() {

    return (
        <>
            <header className={styles.header}>SHOES</header>
            <div className={styles.body}>
                <nav className={styles.nav}>
                    {/*<div>*/}
                    {/*    <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to='/page1'>Adidas</NavLink>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to='/page2'>Puma</NavLink>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to='/page3'>Reebok</NavLink>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to='/page4'>Asics</NavLink>*/}
                    {/*</div>*/}
                    <NavWrapper>
                        <NavLink to='/page1'>Adidas</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to='/page2'>Puma</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to='/page3'>Reebok</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to='/page4'>Asics</NavLink>
                    </NavWrapper>
                </nav>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/' element={<Navigate to='/page1'/>}/>
                        <Route path='/page1' element={<Adidas/>}/>
                        <Route path='/page2' element={<Puma/>}/>
                        <Route path='/page3' element={<Reebok/>}/>
                        <Route path='/page4' element={<Asics/>}/>
                        <Route path='/error404' element={<Error404/>}/>
                        <Route path='/*' element={<Navigate to='/error404'/>}/>
                    </Routes>
                </div>
            </div>
            <footer className={styles.footer}> SHOES 2026</footer>
        </>
    )
}

const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 2rem;

    & > a {
        text-decoration: none;
        color: #2c4939;;
    }

    & > a.active {
        text-decoration: underline;
        color: #45c17e;
    }

    & > a:hover {
        color: #048552;
    }
`

export default App
