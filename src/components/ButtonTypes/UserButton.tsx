import user from '../../assets/img/user.svg';

import { IconButton } from "./buttons/IconButton";
import './userbutton.scss';

export function UserButton(){
    return(
        <div className='nav'>
            <IconButton icon={user}/>
        </div>
    );
}