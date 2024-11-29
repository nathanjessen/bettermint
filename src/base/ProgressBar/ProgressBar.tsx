export interface ProgressBarProps {
  value?: number;
}

export const ProgressBar =  ({ value = 0 }: ProgressBarProps) => {
  return (
    <progress
      value={value}
      max={100}
      className='progress progress-primary w-full'
    />
  );
};
