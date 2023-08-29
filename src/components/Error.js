import {useRouteError} from "react-router-dom"

const Error = ()=>{

    const err = useRouteError();
    return(
        <div className="Rout Error mt-20 bg-gray-100 min-h-screen">
            <h1 className="font-bold text-4xl text-red-500">Oops....</h1>
            <h2 className="text-3xl">Something went wrong....</h2>
            <h2 className="text-3xl">{err.status +" : "+ err.statusText}</h2>
        </div>
    )
}

export default Error;