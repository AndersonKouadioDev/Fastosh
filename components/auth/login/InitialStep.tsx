"use client";

import Image from "next/image";
import Logo from "@/components/common/Logo";
import { Button } from "@heroui/react";

interface InitialStepProps {
  onContinueWithEmail: () => void;
  rememberMe: boolean;
  onRememberMeChange: (value: boolean) => void;
}

export default function InitialStep({
  onContinueWithEmail,
  rememberMe,
  onRememberMeChange,
}: InitialStepProps) {
  return (
    <>
      <div className="mb-6 flex justify-center">
        <div className="flex items-center">
          <Logo type="blanc_bleu" />
        </div>
      </div>

      {/* Titre et description */}
      <div className="mb-6 text-center">
        <h2 className="mb-4 text-2xl font-bold">
          Bénéficiez de la meilleure expérience
        </h2>
        <p className="text-foreground/70">
          Suivez les prix, facilitez la planification de votre voyage et
          réservez plus rapidement.
        </p>
      </div>

      {/* Options de connexion */}
      <div className="space-y-3">
        <Button size="lg" onPress={onContinueWithEmail} fullWidth>
          Continuer avec mon adresse e-mail
        </Button>
        <Button
          size="lg"
          onPress={onContinueWithEmail}
          fullWidth
          className="flex items-center"
        >
          <Image
            src="/images/sociaux/facebook.png"
            alt="Facebook"
            width={20}
            height={20}
            className="mr-2"
          />
          Facebook
        </Button>
        <Button
          size="lg"
          onPress={onContinueWithEmail}
          fullWidth
          className="flex items-center"
        >
          <Image
            src="/images/sociaux/google.png"
            alt="Google"
            width={20}
            height={20}
            className="mr-2"
          />
          Google
        </Button>

        <Button
          size="lg"
          onPress={onContinueWithEmail}
          fullWidth
          className="flex items-center"
        >
          <Image
            src="/images/sociaux/apple.png"
            alt="Apple"
            width={20}
            height={20}
            className="mr-2"
          />
          Apple
        </Button>
      </div>

      {/* Se souvenir de moi */}
      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={() => onRememberMeChange(!rememberMe)}
          className="h-4 w-4 rounded border-foreground/30 text-primary focus:ring-primary-600"
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block text-sm text-foreground/70"
        >
          Se souvenir de moi
        </label>
      </div>

      <div className="mt-6 text-sm text-foreground/70">
        <p>
          En continuant, vous acceptez nos{" "}
          <a href="#" className="text-primary hover:underline">
            Conditions d&apos;utilisation
          </a>{" "}
          et notre{" "}
          <a href="#" className="text-primary hover:underline">
            Politique de confidentialité
          </a>
          .
        </p>
      </div>
    </>
  );
}
