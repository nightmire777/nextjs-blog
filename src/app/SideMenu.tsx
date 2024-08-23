import { useState } from 'react';
import Link from 'next/link';
import './sidebar.css';
import { FaWallet, FaMoneyBillWave, FaCreditCard, FaUser } from 'react-icons/fa';

export const SideMenu = () => {
  const [active, setActive] = useState<number>(0);

  const goto = (index: number) => setActive(index);

  return (
    <aside className="sidebar">
      <div className="inner">
        <div className="header">
          <img src="/logo.jpg" alt="Logo" className="logo" />
          <h1>MetaPay</h1>
        </div>
        <nav
          className="menu"
          style={{
            "--top": `${active === 0 ? 0 : active * 56}px`,
          } as any}
        >
          <Link href="/" passHref>
            <button
              className={active === 0 ? "active" : ""}
              onClick={() => goto(0)}
            >
              <FaWallet size={20} />
              <p>Wallet</p>
            </button>
          </Link>

          <Link href="/pocket" passHref>
            <button
              className={active === 1 ? "active" : ""}
              onClick={() => goto(1)}
            >
              <FaMoneyBillWave size={20} />
              <p>Pocket</p>
            </button>
          </Link>

          <Link href="/view-card" passHref>
            <button
              className={active === 2 ? "active" : ""}
              onClick={() => goto(2)}
            >
              <FaCreditCard size={20} />
              <p>View Card</p>
            </button>
          </Link>

          <Link href="/profile" passHref>
            <button
              className={active === 3 ? "active" : ""}
              onClick={() => goto(3)}
            >
              <FaUser size={20} />
              <p>Profile</p>
            </button>
          </Link>
        </nav>
      </div>
    </aside>
  );
};
