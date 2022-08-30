import React,{useContext, useEffect, useState} from "react";
import {ContentContext} from "./Context"
let Container=()=>{
    const content = useContext(ContentContext);
    useEffect(()=>console.log(content),[content])
    return <div class="content-container">
        {content!=[]?content[0].name:"hello"}
    </div>;
}
export default Container;