import { createContext, useContext, useState } from "react";


const BooksContext = createContext();

function Provider ({children}) {
        const [count, setCount] = useState(5);

        const valueToShare={
            count,
            incrementCount:() =>{
                setCount(count+1);
            },
        };

}

export { Provider}
export default BooksContext;