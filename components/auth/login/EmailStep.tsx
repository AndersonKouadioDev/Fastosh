"use client";

import { Button } from "@heroui/react";
import { useState, type FormEvent } from "react";

interface EmailStepProps {
  onSubmit: (email: string) => void;
  initialEmail: string;
}

export default function EmailStep({ onSubmit, initialEmail }: EmailStepProps) {
  const [email, setEmail] = useState(initialEmail);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubmit(email);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6 pt-4 text-center">
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          Quelle est votre adresse e-mail ?
        </h2>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-foreground/70"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Quelle est votre adresse e-mail ?"
            className="w-full rounded-md border border-foreground/30 p-3 focus:border-primary focus:outline-none focus:ring-primary/600"
            required
          />
        </div>

        <Button type="submit" fullWidth size="lg" color="primary">
          Suivant
        </Button>
      </div>
    </form>
  );
}
