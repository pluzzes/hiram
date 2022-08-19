import { menuUser} from '../menuUser';
import MenuItems from './MenuItemsUser';
const UserBar = () => {
  return (
    <nav>
      <ul className="menus">
        {menuUser.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default UserBar;
