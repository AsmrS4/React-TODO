import React from 'react';
import removeIcon from '../../assets/close.png';
const ListItem = ({ isActive = false, title = '' }) => {
    return (
        <>
            <div className={isActive ? 'category-item --is-active' : 'category-item'}>
                <span>{title}</span>
                <img height={24} width={24} src={removeIcon} alt='Удалить' />
            </div>
        </>
    );
};

export default ListItem;
