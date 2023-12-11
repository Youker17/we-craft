import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';
import PageWrapper from '@/components/UI/ProgressBar';


export const metadata: Metadata = {
  title: 'Raft',
  description: 'Building the future of banking',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PageWrapper>
          <Layout>{children}</Layout>
        </PageWrapper>
      </body>
    </html>
  );
}
