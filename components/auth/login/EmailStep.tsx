"use client"

import { Button } from "@heroui/react"
import { useState, type FormEvent } from "react"

interface EmailStepProps {
  onSubmit: (email: string) => void
  initialEmail: string
}

export default function EmailStep({ onSubmit, initialEmail }: EmailStepProps) {
  const [email, setEmail] = useState(initialEmail)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email) {
      onSubmit(email)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6 pt-4 text-center">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Quelle est votre adresse e-mail ?</h2>

        <div className="mb-6">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Quelle est votre adresse e-mail ?"
            className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          size="lg"
          color="primary"
        >
          Suivant
        </Button>
      </div>
    </form>
  )
}
