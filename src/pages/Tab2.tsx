/**
 * @fileoverview Tab2 component - Second tab in the main navigation
 * This component demonstrates a standard tab page with explore container
 */

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";

/**
 * Tab2 component - The second tab in the main navigation
 *
 * This component demonstrates:
 * - Standard Ionic page structure with header and content
 * - Collapsible header for better mobile experience
 * - Integration with ExploreContainer component
 * - How the tab bar remains visible on this page
 *
 * This is a standard tab page that shows the tab bar is visible
 * when navigating between main tab pages.
 *
 * @component
 * @returns {JSX.Element} The Tab2 page component
 *
 * @example
 * ```tsx
 * // This component is rendered when navigating to /tab2
 * <Tab2 />
 * ```
 */
const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
