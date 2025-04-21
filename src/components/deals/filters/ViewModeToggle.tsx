
export const ViewModeToggle: React.FC<ViewModeToggleProps> = ({
  viewMode,
  onViewModeChange,
}) => {
  return (
    <div className="hidden md:flex border rounded-md h-10">
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "px-3 h-10 rounded-none flex items-center gap-1",
          viewMode === "list" && "bg-muted"
        )}
        onClick={() => onViewModeChange("list")}
      >
        <LayoutList className="w-4 h-4" />
        <span className="text-xs">List</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "px-3 h-10 rounded-none flex items-center gap-1",
          viewMode === "grid" && "bg-muted"
        )}
        onClick={() => onViewModeChange("grid")}
      >
        <Grid3X3 className="w-4 h-4" />
        <span className="text-xs">Grid</span>
      </Button>
    </div>
  );
};
