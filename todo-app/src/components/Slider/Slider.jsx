import React from 'react';
import { useState, useContext } from 'react';

import Button from '../Button/Button';
import listIcon from '../../assets/list.png';
import plus from '../../assets/plus.png';
import './Slider.scss';
import Categories from '../List/Categories';
import { AppContext } from '../../App';

const Slider = () => {
    const { setIsOpen } = useContext(AppContext);
    const handleCloseSlider = (e) => {
        if (e.target === document.querySelector('.todo__todo-overlay')) {
            setIsOpen(false);
        }
    };

    return (
        <>
            <div className='todo__todo-overlay' onClick={handleCloseSlider}>
                <div className='todo__sidebar'>
                    <div className='sidebar__inner'>
                        <Button text={'Все задачи'} iconSrc={listIcon} isWhite={true} />
                        <Categories />
                        <Button text={'Создать список'} iconSrc={plus} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;
