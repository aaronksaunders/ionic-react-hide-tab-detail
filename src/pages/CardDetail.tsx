/**
 * @fileoverview CardDetail component - Detail page that demonstrates tab bar hiding
 * This component showcases how to hide the tab bar when navigating to detail pages
 */

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  useIonViewWillEnter,
  useIonViewWillLeave,
} from "@ionic/react";
import { useParams } from "react-router-dom";
import { useTabBar } from "../context/TabBarContext"; // Import our custom hook

/**
 * CardDetail component - A detail page that demonstrates tab bar hiding functionality
 *
 * This component showcases the core functionality of the application:
 * - Hides the tab bar when entering the detail page
 * - Shows the tab bar when leaving the detail page
 * - Uses Ionic lifecycle hooks for proper state management
 * - Provides navigation back to the main tabs
 *
 * The component uses useIonViewWillEnter and useIonViewWillLeave hooks to
 * control tab bar visibility at the appropriate times during navigation.
 *
 * @component
 * @returns {JSX.Element} The CardDetail page component
 *
 * @example
 * ```tsx
 * // This component is rendered when navigating to /tabs/cards/:id
 * <CardDetail />
 * ```
 */
const CardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { setTabBarVisible } = useTabBar(); // Get the setter function

  /**
   * Hide the tab bar when entering this detail page
   * This hook fires right before the page transition begins
   */
  useIonViewWillEnter(() => {
    setTabBarVisible(false);
  });

  /**
   * Show the tab bar when leaving this detail page
   * This hook fires right as the user is leaving the page
   */
  useIonViewWillLeave(() => {
    setTabBarVisible(true);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {/* The back button will work perfectly, taking you back to Tab1 */}
            <IonBackButton defaultHref="/tabs/tab1" />
          </IonButtons>
          <IonTitle>Card {id}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Details for card {id}. The tab bar is hidden!</p>
      </IonContent>
    </IonPage>
  );
};

export default CardDetail;
