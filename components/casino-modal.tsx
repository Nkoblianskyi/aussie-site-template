"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Star } from "lucide-react"
import { getTopCasino } from "@/data/casinos"

export function CasinoModal() {
  const [isOpen, setIsOpen] = useState(false)
  const topCasino = getTopCasino()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000) // Show modal after 8 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const handleModalClick = () => {
    window.open(topCasino.url, "_blank", "noopener,noreferrer")
    setIsOpen(false)
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:min-w-[400px] lg:max-w-[440px]">
        {/* Ribbon banner above card - stretched background image */}
        <div className="absolute -top-2 -left-8 -right-8 z-10">
          <div
            className="relative text-black text-center py-3 px-4 sm:py-4 sm:px-8 font-black text-sm sm:text-base md:text-lg shadow-lg h-12 sm:h-14 md:h-16 flex items-center justify-center w-full"
            style={{
              backgroundImage: "url('/line.png')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <p className="mb-3">EDITOR'S CHOICE THIS WEEK</p>
          </div>
        </div>

        <Card className="bg-gray-900 border-2 border-red-600 w-full relative overflow-hidden mt-6 sm:mt-7 md:mt-8">
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
            }}
            className="absolute top-3 right-3 text-gray-400 hover:text-white z-20"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <CardContent className="p-4 sm:p-6 text-center bg-gray-900">
            {/* Logo */}
            <div className="mb-4 sm:mb-6 mt-3 sm:mt-4">
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-lg mx-auto w-fit">
                <img
                  src={topCasino.logo || "/placeholder.svg"}
                  alt={`${topCasino.name} logo`}
                  className="h-12 sm:h-16 w-auto mx-auto"
                />
              </div>
            </div>

            {/* Bonus */}
            <div className="mb-4 sm:mb-6">
              <p className="text-white text-sm sm:text-base mb-2 font-bold">WELCOME BONUS</p>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
                <span className="text-yellow-400">{topCasino.bonus}</span>
              </div>
            </div>

            {/* Rating */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-lg sm:text-xl font-bold text-white">
                {topCasino.rating.toFixed(1)}
                <span className="text-gray-400 text-sm sm:text-base">/10</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 sm:py-3 text-sm sm:text-base"
              onClick={(e) => {
                e.stopPropagation()
                handleModalClick()
              }}
            >
              GET BONUS
            </Button>

            <p className="text-xs text-gray-500 text-center mt-2 sm:mt-3">* Terms and conditions apply. 18+ only.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
