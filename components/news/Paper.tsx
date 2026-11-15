import type { ReactNode } from "react";
import { Colophon } from "./Colophon";
import { Masthead } from "./Masthead";

export function Paper({ current, children }: { current?: string; children: ReactNode }) {
  return (
    <>
      <Masthead current={current} />
      <main id="main">{children}</main>
      <Colophon />
    </>
  );
}
