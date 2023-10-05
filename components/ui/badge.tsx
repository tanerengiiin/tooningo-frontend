import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  ` text-xs
  group inline-flex items-center justify-center rounded-full p-0 border-0 cursor-pointer relative outline-1 outline outline-transparent outline-offset-2 transition-all duration-150 bg-gradient-to-b from-white/[0.16] to-white/0 bg-[var(--neutral-solid-700)] shadow-[0_0px_0px_1px_var(--neutral-solid-700),0_1px_2px_0px_rgba(13,13,18,0.4)] 
  before:content-[""] before:w-full before:h-full before:absolute before:rounded-full before:top-0 before:left-0 before:bg-[var(--form-button-stroke)] before:bg-gradient-to-b before:from-white/[0.28] before:to-white/0 
  after:content-[""] after:w-[calc(100%-2px)] after:h-[calc(100%-2px)] after:absolute after:top-[1px] after:left-[1px] after:rounded-full after:bg-gradient-to-b after:from-white/[0.09] after:to-white/0 after:bg-[var(--neutral-solid-700)]
  `,
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
          white:
          "bg-[var(--background-white)] shadow-[0_0px_0px_1px_rgba(18,55,105,0.08),0_1px_2px_0px_rgba(164,172,185,0.24)] after:bg-transparent [&>span]:text-[var(--text-muted-600)] hover:[&>span]:before:bg-gradient-to-b hover:from-white/0 hover:to-[rgba(193,199,208,0.08)] hover:bg-white hover:shadow-[0_0px_0px_1px_rgba(18,55,105,0.08),0_1px_2px_0px_rgba(164,172,185,0.24),0_3px_6px_0px_rgba(164,172,185,0.24)] ",
        purple:
          "bg-gradient-to-b from-white/[0.12] to-white/0 bg-[var(--form-button-primary-normal)] shadow-[0_0px_0px_1px_#4F47EB,0_1px_2px_0px_rgba(26,19,161,0.5)] after:bg-gradient-to-b after:from-white/[0.12] after:to-white/0 after:bg-[var(--form-button-primary-normal)] ",
        red: "bg-gradient-to-b from-white/[0.12] to-white/0 bg-[var(--form-button-destructive-normal)] shadow-[0_0px_0px_1px_#B71836,0_1px_2px_0px_rgba(113,14,33,0.5)] after:bg-gradient-to-b after:from-white/[0.12] after:to-white/0 after:bg-[var(--form-button-destructive-normal)]",
        pink: "bg-gradient-to-b from-white/[0.12] to-white/0 bg-[var(--form-button-constructive-normal)] shadow-[0_0px_0px_1px_#E769B4,0_1px_2px_0px_rgba(203,74,151,0.5)] after:bg-gradient-to-b after:from-white/[0.12] after:to-white/0 after:bg-[var(--form-button-constructive-normal)] ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ children, className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      <span
        className={`
                    flex justify-center items-center flex-1 z-[5] py-[2px] px-[6px]   text-white text-center rounded-full transition-all duration-150
                    before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-gradient-to-b before:from-white before:to-white/0 before:opacity-[0.07] before:rounded-full before:transition-all before:duration-150 group-hover:before:opacity-[0.14] 
                    
                    
                    `}
      >
        {children}
      </span>
    </div>
  );
}

export { Badge, badgeVariants };
