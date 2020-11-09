import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import NavigationMenu from './navigationMenu.js';

function Header(){

    const [showMenu, setMenuState] = useState(false)
    const menuMaskTransition = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })
    return(
        <header className="flex p-2 font-bold border-b justify-between items-center">
            <span className='text-center'>theKC66 App</span>
            <nav>
                <button 
                    onClick={ () => setMenuState(!showMenu) }
                    className="bg-purple-500 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded"
                >
                    <FontAwesomeIcon 
                        icon={faBars}
                    />
                </button>
            </nav>
            {
            menuMaskTransition.map(({ item, key, props }) =>
                item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        onClick={ () => setMenuState(false) }
                        className="fixed bg-black-t-50 top-0 left-0 w-full h-full shadow z-45">
                    </animated.div>
                )
            }
            {
            menuTransitions.map(({ item, key, props }) =>
                item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="fixed bg-white top-0 left-0 w-4/5 h-full shadow z-50 font-bold">
                            <NavigationMenu closeMenu={() => setMenuState(false)} />
                    </animated.div>
                )
            }
            
        </header>
    )
}

export default Header;
