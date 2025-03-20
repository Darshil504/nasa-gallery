import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#282c34', color: 'white' }}>
      <Link to="/" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/favorites" style={{ color: 'white', textDecoration: 'none' }}>Favorites</Link>
    </nav>
  );
}

export default Navbar;