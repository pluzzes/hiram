import logo from '../../assets/img/logo.svg';
import arrow from '../../assets/img/arrow.svg';

import { IconButton } from '../ButtonTypes/buttons/IconButton';
import { UserButton } from '../ButtonTypes/UserButton';
import { SearchButton } from '../ButtonTypes/SearchButton';
import { HelpButton } from '../ButtonTypes/HelpButton';

import './header.scss';

export function Header() {
  return (
        <header>
            <div className="logo">
                <img src={logo} className='logotipo'alt="logo" />
                <IconButton icon={arrow} />
            </div>
            <div className="actions">
                <SearchButton/>
                <HelpButton/>
                <UserButton/>
            </div>
        </header>
    );
}