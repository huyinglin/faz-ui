import { TooltipProps } from '../Tooltip/interface';

export interface PopoverProps extends Partial<TooltipProps> {
  content: React.ReactNode;
}
