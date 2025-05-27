export default function FilterOptions() {
  return (
    <div className="flex items-center space-x-6 text-white">
      <div className="flex items-center space-x-2">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            id="free-cancellation"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="free-cancellation" className="ml-2 text-sm">
            Annulation gratuite
          </label>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            id="4-stars"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="4-stars" className="ml-2 text-sm">
            4 étoiles
          </label>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            id="3-stars"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="3-stars" className="ml-2 text-sm">
            3 étoiles
          </label>
        </div>
      </div>
    </div>
  )
}
