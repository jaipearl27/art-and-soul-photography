import { Suspense } from "react";
import Films from "./Films";

export default function page() {
  return (
    <Suspense
      fallback={<div className="pt-[150px] space-y-10">Loading...</div>}
    >
      <Films />
    </Suspense>
  );
}
