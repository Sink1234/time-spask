"use client"

import { useEffect} from "react";



const FollowTo = () => {
    useEffect(() => {
       setTimeout(() => document.querySelector("#follow") ?  document.querySelector("#follow")?.scrollIntoView({behavior: "smooth"}) : document.querySelector("#now")?.scrollIntoView({behavior: "smooth"}), 100)
    }, []);

    return (<div></div>);
};

export default FollowTo;
