"use client";

import { useState, Children, cloneElement } from "react";

export default function CollapsibleGroup({ defaultOpen, children }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen ?? null);

  return Children.map(children, (child, index) => {
    if (!child) return null;
    return cloneElement(child, {
      isOpen: openIndex === index,
      onToggle: () => setOpenIndex(openIndex === index ? null : index),
    });
  });
}
