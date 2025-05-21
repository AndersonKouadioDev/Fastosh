"use client";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import InitialStep from "./InitialStep";
import EmailStep from "./EmailStep";
import VerificationStep from "./VerificationStep";
import SuccessStep from "./SuccessStep";

interface LoginModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: (open: boolean) => void;
}

export type LoginStep = "initial" | "email" | "verification" | "success";

export default function LoginModal({ isOpen, onOpenChange }: LoginModalProps) {
  const [loginStep, setLoginStep] = useState<LoginStep>("initial");
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  if (!isOpen) return null;

  const handleEmailSubmit = (submittedEmail: string) => {
    setEmail(submittedEmail);
    setLoginStep("verification");
  };

  const handleVerificationSubmit = () => {
    setLoginStep("success");
  };

  const handleBackClick = () => {
    if (loginStep === "verification") {
      setLoginStep("email");
    } else if (loginStep === "email") {
      setLoginStep("initial");
    } else if (loginStep === "success") {
      setLoginStep("verification");
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {/* Bouton de retour */}
              {loginStep !== "initial" && (
                <button
                  onClick={handleBackClick}
                  className="absolute left-4 top-4 text-gray-500 hover:text-gray-700"
                  aria-label="Retour"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}
            </ModalHeader>
            <ModalBody>
              {/* Étapes du processus de connexion */}
              {loginStep === "initial" && (
                <InitialStep
                  onContinueWithEmail={() => setLoginStep("email")}
                  rememberMe={rememberMe}
                  onRememberMeChange={setRememberMe}
                />
              )}

              {loginStep === "email" && (
                <EmailStep onSubmit={handleEmailSubmit} initialEmail={email} />
              )}

              {loginStep === "verification" && (
                <VerificationStep
                  email={email}
                  onSubmit={handleVerificationSubmit}
                />
              )}

              {loginStep === "success" && <SuccessStep onClose={onClose} />}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
