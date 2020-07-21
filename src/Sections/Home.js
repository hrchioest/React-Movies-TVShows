import React from 'react';
import Card from "../Components/Card";
import "../App.scss";

const Home = () => {
    return (
        <section id="home">
            <nav className="header-nav">
                <ul>
                    <li>Home</li>
                    <li>Películas</li>
                    <li>Series</li>
                </ul>
                <input type="text" Placeholder="Búsqueda..." />
            </nav>

            <div className="list-home">
                <a href="#">
                    <h2>Películas que son tendencia</h2>
                    <i></i>
                </a>
                <div>
                    <Card />
                </div>
            </div>

            <div className="list-home">
                <a href="#">
                    <h2>Series que son tendencia</h2>
                    <i></i>
                </a>
                <div>
                    <Card />
                </div>
            </div>

        </section>
    )
};

export default Home;