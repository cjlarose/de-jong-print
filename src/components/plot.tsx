import * as React from 'react';

export interface PlotProps {};
export const Plot = (props: PlotProps) => {
  return <svg width="600" height="600">
    <circle fill="black" r="3" cx="300" cy="300" />
  </svg>
};
