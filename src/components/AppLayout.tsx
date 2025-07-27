import React from 'react';
import Layout from './Layout';
import MainContent from './MainContent';

const AppLayout: React.FC = () => {
  return (
    <Layout>
      <MainContent />
    </Layout>
  );
};

export default AppLayout;