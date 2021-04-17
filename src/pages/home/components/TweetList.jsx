import React from 'react';
import Tweet from "./Tweet";

const TweetList = ({data}) => {
    return (
        <div>
            {data.map(item=>(
                <Tweet dataa={item}/>
            ))}
        </div>
    );
};

export default TweetList;
