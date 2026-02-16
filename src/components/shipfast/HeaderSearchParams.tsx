"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface HeaderSearchParamsProps {
  onSearchParamsChange: () => void;
}

export default function HeaderSearchParams({ onSearchParamsChange }: HeaderSearchParamsProps) {
  const searchParams = useSearchParams();

  useEffect(() => {
    onSearchParamsChange();
  }, [searchParams, onSearchParamsChange]);

  return null;
}
