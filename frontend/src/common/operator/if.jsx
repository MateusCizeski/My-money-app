import React from "react";

export default prosp => {
    if(prosp.test){
        return prosp.children
    }else {
        return false
    }
}