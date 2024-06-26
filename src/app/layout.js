
import Authprovider from "@/Components/Authprovider";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "./globals.css";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <Authprovider>
<html lang="en">
      <body>
         <Navbar/>
        
         <main>
         {children}
         </main>
        <Footer/>
        </body>
    </html>
    </Authprovider>
    
  );
}
