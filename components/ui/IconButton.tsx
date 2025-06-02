import { cn } from "@/lib/utils";

interface IconButtonType {
  icon: React.ReactElement;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
}

export default function IconButton({
  icon,
  onClick,
  className,
}: IconButtonType) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
}
