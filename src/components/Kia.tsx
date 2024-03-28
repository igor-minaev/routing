import React from 'react';
import kiaCar1 from '../assets/kia/k5.png'
import kiaCar2 from '../assets/kia/sportage.png'
import kiaCar3 from '../assets/kia/sorento.png'
import {CarItem} from './Audi';
import {Link} from 'react-router-dom';
import {S} from './_styles';


export const kiaArr: CarItem[] = [
    {
        id: 1,
        model: 'K5',
        price: 10000,
        year: 2019,
        picture: kiaCar1
    },
    {
        id: 2,
        model: 'SPORTAGE',
        price: 30000,
        year: 2021,
        picture: kiaCar2
    },
    {
        id: 3,
        model: 'SORENTO',
        price: 40000,
        year: 2023,
        picture: kiaCar3
    }
]

export const Kia = () => {
    const kiaMapped = kiaArr.map(el => {
        return (
            <Link key={el.id} to={`/kia/${el.id}`}>
                <S.ImgWrapper src={el.picture} alt="photo"/>
            </Link>
        )
    })
    return (
        <div>
            <h2>Kia</h2>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                {kiaMapped}
            </div>
        </div>
    );
};

