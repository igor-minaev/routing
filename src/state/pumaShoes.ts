import type {ShoesType} from "../types/types";
import puma1 from "../assets/puma/puma1.webp";
import puma2 from "../assets/puma/puma2.webp";
import puma3 from "../assets/puma/puma3.webp";


export const pumaShoes: ShoesType[] = [
    {
        id: 1,
        model: 'Milenio tech 2000',
        collection: 'Some collection',
        price: '200$',
        picture: puma1
    },
    {
        id: 2,
        model: 'Court Classico',
        collection: 'Some collection',
        price: '150$',
        picture: puma2
    },
    {
        id: 3,
        model: 'Suede XL',
        collection: 'Some collection',
        price: '250$',
        picture: puma3
    }
]