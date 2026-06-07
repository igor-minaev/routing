import {Link} from "react-router";
import {pumaShoes} from "../state/pumaShoes";

export const Puma = () => {
    return (
        <div>
            <h2>Puma</h2>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                {pumaShoes.map(el => (
                    <Link key={el.model} to={`/puma/${el.id}`}>
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

