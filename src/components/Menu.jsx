import React from 'react';
import { NavLink } from 'react-router-dom';
import classname from '../assets/css/components/Menu.module.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function Menu(props) {

    return (
        <section className={classname.menuCont}>
            <AnimatePresence>
                {props.open && <motion.section className={classname.menu}
                    data-open={props.login}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {props.menus.map(element => <p key={Math.random()}>
                        <NavLink onClick={props.handleClick} to={element[1]} >{element[0]}</NavLink>
                    </p>
                    )}
                </motion.section>}
            </AnimatePresence>
        </section>
    )
}