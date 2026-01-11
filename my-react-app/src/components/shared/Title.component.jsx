const Title = ({ children, hLevel = 1, className = "" }) => {
    const Tag = `h${hLevel}`;
    return (
      <Tag className={`text-3xl font-bold mb-4 text-primary ${className}`}>
        {children}
      </Tag>
    );
  };
  
  export default Title;
  // The Title component is a reusable heading component that accepts children (the text to display),
  //  an optional hLevel prop to determine the heading level (default is 1 for <h1>),
  //  and an optional className for additional styling.
  // It uses template literals to combine the default styles with any additional classes passed through the className prop,
  //  allowing for flexible styling while maintaining a consistent look across the application.