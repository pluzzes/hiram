import { IconButton } from "./buttons/IconButton";
import search from '../../assets/img/search.svg';

export function SearchButton(){
    return(
        <div className='actions-'>
            <IconButton icon={search}/>
            <label>Pesquisar</label>
         </div>

    );
}