"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Label, Input, Textarea } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/data";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          className="mt-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          className="mt-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
        />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={6}
          className="mt-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about the role or project..."
          required
        />
      </div>
      <Button type="submit" variant="signal" className="w-full sm:w-auto">
        Send message <Send className="h-4 w-4" />
      </Button>
      <p className="text-xs text-ink-faint">
        This opens your email client with the message pre-filled — nothing is sent from here directly.
      </p>
    </form>
  );
}
