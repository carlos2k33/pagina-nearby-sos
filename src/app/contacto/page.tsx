import Head from 'next/head';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Alarmas Comunitarias | Protección Vecinal</title>
        <meta name="description" content="Sistema de alarmas comunitarias activables desde tu móvil para mayor seguridad vecinal" />
        <meta name="keywords" content="alarmas comunitarias, seguridad vecinal, alertas barrio, protección comunitaria" />
        <meta property="og:title" content="Alarmas Comunitarias | Protección Vecinal" />
        <meta property="og:description" content="Conecta tu vecindario con nuestro sistema de alarmas activables desde tu móvil" />
      </Head>

      <div>
        <Navbar />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}