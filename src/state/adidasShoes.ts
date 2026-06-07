import type {ShoesType} from "../types/types";
import adidas1 from '../assets/adidas/adidas1.webp'
import adidas2 from '../assets/adidas/adidas2.webp'
import adidas3 from '../assets/adidas/adidas3.webp'

export const adidasShoes: ShoesType[] = [
    {
        id: 1,
        model: 'SAMBA ADV',
        collection: 'Some collection',
        price: '200$',
        picture: adidas1
    },
    {
        id: 2,
        model: 'Ligra 8 M',
        collection: 'Some collection',
        price: '150$',
        picture: adidas2
    },
    {
        id: 3,
        model: 'CRAZYCHAOS 2000',
        collection: 'Some collection',
        price: '250$',
        picture: adidas3
    }
]