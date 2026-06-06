import adidas1 from '../assets/adidas1.webp'
import adidas2 from '../assets/adidas2.webp'
import adidas3 from '../assets/adidas3.webp'
import {Link} from "react-router";

export type ShoesType = {
    id: number
    model: string
    collection: string
    price: string
    picture: string
}

// eslint-disable-next-line react-refresh/only-export-components
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


export const Adidas = () => {
    return (
        <div>
            <h2>Adidas</h2>
            <div style={{display: 'flex', gap: '20px'}}>
                {adidasShoes.map(el => (
                    <Link key={el.model} to={`/adidas/${el.id}`}>
                        <img style={{width: '200px'}} src={el.picture} alt={el.model}/>
                    </Link>
                ))}
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquid autem blanditiis, consectetur eos
                error neque numquam quaerat quibusdam quidem, recusandae rem reprehenderit sapiente sed ut veniam.
                Aperiam cumque cupiditate doloribus impedit necessitatibus nostrum, quam quas totam unde veritatis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquid autem blanditiis, consectetur eos
                error neque numquam quaerat quibusdam quidem, recusandae rem reprehenderit sapiente sed ut veniam.
                Aperiam cumque cupiditate doloribus impedit necessitatibus nostrum, quam quas totam unde veritatis.</p>
        </div>
    );
};

