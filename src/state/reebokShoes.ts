import type {ShoesType} from "../types/types";
import reebok1 from "../assets/reebok/reebok1.webp";
import reebok2 from "../assets/reebok/reebok2.webp";
import reebok3 from "../assets/reebok/reebok3.webp";

export const reebokShoes: ShoesType[] = [
    {
        id: 1,
        model: 'CLUB C REVENGE',
        collection: 'Some collection',
        price: '200$',
        picture: reebok1
    },
    {
        id: 2,
        model: 'RBK PREMIER ROAD CONTROL',
        collection: 'Some collection',
        price: '150$',
        picture: reebok2
    },
    {
        id: 3,
        model: 'CLASSIC LEATHER',
        collection: 'Some collection',
        price: '250$',
        picture: reebok3
    }
]