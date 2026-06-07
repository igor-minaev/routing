import {Link} from "react-router";
import {adidasShoes} from "../state/adidasShoes";

export const Adidas = () => {
    return (
        <div>
            <h2>Adidas</h2>
            <div style={{display: 'flex', justifyContent:'space-evenly'}}>
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

