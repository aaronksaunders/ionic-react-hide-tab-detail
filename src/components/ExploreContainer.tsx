/**
 * @fileoverview ExploreContainer component - Reusable container component for tab content
 * This component provides a standard layout for tab page content with links to Ionic documentation
 */

import "./ExploreContainer.css";

/**
 * Interface defining the props for the ExploreContainer component
 *
 * @interface ContainerProps
 * @property {string} name - The name to display in the container header
 */
interface ContainerProps {
  name: string;
}

/**
 * ExploreContainer component - A reusable container for tab page content
 *
 * This component provides:
 * - A consistent layout for tab page content
 * - Display of the tab name
 * - Link to Ionic UI Components documentation
 * - Standard styling through CSS classes
 *
 * @component
 * @param {ContainerProps} props - Component props
 * @param {string} props.name - The name to display in the container
 * @returns {JSX.Element} The explore container component
 *
 * @example
 * ```tsx
 * <ExploreContainer name="Tab 2 page" />
 * ```
 */
const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Explore{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
