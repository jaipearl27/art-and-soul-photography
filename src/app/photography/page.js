import { Suspense } from "react";
import Photography from "./Photography";

export default function page() {
  return (
    <Suspense
      fallback={<div className="pt-[150px] space-y-10">Loading...</div>}
    >
      <Photography />
    </Suspense>
  );
}
