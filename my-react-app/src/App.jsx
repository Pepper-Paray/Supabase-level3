import MainLayout from "@components/layout/MainLayout.jsx";
import TaskList from "@components/tasks/TaskList.jsx";

/**
 * Root App component.
 * This component serves as the entry point of the application, rendering the main layout and task list.
 * It is wrapped in a ThemeProvider in main.jsx to provide theme context to the entire app.
 * The MainLayout component includes a header and footer, while the TaskList component displays the list of tasks.
 *
 * @returns {JSX.Element} The App component.
 */
export default function App() {
  return (
    <MainLayout>
      <TaskList />
    </MainLayout>
  );
}
