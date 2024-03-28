import React from 'react';
import {useParams} from 'react-router-dom';
import {CarItem} from './Audi';


type CarType = {
    cars: CarItem[]
}

export const Car: React.FC<CarType> = ({cars}) => {
    const params = useParams()
    console.log(params)
    const currentCar = cars.find(el => el.id === Number(params.id))
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

