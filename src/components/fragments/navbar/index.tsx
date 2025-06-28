import Styles from './navbar.module.css';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <nav className={Styles.navbar}>
      <div className="container">
        <span className={Styles.navbar_logo}>Zen o</span>
        <Button>Join the Launch List</Button>
      </div>
    </nav>
  )
}