import * as React from "react";

export interface DottedSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  dotColor?: string;
  dotSize?: number;
  dotSpacing?: number;
}

export const DottedSurface = React.forwardRef<HTMLDivElement, DottedSurfaceProps>(
  (
    {
      className,
      children,
      dotColor = "#e0e7ef",
      dotSize = 2,
      dotSpacing = 24,
      ...props
    },
    ref
  ) => {
    const background = `repeating-radial-gradient(circle at 0 0, ${dotColor}, ${dotColor} ${dotSize}px, transparent ${dotSize}px, transparent ${dotSpacing}px)`;
    return (
      <div
        ref={ref}
        className={className}
        style={{
          backgroundImage: background,
          backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
          position: "relative",
          width: "100%",
          height: "100%",
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

DottedSurface.displayName = "DottedSurface";
