import React from 'react';
import {useParams} from 'react-router-dom';
import {audiArr} from './Audi';

export const Car = () => {
    const params = useParams()
    const currentCar = audiArr.find(el => el.id === Number(params.id))
    return (
        <div style={{textAlign: 'center'}}>
            {currentCar
                ? <>
                    <h2>{currentCar.model}</h2>
                    <p>{currentCar.year} year</p>
                    <p>{currentCar.price} $</p>
                    <img src={currentCar.picture} alt="car"/>
                </>
                : <h3>Автомобиль отсутствует</h3>
            }
        </div>
    );
};

