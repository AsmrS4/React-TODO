import React from 'react';
import checkmark from '../../assets/checkmark.png';
import './Task.scss';
import removeIcon from '../../assets/close.png';

const Task = ({ checked = false, text = '' }) => {
    return (
        <>
            <div className='task-item'>
                <div>
                    {checked ? <img height={24} width={24} src={checkmark} alt='Сделано' /> : ''}
                    <input className='circle-checkbox' type='checkbox' checked={checked} />
                    <span className='task-item__text'>{text}</span>
                </div>
                <div className='remove-btn'>
                    <img height={24} width={24} src={removeIcon} alt='' />
                </div>
            </div>
        </>
    );
};

export default Task;
