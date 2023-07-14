import { createContext, useState } from 'react';
const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [account, setAccount] = useState({ name: "", email: "", role: "" });
    return (
        <DataContext.Provider value={{ account, setAccount }}>
            {children}
        </DataContext.Provider>
    )

};

export default DataProvider;