import { ReactNode } from "react";



export const Button = ({onClick, children } : {onClick : () => void, children : ReactNode}) => {
    return <button onClick={onClick} className="bg-green-600 px-6 py-2 rounded-md text-white w-full text-2xl">{children}</button>

}