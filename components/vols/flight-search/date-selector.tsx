"use client";

import { DatePicker } from "@heroui/react";

type DateSelectorProps = {
  label: string;
  isVisible?: boolean;
};

export default function DateSelector({
  label,
  isVisible = true,
}: DateSelectorProps) {
  if (!isVisible) {
    return <></>;
  }
  return (
    <DatePicker
      classNames={{
        label: "text-sm font-medium",
      }}
      radius="sm"
      size="lg"
      label={label}
    />
  );
}
