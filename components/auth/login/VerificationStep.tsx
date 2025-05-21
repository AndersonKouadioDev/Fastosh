"use client";

import { Button, InputOtp } from "@heroui/react";
import type { FormEvent } from "react";

interface VerificationStepProps {
  email: string;
  onSubmit: () => void;
}

export default function VerificationStep({
  email,
  onSubmit,
}: VerificationStepProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6 pt-4">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Continuez avec votre compte
        </h2>

        <p className="mb-6 text-gray-700">
          Utilisez le code de vérification envoyé à <br />
          <strong>{email}</strong> pour vous connecter.
        </p>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Code de vérification à quatre chiffres
          </label>

          <InputOtp length={4} />
        </div>

        <div className="mb-6 text-sm">
          <p>
            Vous n&apos;avez pas reçu le code ?{" "}
            <Button
              variant="light"
              className="hover:underline"
              color="primary"
            >
              Renvoyer le code
            </Button>
          </p>
        </div>
        <Button type="submit" className="w-full" size="lg" color="primary">
          Vérification du code
        </Button>
      </div>
    </form>
  );
}
