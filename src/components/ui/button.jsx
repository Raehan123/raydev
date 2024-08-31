"use client"
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-yellow-300 text-primary hover:bg-yellow-200 hover:text-primary duration-300",
        primary: "bg-primary text-white",
        outline:
          "border border-yellow-300 bg-transparent text-yellow-300 hover:bg-yellow-300 hover:text-primary",
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, download, href, ...props }, ref) => {
    const Comp = asChild ? Slot : href ? "a" : "button";

    const handleClick = () => {
      if (download && href) {
        const link = document.createElement("a");
        link.href = href;
        link.download = download;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        onClick={handleClick}
        href={href}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
