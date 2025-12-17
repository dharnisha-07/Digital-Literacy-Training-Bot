import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import InfoCards from '@/components/InfoCards';

export default function Home() {
  return (
    <Layout
      backgroundImage='linear-gradient(rgba(115, 1, 1, 0.40), rgba(145, 5, 8, 0.40)), url("/images/homepage img.png")'
      backgroundSize="100% 100%"
    >
      <Hero />
      <InfoCards />
      <div style={{ height: '100px' }}></div> {/* Spacing */}
    </Layout>
  );
}
