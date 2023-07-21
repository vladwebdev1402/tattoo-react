export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children: React.ReactNode;
  x: string;
}
