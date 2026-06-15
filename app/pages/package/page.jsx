import PackagesPage from "@/(components)/layouts/PackagesPage";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <PackagesPage />
    </Suspense>
  );
}