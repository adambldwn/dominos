import React from 'react';
import { CustomActivityIndicator } from './CustomActivityIndicator';

export const ContentContainer = ({children,loading}:{children:React.ReactNode,loading:boolean}) =>{
    if(loading){
        return(
            <CustomActivityIndicator/>
        )
    }
    return(
        <>{children}</>
    )
}