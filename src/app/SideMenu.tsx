import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaWallet, FaMoneyBillWave, FaCreditCard, FaUser } from 'react-icons/fa';
import './sidebar.css';

export const SideMenu = () => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    // Update activeIndex based on the current pathname
    switch (pathname) {
      case '/':
        setActiveIndex(0);
        break;
      case '/pocket':
        setActiveIndex(1);
        break;
      case '/view-card':
        setActiveIndex(2);
        break;
      case '/profile':
        setActiveIndex(3);
        break;
      default:
        setActiveIndex(0);
    }
  }, [pathname]);

  return (
    <aside className="sidebar">
      <div className="inner">
        <div className="header">
          <img src="/logo.jpg" alt="Logo" className="logo" />
          <h1>MetaPayd</h1>
        </div>
        <nav
          className="menu"
          style={{
            '--top': `${activeIndex * 56}px`,
          } as React.CSSProperties} // Applying style dynamically with React.CSSProperties
        >
          <Link href="/" passHref>
            <button className={activeIndex === 0 ? 'active' : ''}>
              <FaWallet size={20} />
              <p>Wallet</p>
            </button>
          </Link>

          <Link href="/pocket" passHref>
            <button className={activeIndex === 1 ? 'active' : ''}>
              <FaMoneyBillWave size={20} />
              <p>Pocket</p>
            </button>
          </Link>

          <Link href="/view-card" passHref>
            <button className={activeIndex === 2 ? 'active' : ''}>
              <FaCreditCard size={20} />
              <p>View Card</p>
            </button>
          </Link>

          <Link href="/profile" passHref>
            <button className={activeIndex === 3 ? 'active' : ''}>
              <FaUser size={20} />
              <p>Profile</p>
            </button>
          </Link>
        </nav>
      </div>
    </aside>
  );
};
