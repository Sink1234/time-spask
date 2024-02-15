"use client"
import {useEffect} from "react";

const FollowTo = () => {
    useEffect(() => {
        document.querySelector("#follow")?.scrollIntoView({behavior: "smooth"});
    }, []);
    return (<div></div>);
};

export default FollowTo;