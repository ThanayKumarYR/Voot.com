import {lazy} from 'react'

export function lazyLoad(path,namedExport){
    return lazy(()=>{
        const promise = import(/* @vite-ignore */ path)
        if(namedExport==null){
            return promise
        }else{
            return promise.then(module=>({default:module[namedExport]}))
        }
    })
}
