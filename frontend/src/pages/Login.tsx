import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
    const user = useAuth();
    const navigate = useNavigate();

    // すでにログイン済みなら / に飛ばす
    useEffect(() => {
        if (user) {
            navigate("/", { replace: true });
        }
    }, [user, navigate]);

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(getAuth(), provider);
        // ここで即 navigate してもいいけど、
        // 上の useEffect が user の変化を検知して飛ばしてくれるので実は不要
    };

    return (
        <div>
            <h1>ログイン</h1>
            <button onClick={handleLogin}>Googleでログイン</button>
        </div>
    );
}