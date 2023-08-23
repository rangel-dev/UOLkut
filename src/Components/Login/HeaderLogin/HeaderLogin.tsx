import Style from "../HeaderLogin/index.module.css"

export const HeaderLogin = () => {
    return (
        <div className='App'>
            <header>
                <nav className={Style.nav}>
                    <span className={Style.logo}> UOLkut</span>
                    <ul>
                        <li>Centro de segurança</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}