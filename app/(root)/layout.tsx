import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data={firstName:"Abubakr",lastName:"Khanooni"}
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={data}></Sidebar>
        {children}
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image
            src="/icons/logo.svg"
            height={34}
            width={34}
            alt="menu-icon"
            >

            </Image>
            <div>
            <MobileNav user={data}></MobileNav>
            </div>
          </div>
        </div>
    </main>
  );
}
