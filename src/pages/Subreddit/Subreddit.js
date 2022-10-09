import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Subreddit.css';
import Header from "../../components/Header/Header";
import {Link, useParams} from "react-router-dom";

function Subreddit() {
    // const { subredditId } = useParams();
    // const [postDetails, setPostDetails] = useState({});
    //
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`)
    //             console.log(response.data.data);
    //             setPostDetails(response.data.data);
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     }
    //     fetchData();
    // }, [subredditId]);

    return (
        <>
            <Header>
                <h1>r/{subredditId}</h1>
                <h4>Subreddit specifications</h4>
            </Header>
            {/*<main className="outer-container">*/}
            {/*    <div className="inner-container">*/}
            {/*        <h2 >Title</h2>*/}
            {/*        <p >{postDetails.title}</p>*/}
            {/*        <h2 >Description</h2>*/}
            {/*        <p >{postDetails.public_description}</p>*/}
            {/*        <h2 >Number of subscribers</h2>*/}
            {/*        <p >{postDetails.subscribers}</p>*/}
            {/*        <Link to={"/"}>Take me back</Link>*/}
            {/*    </div>*/}

            {/*</main>*/}
        </>
    );
}

export default Subreddit;