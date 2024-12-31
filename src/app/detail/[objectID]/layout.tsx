import Footer from "@/components/Footer/Footer";
import TopHeader from "@/components/TopHeader/TopHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
      <>
    <TopHeader />
          {children}
    <Footer/>
</>
 
   
  );
}
