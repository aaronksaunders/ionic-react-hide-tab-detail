/**
 * @fileoverview TabBarContext - React Context for managing tab bar visibility state
 * This context provides a centralized way to control tab bar visibility across the application
 */

import React, { createContext, useState, useContext } from "react";

/**
 * Interface defining the shape of the TabBarContext state
 *
 * @interface TabBarContextState
 * @property {boolean} isTabBarVisible - Current visibility state of the tab bar
 * @property {function} setTabBarVisible - Function to update the tab bar visibility state
 */
interface TabBarContextState {
  isTabBarVisible: boolean;
  setTabBarVisible: (isTabBarVisible: boolean) => void;
}

/**
 * React Context for tab bar visibility state
 *
 * This context is created with undefined as the default value to ensure
 * that components using the context are properly wrapped in the provider.
 */
const TabBarContext = createContext<TabBarContextState | undefined>(undefined);

/**
 * TabBarProvider component that provides tab bar visibility state to child components
 *
 * This provider component:
 * - Manages the tab bar visibility state using React's useState hook
 * - Provides the state and setter function to all child components
 * - Serves as the single source of truth for tab bar visibility
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components that will have access to the context
 * @returns {JSX.Element} The provider component with context value
 *
 * @example
 * ```tsx
 * <TabBarProvider>
 *   <TabsPage />
 * </TabBarProvider>
 * ```
 */
export const TabBarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // This is the SINGLE source of truth for the tab bar's visibility.
  const [isTabBarVisible, setTabBarVisible] = useState(true);

  // It passes this state down the "pipe".
  return (
    <TabBarContext.Provider value={{ isTabBarVisible, setTabBarVisible }}>
      {children}
    </TabBarContext.Provider>
  );
};

/**
 * Custom hook to access the TabBarContext
 *
 * This hook provides a convenient way for components to access the tab bar
 * visibility state and the function to update it. It includes error handling
 * to ensure the hook is only used within the TabBarProvider.
 *
 * @returns {TabBarContextState} The tab bar context state and setter function
 * @throws {Error} Throws an error if used outside of TabBarProvider
 *
 * @example
 * ```tsx
 * const { isTabBarVisible, setTabBarVisible } = useTabBar();
 *
 * // Hide the tab bar
 * setTabBarVisible(false);
 *
 * // Check if tab bar is visible
 * if (isTabBarVisible) {
 *   // Tab bar is visible
 * }
 * ```
 */
export const useTabBar = () => {
  const context = useContext(TabBarContext); // Connects to the pipe
  if (context === undefined) {
    throw new Error("useTabBar must be used within a TabBarProvider");
  }
  return context;
};
