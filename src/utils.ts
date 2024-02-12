import type { BaseTooltipPlacement } from './types';

export const getTooltipClasses = (placement: BaseTooltipPlacement) => {
  switch (placement) {
    case 'top':
      return 'before:bottom-[100%] before:left-[50%] before:right-[50%] before:-translate-x-2/4 before:border-l-transparent before:border-r-transparent before:border-t-transparent';
    case 'right':
      return 'before:left-[100%] before:top-[50%] before:bottom-[50%] before:-translate-y-2/4  before:border-b-transparent before:border-t-transparent before:border-r-transparent';
    case 'bottom':
      return 'before:top-[100%] before:left-[50%] before:right-[50%] before:-translate-x-2/4 before:border-b-transparent before:border-l-transparent before:border-r-transparent before:border-b-transparent';
    case 'left':
      return 'before:right-[100%] before:top-[50%] before:bottom-[50%] before:-translate-y-2/4  before:border-b-transparent before:border-t-transparent before:border-l-transparent';
  }
};
