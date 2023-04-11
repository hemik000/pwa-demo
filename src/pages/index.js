import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { useGeolocation, useBattery } from "react-use";
import Geo from "@/components/Geo";

export default function Home() {
  const location = useGeolocation();
  const batteryState = useBattery();
  return (
    <main
      className={`${inter.className} flex min-h-screen flex-col items-center justify-between py-24 lg:px-0 bg-[#FFBF9B]`}
    >
      <Geo />
    </main>
  );
}
