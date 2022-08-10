export interface ProgressBarProps {
  progress?: number;
}

export const ProgressBar = ({ progress = 0 }: ProgressBarProps) => {
  return (
    <progress
      value={progress}
      max='100'
      className='progress progress-primary w-full'
    />
  );
};
