"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Send, Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="navy"
      size="lg"
      disabled={pending}
      className="w-full"
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="w-4 h-4 mr-2" />
          Send Message
        </>
      )}
    </Button>
  );
}

const initialState = {
  success: false,
  message: "",
  errors: {} as Record<string, string[]>,
};

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-navy-800 mb-2">
          Message Received!
        </h3>
        <p className="text-gray-600 text-sm max-w-sm">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.message && !state.success && (
        <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            className={state.errors?.name ? "border-red-400" : ""}
          />
          {state.errors?.name && (
            <p className="text-xs text-red-600">{state.errors.name[0]}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone">Mobile Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="10-digit mobile number"
            className={state.errors?.phone ? "border-red-400" : ""}
          />
          {state.errors?.phone && (
            <p className="text-xs text-red-600">{state.errors.phone[0]}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          className={state.errors?.email ? "border-red-400" : ""}
        />
        {state.errors?.email && (
          <p className="text-xs text-red-600">{state.errors.email[0]}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="subject">Subject *</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="e.g. GST registration, Income Tax filing, Tax Audit..."
          className={state.errors?.subject ? "border-red-400" : ""}
        />
        {state.errors?.subject && (
          <p className="text-xs text-red-600">{state.errors.subject[0]}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Your Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Please describe your requirement in brief..."
          rows={5}
          className={state.errors?.message ? "border-red-400" : ""}
        />
        {state.errors?.message && (
          <p className="text-xs text-red-600">{state.errors.message[0]}</p>
        )}
      </div>

      <p className="text-xs text-gray-400">
        * All fields are required. We respect your privacy and do not share your
        information with third parties.
      </p>

      <SubmitButton />
    </form>
  );
}
