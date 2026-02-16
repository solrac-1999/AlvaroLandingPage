"use client";

import { Suspense } from "react";
import Header from "./Header";
import HeaderSearchParams from "./HeaderSearchParams";

export default function HeaderWrapper() {
  return (
    <>
      {/* Header renders immediately without Suspense */}
      <Header />
      
      {/* Only the search params hook is wrapped in Suspense */}
      <Suspense fallback={null}>
        <HeaderSearchParams />
      </Suspense>
    </>
  );
}
