"use client";

import Image from "next/image";
import bg_5 from "@/public/images/background/bg_5.jpg";
import { Button } from "@heroui/react";

interface SuccessStepProps {
  onClose: () => void;
}

export default function SuccessStep({ onClose }: SuccessStepProps) {
  return (
    <div className="mb-6 pt-4 text-center">
      <div className="mb-6 flex justify-center">
        <Image src={bg_5} alt="Travel Planning" width={150} height={150} />
      </div>

      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Profitez de nos offres, astuces, nouveautés et idées
      </h2>

      <p className="mb-6 text-gray-700">
        Maintenant que vous êtes connecté(e), gardez une longueur d&apos;avance
        en recevant des alertes par e-mail et des notifications.
      </p>

      <div className="space-y-3">
        <Button
          type="submit"
          fullWidth
          size="lg"
          color="primary"
          onPress={onClose}
        >
          Oui, volontiers
        </Button>
        <Button type="submit" fullWidth size="lg" onPress={onClose}>
          Peut-être plus tard
        </Button>
      </div>

      <div className="mt-6 text-sm text-gray-600">
        <p>
          Vous pouvez modifier vos préférences dans votre Profil à tout moment.
          Consultez notre{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Politique de confidentialité
          </a>{" "}
          pour en savoir plus.
        </p>
      </div>
    </div>
  );
}
