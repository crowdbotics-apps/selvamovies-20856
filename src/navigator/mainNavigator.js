import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList117179Navigator from '../features/ArticleList117179/navigator';
import ArticleList117178Navigator from '../features/ArticleList117178/navigator';
import ArticleList117177Navigator from '../features/ArticleList117177/navigator';
import ArticleList117145Navigator from '../features/ArticleList117145/navigator';
import ArticleList117144Navigator from '../features/ArticleList117144/navigator';
import ArticleList117143Navigator from '../features/ArticleList117143/navigator';
import ArticleList117126Navigator from '../features/ArticleList117126/navigator';
import ArticleList117125Navigator from '../features/ArticleList117125/navigator';
import ArticleList117124Navigator from '../features/ArticleList117124/navigator';
import CalendarView3117121Navigator from '../features/CalendarView3117121/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList117179: { screen: ArticleList117179Navigator },
ArticleList117178: { screen: ArticleList117178Navigator },
ArticleList117177: { screen: ArticleList117177Navigator },
ArticleList117145: { screen: ArticleList117145Navigator },
ArticleList117144: { screen: ArticleList117144Navigator },
ArticleList117143: { screen: ArticleList117143Navigator },
ArticleList117126: { screen: ArticleList117126Navigator },
ArticleList117125: { screen: ArticleList117125Navigator },
ArticleList117124: { screen: ArticleList117124Navigator },
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
