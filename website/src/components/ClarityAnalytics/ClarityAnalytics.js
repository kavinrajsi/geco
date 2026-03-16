"use client";

import { useEffect } from "react";
import clarity from "@microsoft/clarity";

export default function ClarityAnalytics({ projectId }) {
  useEffect(() => {
    clarity.init(projectId);
  }, [projectId]);

  return null;
}
