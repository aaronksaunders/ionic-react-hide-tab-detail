# Ionic React Tab Bar Visibility Demo

This project demonstrates how to conditionally hide and show the tab bar in an Ionic React application when navigating between main tab pages and detail pages.

## 🎯 What This Project Demonstrates

This application showcases a common mobile app pattern where:
- **Tab bar is visible** when users are on main tab pages (Tab1, Tab2, Tab3)
- **Tab bar is hidden** when users navigate to detail pages (CardDetail)
- **Tab bar reappears** when users navigate back to main tab pages

## 🚀 Key Features

### 1. **Conditional Tab Bar Visibility**
- Uses React Context to manage tab bar visibility state globally
- Tab bar automatically hides when entering detail pages
- Tab bar automatically shows when returning to main tabs

### 2. **Ionic Lifecycle Hooks**
- Demonstrates proper use of `useIonViewWillEnter` and `useIonViewWillLeave`
- Ensures smooth transitions and proper state management

### 3. **Clean Architecture**
- Separated concerns with dedicated components
- Context-based state management
- TypeScript throughout for type safety

### 4. **Navigation Flow**
- Main tabs → Detail page → Back to main tabs
- Proper back button functionality
- URL-based routing with React Router

## 🏗️ Project Structure

```
src/
├── App.tsx                 # Root component with context providers
├── pages/
│   ├── TabsPage.tsx       # Main tabs container with routing
│   ├── Tab1.tsx           # First tab with navigation card
│   ├── Tab2.tsx           # Second tab with explore container
│   ├── Tab3.tsx           # Third tab with explore container
│   └── CardDetail.tsx     # Detail page that hides tab bar
├── context/
│   └── TabBarContext.tsx  # Context for tab bar visibility state
└── components/
    └── ExploreContainer.tsx # Reusable container component
```

## 🔧 Technical Implementation

### Context-Based State Management
```typescript
// TabBarContext provides global state for tab bar visibility
const { isTabBarVisible, setTabBarVisible } = useTabBar();
```

### Lifecycle Hook Integration
```typescript
// Hide tab bar when entering detail page
useIonViewWillEnter(() => {
  setTabBarVisible(false);
});

// Show tab bar when leaving detail page
useIonViewWillLeave(() => {
  setTabBarVisible(true);
});
```

### Conditional Rendering
```typescript
// Tab bar with conditional visibility
<IonTabBar 
  slot="bottom" 
  className={isTabBarVisible ? "" : "ion-hide"}
>
```
## Author

Created by Aaron K. Saunders

- 🎥 [YouTube Channel](https://www.youtube.com/channel/UCMCcqbJpyL3LAv3PJeYz2bg/)
- 🐦 [Twitter](https://x.com/aaronksaunders)
- 💼 [LinkedIn](https://www.linkedin.com/in/aaronksaunders/)
- 🌐 [GitHub](https://github.com/aaronksaunders)

## 🎮 How to Use

1. **Start the application**:
   ```bash
   npm start
   ```

2. **Navigate the app**:
   - Click on different tabs (Tab1, Tab2, Tab3) - tab bar remains visible
   - Click "View Tab Details" card on Tab1 - tab bar disappears
   - Use the back button - tab bar reappears

3. **Observe the behavior**:
   - Tab bar visibility changes smoothly during navigation
   - State is properly managed across page transitions
   - Back navigation works correctly

## 🛠️ Technologies Used

- **Ionic React** - Mobile-first UI framework
- **React Router** - Client-side routing
- **React Context** - State management
- **TypeScript** - Type safety
- **Ionicons** - Icon library

## 📱 Mobile-First Design

This demo is optimized for mobile devices and demonstrates:
- Touch-friendly navigation
- Proper mobile page transitions
- Responsive design patterns
- Native-like user experience

## 🎨 Styling

The project uses:
- Ionic's built-in CSS variables
- Custom CSS for specific components
- Dark mode support (system preference)
- Responsive design principles

## 🔍 Key Learning Points

1. **Context Pattern**: How to use React Context for global state management
2. **Lifecycle Hooks**: Proper use of Ionic's navigation lifecycle hooks
3. **Conditional Rendering**: Dynamic UI based on application state
4. **Component Architecture**: Clean separation of concerns
5. **TypeScript Integration**: Type-safe React development

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your browser and navigate to the provided URL
5. Test the tab bar visibility functionality

## 📝 Code Quality

- **JSDoc Comments**: Comprehensive documentation for all components
- **TypeScript**: Full type safety throughout the application
- **Clean Code**: Well-structured and maintainable codebase
- **Best Practices**: Follows React and Ionic best practices

This project serves as a practical example of implementing conditional tab bar visibility in Ionic React applications, a common requirement in mobile app development.
