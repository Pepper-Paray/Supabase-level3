import { Checkbox } from "@/components/ui/checkbox";

/**
 * Displays a single task as a list item (read-only on Day 2).
 *
 * @param {object} props
 * @param {{ id: number, title: string, is_complete: boolean, inserted_at?: string }} props.task
 * @param {(id: number) => void} props.onToggleComplete
 * @param {(id: number) => void} props.onDelete
 */

const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
    />
  );
};

export default CustomCheckbox;
// The CustomCheckbox component is a wrapper around the Checkbox component from the UI library.
//  It accepts checked and onChange props to manage its state and behavior. 
// This component can be used in the TaskItem component to display the completion status of a task and allow users to toggle it.