import {NavLink} from 'react-router-dom'

export default function Header(){
    return (
        <header className="header">
            <div className="header-wrapper">
                <NavLink to='/' className="header-button">рынки</NavLink>
                <NavLink to='/currency' className="header-button">валюты</NavLink>
                <NavLink to='/fiat' className="header-button">ввод/вывод фиата</NavLink>
            </div>
        </header>
    )
}