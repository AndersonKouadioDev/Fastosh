"use client";

import { Minus, Plus, ChevronDown } from "lucide-react";

type TravelersDropdownProps = {
  adults: number;
  childs: number;
  childrenAges: number[];
  onAdultsChange: (value: number) => void;
  onChildrenChange: (value: number) => void;
  onChildAgeChange: (index: number, age: number) => void;
  onClose: () => void;
};

export default function TravelersDropdown({
  adults,
  childs,
  childrenAges,
  onAdultsChange,
  onChildrenChange,
  onChildAgeChange,
  onClose,
}: TravelersDropdownProps) {
  return (
    <div className="absolute right-0 top-[calc(100%+4px)] w-full md:w-[400px] bg-white text-black rounded-md shadow-lg z-20">
      <div className="p-4">
        <h3 className="font-bold mb-2">Classe de cabine</h3>
        <p className="text-sm mb-4">
          Pour voir les options pour la classe affaires, la classe économie
          premium et la première classe, veuillez indiquer les dates et la
          destination de votre voyage.
        </p>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h4 className="font-bold">Adultes</h4>
              <p className="text-sm text-gray-600">18 ans et plus</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                onClick={() => onAdultsChange(Math.max(1, adults - 1))}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-4 text-center">{adults}</span>
              <button
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                onClick={() => onAdultsChange(adults + 1)}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h4 className="font-bold">Enfants</h4>
              <p className="text-sm text-gray-600">0 à 17 ans</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                onClick={() => onChildrenChange(Math.max(0, childs - 1))}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-4 text-center">{childs}</span>
              <button
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                onClick={() => onChildrenChange(childs + 1)}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Age selection for childs */}
        {childs > 0 && (
          <div className="mb-6 space-y-4">
            {childrenAges.map((age, index) => (
              <div key={`child-age-${index}`} className="mb-4">
                <h4 className="font-medium mb-2">
                  Âge de l&apos;enfant {index + 1}
                </h4>
                <div className="relative">
                  <select
                    value={age}
                    onChange={(e) =>
                      onChildAgeChange(index, Number.parseInt(e.target.value))
                    }
                    className="w-full p-2 pr-10 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {Array.from({ length: 18 }, (_, i) => i).map(
                      (ageOption) => (
                        <option
                          key={`age-option-${ageOption}`}
                          value={ageOption}
                        >
                          {ageOption}
                        </option>
                      )
                    )}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-sm text-gray-600 mb-4">
          Votre âge à la date du voyage doit être valide pour la catégorie
          d&apos;âge réservée. Les compagnies aériennes imposent des
          restrictions aux passagers de moins de 18 ans voyageant seuls.
        </div>

        <div className="text-sm text-gray-600">
          Les limites d&apos;âge et les politiques en matière de voyage avec des
          enfants peuvent varier, veuillez vérifier avec la compagnie aérienne
          avant la réservation.
        </div>

        <div className="mt-6 flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Appliquer
          </button>
        </div>
      </div>
    </div>
  );
}
