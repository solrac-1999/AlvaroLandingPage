"use client";

import { Suspense, useCallback } from "react";
import Header from "./Header";
import HeaderSearchParams from "./HeaderSearchParams";

export default function HeaderWrapper() {
  // This callback will be passed to Header to close menu when search params change
  const handleSearchParamsChange = useCallback(() => {
    // The menu close logic is handled inside Header component
  }, []);

  return (
    <>
      {/* Header renders immediately without Suspense */}
      <Header onCloseMenu={handleSearchParamsChange} />
      
      {/* Only the search params hook is wrapped in Suspense */}
      <Suspense fallback={null}>
        <HeaderSearchParams onSearchParamsChange={handleSearchParamsChange} />
      </Suspense>
    </>
  );
}
