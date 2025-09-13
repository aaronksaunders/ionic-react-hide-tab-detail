/**
 * @fileoverview TabsPage component that handles all tab-related routing and navigation
 * This component demonstrates the main tabs structure with conditional tab bar visibility
 */

import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { ellipse, square, triangle } from "ionicons/icons";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import CardDetail from "./CardDetail";
import { useTabBar } from "../context/TabBarContext";

/**
 * TabsPage component that handles all tab-related routing and navigation
 *
 * This component serves as the main navigation structure for the application and provides:
 * - IonTabs wrapper for tab-based navigation
 * - IonRouterOutlet for rendering tab content and detail pages
 * - IonTabBar with conditional visibility based on context state
 * - Route definitions for all tab pages and detail pages
 * - Default redirect from root to Tab1
 *
 * The tab bar visibility is controlled by the TabBarContext, allowing it to be hidden
 * when navigating to detail pages (like CardDetail) and shown when on main tab pages.
 *
 * @component
 * @returns {JSX.Element} The tabs page component with routing and navigation
 *
 * @example
 * ```tsx
 * // This component is used within the TabBarProvider in App.tsx
 * <TabsPage />
 * ```
 */
const TabsPage: React.FC = () => {
  const { isTabBarVisible } = useTabBar();

  return (
    <IonTabs>
      <IonRouterOutlet>
        {/* Detail page route - tab bar will be hidden when this is active */}
        <Route path="/tabs/cards/:id" component={CardDetail} exact={true} />

        {/* Main tab routes - tab bar will be visible when these are active */}
        <Route exact path="/tab1">
          <Tab1 />
        </Route>
        <Route exact path="/tab2">
          <Tab2 />
        </Route>
        <Route path="/tab3">
          <Tab3 />
        </Route>

        {/* Default redirect to Tab1 */}
        <Route exact path="/">
          <Redirect to="/tab1" />
        </Route>
      </IonRouterOutlet>

      {/* Tab bar with conditional visibility based on context state */}
      <IonTabBar slot="bottom" className={isTabBarVisible ? "" : "ion-hide"}>
        <IonTabButton tab="tab1" href="/tab1">
          <IonIcon aria-hidden="true" icon={triangle} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2">
          <IonIcon aria-hidden="true" icon={ellipse} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3">
          <IonIcon aria-hidden="true" icon={square} />
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default TabsPage;
