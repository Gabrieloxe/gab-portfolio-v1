'use client';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider attribute='class' enableSystem={true}>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
