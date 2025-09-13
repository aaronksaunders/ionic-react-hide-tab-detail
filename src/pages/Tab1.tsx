/**
 * @fileoverview Tab1 component - Main tab page with navigation to detail view
 * This component demonstrates the main tab content and navigation to detail pages
 */

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";

/**
 * Tab1 component - The first tab in the main navigation
 *
 * This component serves as the primary tab page and demonstrates:
 * - Standard Ionic page structure with header and content
 * - Collapsible header for better mobile experience
 * - Navigation card that links to a detail page
 * - How the tab bar remains visible on this page
 *
 * When the user clicks the "View Tab Details" card, they navigate to
 * the CardDetail page where the tab bar will be hidden.
 *
 * @component
 * @returns {JSX.Element} The Tab1 page component
 *
 * @example
 * ```tsx
 * // This component is rendered when navigating to /tab1
 * <Tab1 />
 * ```
 */
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>Tab 1</p>
        {/* Navigation card that demonstrates tab bar hiding functionality */}
        <IonCard routerLink={`/tabs/cards/1`}>
          <IonCardHeader>
            <IonCardTitle>View Tab Details</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
