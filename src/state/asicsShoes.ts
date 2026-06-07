import type {ShoesType} from "../types/types";
import asics1 from "../assets/asics/asics1.webp";
import asics2 from "../assets/asics/asics2.webp";
import asics3 from "../assets/asics/asics3.webp";

export const asicsShoes: ShoesType[] = [
    {
        id: 1,
        model: 'GEL-1130',
        collection: 'COURT FF 3',
        price: '200$',
        picture: asics1
    },
    {
        id: 2,
        model: 'RBK PREMIER ROAD CONTROL',
        collection: 'Some collection',
        price: '150$',
        picture: asics2
    },
    {
        id: 3,
        model: 'GEL-NIMBUS 28 SUNNY SIZZLE',
        collection: 'Some collection',
        price: '250$',
        picture: asics3
    }
]