import React,{useCallback} from "react";
import {useMemo} from "react";
import { useState } from "react";
import Child from "./Child";

const UseMemo = () => {
    const [count,setCount] = useState(0);
 
function handelClick(){
    setCount(count+1);
}

function sum(){
    console.log("sum function called");
    let sum =0;
    for(let i=0;i<1000000000;i++){
        sum +=i;
    }
    return sum;
}
 const res = useMemo(sum,[]);
 