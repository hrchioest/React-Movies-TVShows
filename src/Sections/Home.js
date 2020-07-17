import React from 'react';
import "../App.scss";

const Home = props => {
    return (
        <section>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Películas</li>
                    <li>Series</li>
                </ul>
                <input type="text" Placeholder="Búsqueda..." />
            </nav>

            <div>
                <a>
                    <h2>Películas que son tendencia</h2>
                    <i></i>
                </a>
                <div>Card divina</div>
            </div>

            <div>
                <a>
                    <h2>Series que son tendencia</h2>
                    <i></i>
                </a>
                <div>Card bella</div>
            </div>
            
        </section>
    )
};

export default Home;