import { FooterBanner } from './features/layout/FooterBanner';
import { Header } from './features/layout/Header';
import { Home } from './features/pages/Home';
import { Routes, Route, Link } from 'react-router-dom';
import { Privacy } from './features/pages/Privacy';
import { BuyDomain } from './features/pages/BuyDomain';
import ScrollToTop from './features/layout/ScrollToTop';
import { createBrowserHistory } from 'history'
import { push as Menu } from 'react-burger-menu'
import { useCallback, useState } from 'react';
import { usePageTracking } from './libs/ga/usePageTracking';

const history = createBrowserHistory();

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const toggle = useCallback(() => {
    setIsOpenMenu((previousIsOpenMenu) => !previousIsOpenMenu)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpenMenu(false)
  }, [])

  const handleStateChange = useCallback(({ isOpen }) => {
    setIsOpenMenu(isOpen)
  }, [])

  usePageTracking();

  return (
    <div className="App">
      <div id="outer-container">
        <Menu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          isOpen={isOpenMenu}
          onStateChange={handleStateChange}
        >
          <Link className="menu-item" to="/" onClick={closeMenu}>Read reviews</Link>
          <Link className="menu-item" to="/buy-this-domain" onClick={closeMenu}>Buy this domain</Link>
          <Link className="menu-item" to="/privacy" onClick={closeMenu}>Privacy policy</Link>
        </Menu>
        <main id="page-wrap">
          <Header openMenu={toggle} />
          <ScrollToTop history={history} />
          <Routes history={history}>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/buy-this-domain" element={<BuyDomain />} />
          </Routes>
        </main>
        <FooterBanner toggle={isOpenMenu} />
      </div>
    </div>
  );
}

export default App;
