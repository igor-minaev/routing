import {Navigate, NavLink, Route, Routes} from "react-router"
import './App.css'
import styles from './components/Site.module.css'
import {Adidas} from "./components/Adidas";
import {Puma} from "./components/Puma";
import {Reebok} from "./components/Reebok";
import {Asics} from "./components/Asics";
import {Error404} from "./components/Error404";
import {S} from './components/_styles'
import {Model} from "./components/Model";

const PATH = {
    adidas: '/adidas',
    puma: '/puma',
    reebok: '/reebok',
    asics: '/asics',
    error404: '/error404'
} as const

function App() {
    return (
        <>
            <header className={styles.header}>SHOES</header>
            <div className={styles.body}>
                <nav className={styles.nav}>
                    <S.NavWrapper>
                        <NavLink to={PATH.adidas}>Adidas</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.puma}>Puma</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.reebok}>Reebok</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.asics}>Asics</NavLink>
                    </S.NavWrapper>
                </nav>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/' element={<Navigate to={PATH.adidas}/>}/>
                        <Route path={PATH.adidas} element={<Adidas/>}/>
                        <Route path={PATH.puma} element={<Puma/>}/>
                        <Route path={PATH.reebok} element={<Reebok/>}/>
                        <Route path={PATH.asics} element={<Asics/>}/>
                        <Route path='/:model/:id' element={<Model/>}/>
                        <Route path='/*' element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
            <footer className={styles.footer}> SHOES 2026</footer>
        </>
    )
}

export default App
