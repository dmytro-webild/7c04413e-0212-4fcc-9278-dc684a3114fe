import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import LegalNoticePage from './pages/LegalNoticePage';
import CookiePolicyPage from './pages/CookiePolicyPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />
        <Route path="/aviso-legal" element={<LegalNoticePage />} />
        <Route path="/politica-de-cookies" element={<CookiePolicyPage />} />
      </Route>
    </Routes>
  );
}
