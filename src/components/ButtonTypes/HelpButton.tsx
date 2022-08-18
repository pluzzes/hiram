import { IconButton } from "./buttons/IconButton";
import help from '../../assets/img/help.svg';

export function HelpButton(){
    return(
        <div className='actions-'>
            <IconButton icon={help}/>
            <label>Ajuda</label>
        </div>

    );
}