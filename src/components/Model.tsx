import {useParams} from "react-router";
import {adidasShoes} from "./Adidas";

export const Model = () => {
    const {id} = useParams()
    const currentModel = adidasShoes.find(el => Number(id) === el.id)
    return (
        <div style={{textAlign:'center'}}>
            {currentModel
                ? <>
                    <h2>{currentModel.model}</h2>
                    <h4>{currentModel.price}</h4>
                    <h3>{currentModel.collection}</h3>
                    <img style={{width:'500px'}} src={currentModel.picture} alt={currentModel.model}/>
                </>
                : <h2>Модель отсутствует</h2>
            }
        </div>
    )
}