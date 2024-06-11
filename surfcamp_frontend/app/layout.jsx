import "./../sass/main.scss";
import Header from "./_components/Layout/Header";
import Footer from "./_components/Layout/Footer";

export const metadata = {
  title: "Andrés's Surf Camp",
  description: "Website for Andrés's Surf Camp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
