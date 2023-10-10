import './global.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
export const metadata = {
  title: 'Welcome to Tecbiz Solutions',
  description: 'Tech meets business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
        <Header />{children}<Footer />
        </div>
      </body>
    </html>
  );
}
