"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-navy-800 pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default FAQItem;
