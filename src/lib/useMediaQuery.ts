"use client";

import { useSyncExternalStore } from "react";

/**
 * SSR 안전한 미디어쿼리 훅.
 * 서버/첫 렌더에서는 serverDefault(기본 true = 데스크톱)로 그리고, 클라이언트에서 실제 값으로 동기화된다.
 */
export function useMediaQuery(query: string, serverDefault = true) {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => serverDefault
  );
}
