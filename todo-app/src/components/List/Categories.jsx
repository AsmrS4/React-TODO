import React from 'react';
import ListItem from '../ListItem/ListItem';

const Categories = () => {
    return (
        <>
            <div className='categories'>
                <div className='categories__categories-holder'>
                    <ListItem title='Избранное' isActive={true} />
                    <ListItem title='Фильмы и сериалы' />
                    <ListItem title='Книги' />
                    <ListItem title='Фильмы и сериалы' />
                    <ListItem title='Книги' />
                    <ListItem title='Фильмы и сериалы' />
                    <ListItem title='Книги' />
                    <ListItem title='Фильмы и сериалы' />
                    <ListItem title='Книги' />
                    <ListItem title='Фильмы и сериалы' />
                    <ListItem title='Книги' />
                    <ListItem title='Фильмы и сериалы' />
                    <ListItem title='Книги' />
                </div>
            </div>
        </>
    );
};

export default Categories;
