export interface ResetButtonProps {
  onReset?: () => void;
}

export const ResetButton = ({ onReset }: ResetButtonProps) => {
  return (
    <button
      type="button"
      onClick={onReset}
      className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
      Reset
    </button>
  );
};