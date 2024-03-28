import React from 'react';
import {Link} from 'react-router-dom';
import {S} from './_styles';
import mercedesCar1 from '../assets/mercedes/gle-400.jpg'
import mercedesCar2 from '../assets/mercedes/maybach-s-450.jpg'
import mercedesCar3 from '../assets/mercedes/gle-450.jpg'
import {CarItem} from './Audi';

export const mercedesArr: CarItem[] = [
    {
        id: 1,
        model: 'GLE 400',
        price: 10000,
        year: 2019,
        picture: mercedesCar1
    },
    {
        id: 2,
        model: 'MAYBACH S 450',
        price: 50000,
        year: 2021,
        picture: mercedesCar2
    },
    {
        id: 3,
        model: 'GLE 450',
        price: 40000,
        year: 2023,
        picture: mercedesCar3
    }
]

export const Mercedes = () => {
    const mercedesMapped = mercedesArr.map(el => {
        return (
            <Link key={el.id} to={`/mercedes/${el.id}`}>
                <S.ImgWrapper src={el.picture} alt="photo"/>
            </Link>
        )
    })
    return (
        <div>
            <h2>Mercedes</h2>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                {mercedesMapped}
            </div>
        </div>
    );
};

