import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList117124Navigator from '../features/ArticleList117124/navigator';
import SignUp11117123Navigator from '../features/SignUp11117123/navigator';
import Settings2117122Navigator from '../features/Settings2117122/navigator';
import CalendarView3117121Navigator from '../features/CalendarView3117121/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList117124: { screen: ArticleList117124Navigator },
SignUp11117123: { screen: SignUp11117123Navigator },
Settings2117122: { screen: Settings2117122Navigator },
CalendarView3117121: { screen: CalendarView3117121Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
