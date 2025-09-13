/**
 * @fileoverview Main App component for Ionic React application demonstrating tab bar visibility control
 * This application showcases how to conditionally hide/show tab bars when navigating to detail pages
 */

import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";

// Initialize Ionic React with default configuration
setupIonicReact();

import { TabBarProvider } from "./context/TabBarContext"; // Import provider
import TabsPage from "./pages/TabsPage";

/**
 * Main App component that provides the root structure and context
 *
 * This component serves as the root of the application and provides:
 * - Ionic App wrapper for proper Ionic functionality
 * - React Router for navigation
 * - TabBarProvider context for managing tab bar visibility state
 * - TabsPage component that contains all tab-related routing logic
 *
 * @component
 * @returns {JSX.Element} The root application component
 *
 * @example
 * ```tsx
 * // This component is typically rendered in main.tsx
 * <App />
 * ```
 */
const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <TabBarProvider>
          <TabsPage />
        </TabBarProvider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
