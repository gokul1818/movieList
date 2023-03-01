import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
     <Link href='/'> <div className={classes.logo}> Movies  </div></Link>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link href='/WatchList'>WatchList</Link>
          </li>
          <li>
            <Link href='/Watched'>Watched</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
