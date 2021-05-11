import PropTypes from "prop-types";
import React from "react";
import Header from "../header";

function Layout({ children }) {
  return (
    <div>
      <Header />

      <main>{children}</main>

      {/* <footer className="bg-blue-700">
        <nav className="text-center max-w-4xl mx-auto p-4 md:p-8 text-sm">
          <p className="text-white font-bold">Copyright &copy;</p>
        </nav>
      </footer> */}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
