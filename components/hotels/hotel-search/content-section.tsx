import { Search } from "lucide-react"

export default function ContentSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <a href="#" className="text-blue-600 hover:underline">
          Accueil
        </a>
        <span>›</span>
        <span className="text-gray-600">Hôtels</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-100 p-2 rounded-full">
            <Search className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium">
              Trouvez l&apos;hôtel au meilleur prix pour les dates de votre choix, effectuez une recherche par prix ou
              par préférence
            </h3>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="bg-blue-100 p-2 rounded-full">
            <Search className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium">
              Comparez au même endroit les offres d&apos;hôtel de centaines de prestataires
            </h3>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="bg-blue-100 p-2 rounded-full">
            <Search className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium">
              Recherchez des hôtels proposant l&apos;annulation gratuite ou disposant d&apos;excellentes évaluations
            </h3>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-8">Comparez les hôtels de vos enseignes préférées</h2>
    </div>
  )
}
