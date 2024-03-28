import React from 'react';

import audiCar1 from '../assets/audi/a4.jpg'
import audiCar2 from '../assets/audi/q5.webp'
import audiCar3 from '../assets/audi/a8.jpg'
import {Link} from 'react-router-dom';
import { S } from './_styles';

export type CarItem = {
    id: number,
    model: string,
    price: number,
    year: number,
    picture: string
}

export const audiArr: CarItem[] = [
    {
        id: 1,
        model: 'A4',
        price: 10000,
        year: 2018,
        picture: audiCar1
    },
    {
        id: 2,
        model: 'Q5',
        price: 25000,
        year: 2021,
        picture: audiCar2
    },
    {
        id: 3,
        model: 'A8',
        price: 40000,
        year: 2023,
        picture: audiCar3
    }
]

export const Audi = () => {
    const audiMapped = audiArr.map(el => {
        return (
            <Link key={el.id} to={`/audi/${el.id}`}>
                <S.ImgWrapper src={el.picture} alt="photo"/>
            </Link>
        )
    })
    return (
        <div>
            <h2>Audi</h2>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                {audiMapped}
            </div>
        </div>
    );
};

