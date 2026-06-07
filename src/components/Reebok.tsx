import {Link} from "react-router";
import {reebokShoes} from "../state/reebokShoes";

export const Reebok = () => {
    return (
        <div>
            <h2>Reebok</h2>
            <div style={{display: 'flex', justifyContent:'space-evenly'}}>
                {reebokShoes.map(el => (
                    <Link key={el.model} to={`/reebok/${el.id}`}>
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

