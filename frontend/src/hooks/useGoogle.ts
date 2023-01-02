import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
import { useGoogleLogin, useGoogleLogout } from "react-google-login";

export default function useGoogle() {
    const [profile, setProfile] = useState<Object>({});
    const clientId: string = import.meta.env.VITE_CLIENT_ID
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: "profile",
            });
        };
        gapi.load("client:auth2", initClient);
    });

    
    const {signIn, loaded} = useGoogleLogin({
        clientId: clientId,
        onSuccess: (res) => setProfile(res.profileObj),
        onFailure: (err) => console.log(err),
        isSignedIn: true,
        cookiePolicy: 'single_host_origin'
    })
    
    const {signOut} = useGoogleLogout({
        clientId: clientId,
        onLogoutSuccess: () => setProfile({}),
        onFailure: () => console.log("Error")
    })

    return {profile, signIn, signOut, loaded}
}