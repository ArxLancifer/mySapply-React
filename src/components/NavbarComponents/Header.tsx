import React, {useContext} from 'react';
import TopNavbar from './TopNavbar';
import AuthContext from "../store/auth/AuthContext";
import UserAvatar from "../profile/UserAvatar";

function Header() {
    const {isLoggedIn} = useContext(AuthContext);
    return (
        <div>
            {!isLoggedIn
                ? <TopNavbar/>
                : <UserAvatar />
            }
        </div>
    )
}

export default Header
