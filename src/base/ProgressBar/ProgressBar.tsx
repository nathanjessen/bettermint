export interface ProgressBarProps {
  progress?: number;
}

export const ProgressBar = ({ progress = 0 }: ProgressBarProps) => {
  return (
    <div className="bg-gray-200 rounded-full overflow-hidden">
      <div className="h-2 bg-indigo-600 rounded-full" style={{ width: progress + '%' }} />
    </div >
  );
};;