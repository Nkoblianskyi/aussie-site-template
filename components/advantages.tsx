import { Gift, CreditCard, Headphones, Shield } from "lucide-react"
import Image from "next/image"

export function Advantages() {
  const advantages = [
    {
      icon: Gift,
      title: "Exclusive Bonuses",
      color: "text-yellow-400",
      bg: "bg-yellow-400/20 border-yellow-400/30",
    },
    {
      icon: CreditCard,
      title: "Fast Payouts",
      color: "text-yellow-400",
      bg: "bg-yellow-400/20 border-yellow-400/30",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      color: "text-yellow-400",
      bg: "bg-yellow-400/20 border-yellow-400/30",
    },
    {
      icon: Shield,
      title: "Licensed & Safe",
      color: "text-blue-500",
      bg: "/flag.png",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-3 max-w-2xl">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div
                className={`inline-flex items-center justify-center w-8 h-8 mb-2`}
              >
                {advantage.title === "Licensed & Safe" ? (
                  <Image src='/flag.png' width={24} height={24} alt={advantage.title} className="h-8 w-8" />
                ) : (
                  <advantage.icon className={`h-8 w-8 ${advantage.color}`} />
                )}
              </div>
              <h3 className="text-xs font-semibold text-white">{advantage.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
