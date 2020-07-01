import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { desks } from '../../commons/constants';
import './_header.scss';

const Header = () => {
    const selector = useSelector(({ newsReducer }) => newsReducer);
    const { filter } = selector;
    return (
        <div className="header"> 
            <nav>
                <ul className="header__menu">
                    {desks.map(item => (
                        <li key={item.label} className={classNames('header__link', { 'header__link--selected': filter === item.filter })}><Link to={item.path}>{item.label}</Link></li>
                    ))}  
                </ul>
            </nav>
        </div> 
    );
};

export default Header;
