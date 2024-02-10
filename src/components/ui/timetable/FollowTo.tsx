"use client"

import {useEffect} from "react";

const FollowTo = () => {
    useEffect(() => {
        document.querySelector("#follow")?.scrollIntoView()
    }, []);
    return (
        <div>
        </div>
    );
};

export default FollowTo;