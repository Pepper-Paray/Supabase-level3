// Import the structured elements 
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";

// MainLayout component serves as a wrapper for pages, providing a consistent header and footer across the application.
//  It accepts children components that represent the main content of each page.
/**
 * AppLayout wraps pages with a shared header and footer.
 *
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - Page content.
 */
function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;