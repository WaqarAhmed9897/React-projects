import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
function layout(){
useEffect(()=>{
    onAuthStateChanged(auth,(user) =>{
        
    })
})
    return<div>

    </div>
}