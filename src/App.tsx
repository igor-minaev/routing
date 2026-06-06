import {Navigate, NavLink, Route, Routes} from "react-router"
import './App.css'
import styles from './components/Site.module.css'
import {Adidas} from "./components/Adidas";
import {Puma} from "./components/Puma";
import {Reebok} from "./components/Reebok";
import {Asics} from "./components/Asics";
import {Error404} from "./components/Error404";
import {S} from './components/_styles'

const PATH = {
    page1: '/page1',
    page2: '/page2',
    page3: '/page3',
    page4: '/page4',
    error404: '/error404'
}

function App() {
    return (
        <>
            <header className={styles.header}>SHOES</header>
            <div className={styles.body}>
                <nav className={styles.nav}>
                    <S.NavWrapper>
                        <NavLink to={PATH.page1}>Adidas</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.page2}>Puma</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.page3}>Reebok</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.page4}>Asics</NavLink>
                    </S.NavWrapper>
                </nav>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/' element={<Navigate to={PATH.page1}/>}/>
                        <Route path={PATH.page1} element={<Adidas/>}/>
                        <Route path={PATH.page2} element={<Puma/>}/>
                        <Route path={PATH.page3} element={<Reebok/>}/>
                        <Route path={PATH.page4} element={<Asics/>}/>
                        <Route path='/*' element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
            <footer className={styles.footer}> SHOES 2026</footer>
        </>
    )
}

export default App
