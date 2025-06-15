import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <div className="bg-base-200 min-h-screen">
        <section className="w-10/12 mx-auto ">
          <nav className="py-4">
            <Navbar></Navbar>
          </nav>

          <main className="flex justify-center items-center">
            <Outlet></Outlet>
          </main>
        </section>
      </div>
    </>
  );
};

export default AuthLayout;
