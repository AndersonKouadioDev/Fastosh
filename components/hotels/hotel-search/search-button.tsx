import { ChevronRight } from "lucide-react"

export default function SearchButton() {
  return (
    <button
      type="button"
      className="w-full h-10 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center"
    >
      Chercher des hôtels
      <ChevronRight className="ml-2 h-4 w-4" />
    </button>
  )
}
