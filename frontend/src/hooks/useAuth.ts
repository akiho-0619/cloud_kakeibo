import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
export function useAuth() {
    const [user, setUser] = useState<User | null | undefined>(undefined);

    useEffect(() => {
        const auth = getAuth();
        return onAuthStateChanged(auth, (u) => setUser(u));
    }, []);

    return user;
}