import React from 'react';
import Nav from "./Nav";

function Layout({children}) {
  return (
    <>
      <Nav/>
      <div>
        <main>
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;