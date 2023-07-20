import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  return (
    <>
      <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
          <h2 className="text-4xl font-black text-center text-white">
            <Link to="/">CRM - Clients</Link>
          </h2>
          <nav className="mt-5 text-white text-center">
            <Link
              className={`${
                location.pathname == "/clients" ? "text-blue-300" : ""
              } hover:text-blue-300 text-2xl block`}
              to="/clients"
            >
              Clients
            </Link>
          </nav>
        </aside>
        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
          <Outlet />
        </main>
      </div>
      <footer className="md:w-1/4 p-2 bg-blue-900 text-white text-center">
        <p>© Esteban Najera Morales</p>
      </footer>
    </>
  );
}

export default Layout;
