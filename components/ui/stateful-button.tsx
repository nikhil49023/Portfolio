"use client";

import * as React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { ImSpinner2 } from "react-icons/im";
import { cn } from "@/lib/utils";

// mock async code hook
export const useStatus = ({ resolveTo }: { resolveTo: "success" | "error" }) => {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = () => {
    setStatus("loading");
    setTimeout(() => {
      setStatus(resolveTo);
      // Auto reset back to idle after 3.5s
      setTimeout(() => {
        setStatus("idle");
      }, 3500);
    }, 1800);
  };

  return {
    onSubmit,
    status,
    setStatus,
  };
};

export interface StatefulButtonProps extends ButtonProps {
  idleText?: string;
  resolveTo?: "success" | "error";
  onAction?: () => Promise<void> | void;
}

export function StatefulButton_1({
  idleText = "Click me",
  resolveTo = "success",
  onAction,
  ...rest
}: StatefulButtonProps) {
  const { status, onSubmit } = useStatus({ resolveTo });

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (rest.onClick) {
      rest.onClick(e);
    }
    if (onAction) {
      await onAction();
    }
    onSubmit();
  };

  return (
    <Button
      disabled={status === "loading"}
      onClick={handleClick}
      {...rest}
      variant={status === "error" ? "destructive" : rest.variant}
      className={cn(
        "min-w-36 rounded-lg overflow-hidden transition-all font-mono",
        rest.className
      )}
    >
      <AnimatePresence mode="wait">
        {/* //------------------------------IDLE */}
        {status === "idle" && (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -15,
              transition: { duration: 0.2, type: "spring" },
            }}
            className="flex items-center gap-1.5"
          >
            {idleText}
          </motion.span>
        )}

        {/* //------------------------------LOADING */}
        {status === "loading" && (
          <motion.span
            key="loading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -15, transition: { duration: 0.2 } }}
            className="flex items-center gap-1.5"
          >
            <ImSpinner2 className="animate-spin" size={17} />
          </motion.span>
        )}

        {/* //------------------------------RESOLVED */}
        {["success", "error"].includes(status) && (
          <motion.span
            key={status}
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { delay: 0.05, duration: 0.3 },
            }}
            exit={{ opacity: 0, y: -15, transition: { duration: 0.2 } }}
            className="flex items-center gap-1.5"
          >
            {status === "success" && <FaCircleCheck size={18} className="text-emerald-400" />}
            {status === "error" && <FaCircleXmark size={18} className="text-rose-400" />}
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}

export function StatefulButtonDemo() {
  return (
    <div className="flex items-center gap-3">
      <StatefulButton_1 idleText="Run Benchmark" resolveTo="success" />
      <StatefulButton_1 idleText="Simulate Error" resolveTo="error" variant="outline" />
    </div>
  );
}

export default StatefulButton_1;
