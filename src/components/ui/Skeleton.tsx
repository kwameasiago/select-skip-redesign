function Skeleton({
    className = "",
    ...props
  }: React.HTMLAttributes<HTMLDivElement>) {
    return (
      <div
        className={`animate-pulse rounded-md bg-muted ${className}`.trim()}
        {...props}
      />
    )
  }
  
  export { Skeleton }
  