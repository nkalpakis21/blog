import React, {useEffect, useState, createContext, useContext} from 'react';
import {User} from "../types/user";
import {Subscription} from "../types/subscription";

type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
    isLoading: boolean;
};

export const UserContext = React.createContext<UserContextType | undefined>(undefined);

export interface Props {
    [propName: string]: any;
}

export const MyUserContextProvider = (props: Props) => {
    const [user, setUser] = useState<User | null>(null);

    const loginUser = (user: User) => {
        // make backend call to get access token
        setUser(user);
    }

    const logoutUser = () => {
        // make backend call to log user out
        setUser(null);
    }

    const value = {
        user,
        isLoading: false,
        setUser,
    };

    return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error(`useUser must be used within a MyUserContextProvider.`);
    }

    return context;
};