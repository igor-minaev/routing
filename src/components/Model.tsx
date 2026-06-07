import {useParams} from "react-router";
import {adidasShoes} from "../state/adidasShoes";
import {pumaShoes} from "../state/pumaShoes";
import {reebokShoes} from "../state/reebokShoes";
import {asicsShoes} from "../state/asicsShoes";
import type {ShoesType} from "../types/types";

type Models = Record<string, ShoesType[]>

const models: Models = {
    adidas: adidasShoes,
    puma: pumaShoes,
    reebok: reebokShoes,
    asics: asicsShoes
}

export const Model = () => {
    const {model, id} = useParams()
    if (!model || !(model in models)) {
        return <h2>Бренд {model} отсутствует</h2>
    }
    const currentModel = models[model].find(el => el.id === Number(id))
    return (
        <div style={{textAlign: 'center'}}>
            {currentModel
                ? <>
                    <h2>{currentModel.model}</h2>
                    <h4>{currentModel.price}</h4>
                    <h3>{currentModel.collection}</h3>
                    <img style={{width: '500px'}} src={currentModel.picture} alt={currentModel.model}/>
                </>
                : <h2>Такой модели не существует</h2>
            }
        </div>
    )
}