"use client";

import Image from "next/image";
import Logo from "@/components/common/Logo";

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
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Bénéficiez de la meilleure expérience
        </h2>
        <p className="text-gray-700">
          Suivez les prix, facilitez la planification de votre voyage et
          réservez plus rapidement.
        </p>
      </div>

      {/* Options de connexion */}
      <div className="space-y-3">
        <button
          className="flex w-full items-center justify-center rounded-md bg-gray-200 px-4 py-3 font-medium text-gray-800 hover:bg-gray-300"
          onClick={onContinueWithEmail}
        >
          Continuer avec mon adresse e-mail
        </button>

        <button className="flex w-full items-center justify-center rounded-md bg-gray-200 px-4 py-3 font-medium text-gray-800 hover:bg-gray-300">
          <Image
            src="/images/sociaux/facebook.png"
            alt="Facebook"
            width={20}
            height={20}
            className="mr-2"
          />
          Facebook
        </button>

        <button className="flex w-full items-center justify-center rounded-md bg-gray-200 px-4 py-3 font-medium text-gray-800 hover:bg-gray-300">
          <Image
            src="/images/sociaux/google.png"
            alt="Google"
            width={20}
            height={20}
            className="mr-2"
          />
          Google
        </button>

        <button className="flex w-full items-center justify-center rounded-md bg-gray-200 px-4 py-3 font-medium text-gray-800 hover:bg-gray-300">
          <Image
            src="/images/sociaux/apple.png"
            alt="Apple"
            width={20}
            height={20}
            className="mr-2"
          />
          Apple
        </button>
      </div>

      {/* Se souvenir de moi */}
      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={() => onRememberMeChange(!rememberMe)}
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block text-sm text-gray-700"
        >
          Se souvenir de moi
        </label>
      </div>

      <div className="mt-6 text-sm text-gray-600">
        <p>
          En continuant, vous acceptez nos{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Conditions d&apos;utilisation
          </a>{" "}
          et notre{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Politique de confidentialité
          </a>
          .
        </p>
      </div>
    </>
  );
}
