import React from "react";
import './Home.css'
import logo from '../../assets/logo.png';
import Header from "../../components/Header/Header";
import axios from "axios";
import {BrowserRouter as Router, Link} from "react-router-dom";

function Home() {
    return (
        <>
        <Header>
            <img src={logo} alt="reddit-logo"/>
            <h1>reddit</h1>
        </Header>
            <main className="outer-container__home">
                <div className="home-div">
                    <section>
                        <h2>Hottest Posts</h2>
                        <p>on <span className="capitalize">reddit</span> right now</p>
                    </section>
                </div>
                <div className="home-div">
                    <section className="hottest-posts__card-section">
                        <ul>
                            <li><article>
                            <h3>Title</h3>
                            <div>
                                got to link
                                <p>comments/ups</p>
                            </div>
                            </article></li>
                                <li><article>
                                    <h3>Title</h3>
                                    <div>
                                        got to link
                                        <p>comments/ups</p>
                                    </div>
                                </article></li>
                                    <li><article>
                                        <h3>Title</h3>
                                        <div>
                                            got to link
                                            <p>comments/ups</p>
                                        </div>
                                    </article></li>
                        </ul>
                    </section>
                </div>


            </main>
        </>
    )
}

export default Home;