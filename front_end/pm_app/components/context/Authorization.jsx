'use client';

import { createContext, useState, useEffect } from "react";
import { client } from "@supabase/supabase-js";

const Authorization = createContext(null);

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        client.auth.getSession().then(({data}) => {
            setUser(data?.session?.user || null)
            setLoading(false);
        });
    }, []);
}