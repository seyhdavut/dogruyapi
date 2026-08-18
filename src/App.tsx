/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="kurumsal" element={<About />} />
          <Route path="urunler" element={<Products />} />
          <Route path="urunler/:slug" element={<ProductDetail />} />
          <Route path="iletisim" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
