"use client";

import type React from "react";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-white text-sm font-bold cursor-pointer"
      >
        {title}
        <ChevronDown
          className={`h-5 w-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="mt-2 space-y-2 text-sm">{children}</div>}
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white px-6 py-8 lg:px-8 lg:pt-16">
      <div className="max-w-screen-xl lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="bg-primary-800 rounded-md py-2 px-2 inline-block w-full">
              <span className="text-sm">
                Côte d&apos;Ivoire · français (FR) · F XOF
              </span>
            </div>
          </div>

          <div className="col-span-1">
            <ul className="space-y-4 text-sm font-bold">
              <li>
                <Link href="#" className="hover:underline">
                  Aide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Paramètres de confidentialité
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Se connecter
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <ul className="space-y-4 text-sm font-bold">
              <li>
                <Link href="#" className="hover:underline">
                  Politique en matière de cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Conditions d&apos;utilisation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Coordonnées de la société
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <Dropdown title="Explorer">
              <ul className="space-y-2 pl-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Destinations populaires
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Vols pas chers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Hôtels
                  </Link>
                </li>
              </ul>
            </Dropdown>

            <Dropdown title="Entreprise">
              <ul className="space-y-2 pl-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Carrières
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Presse
                  </Link>
                </li>
              </ul>
            </Dropdown>

            <Dropdown title="Partenaires">
              <ul className="space-y-2 pl-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Affiliés
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Publicité
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    API
                  </Link>
                </li>
              </ul>
            </Dropdown>

            <Dropdown title="Voyages">
              <ul className="space-y-2 pl-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Conseils de voyage
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Actualités
                  </Link>
                </li>
              </ul>
            </Dropdown>

            <Dropdown title="Sites internationaux">
              <ul className="space-y-2 pl-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    France
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Belgique
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Canada
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Suisse
                  </Link>
                </li>
              </ul>
            </Dropdown>
          </div>
        </div>

        <div className="mt-12 text-center text-sm">
          <p>Comparez et réservez des vols pas chers avec Fastosh</p>
          <p>© Fastosh Ltd 2025</p>
        </div>
      </div>
    </footer>
  );
}
