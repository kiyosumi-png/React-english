import { createContext, useState } from 'react';

export const FlagContext = createContext({});

const FlagContextProvider = ({ children }) => {
    const [flag, setFlag] = useState(false);

    return (
        <FlagContext.Provider value={{ flag, setFlag }}>
            {children}
        </FlagContext.Provider>
    );
};

export default FlagContextProvider;
