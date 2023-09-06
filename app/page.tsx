import VosAchat from "@/components/Achat/VosAchat"
import Category from "@/components/Choise/Category"
import Header from "@/components/Header/Header"
import HeaderTow from "@/components/Header/HeaderTow/HeaderTow"
import MiniHeader from "@/components/Header/MiniHeader"
import CarouselSlider from "@/components/Slider/CarouselSlider"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Header />
      <HeaderTow />
      <MiniHeader />
      <CarouselSlider />
      <Category />
      <div>
        <VosAchat />
      </div>
    </div>
  )
}
