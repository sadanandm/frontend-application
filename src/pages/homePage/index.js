import React from "react";
import logo from "../../component/images/innoloftLogo.svg";
import user from "../../component/images/user.jpg";
import Header from "../../component/header";
import Sidebar from "../../component/sidbar";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="relative min-h-screen md:flex" data-dev-hint="container">
        <Sidebar />
        <main
          id="content"
          className="flex-1 sm:pl-4 pl-2 sm:pr-4 pr-0 bg-gray-100 mt-2 ml-2"
        >
          <div className=" mx-auto">
            <div className="px-3 py-3 sm:px-0">
              <div>
                <div className="block gap-4 sm:flex">
                  <div className="sm:w-7/12 flex flex-col gap-3 w-full">
                    <div className="bg-white p-3 shadow-lg rounded-sm">
                      <h1 className="font-medium text-2xl">Product image</h1>
                      <div className="flex justify-center items-center py-10">
                        <img className="w-60" src={logo} alt="Logo" />
                      </div>
                    </div>
                    <div className="bg-white p-3 shadow-lg rounded-sm">
                      <h1 className="font-medium text-2xl">
                        Product main info
                      </h1>
                      <h1 className="font-medium text-md py-1">
                        Transfer Technology{" "}
                      </h1>
                      <h1 className="font-medium text-md py-1"> Type </h1>
                    </div>
                    <div className="sm:flex  block gap-5">
                      <div className=" w-full ">
                        <button className=" w-full bg-btn text-white font-bold py-2 px-4 rounded">
                          Description tab
                        </button>
                      </div>
                      <div className="w-full">
                        <button className="w-full bg-btn text-white font-bold py-2 px-4 rounded">
                          Attributes tab
                        </button>
                      </div>
                    </div>
                    <div className="bg-white p-3 shadow-lg rounded-sm">
                      <h1 className="font-medium text-2xl">Tab content</h1>
                      <p className="my-1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>

                  <div className=" sm:w-5/12 flex flex-col gap-3 w-full ">
                    <div className="h-2/4 bg-white p-3 shadow-lg rounded-sm">
                      <h1 className="font-medium text-2xl">User info </h1>
                      <div className="mt-2 flex gap-4 items-center">
                        <img
                          className="w-14 rounded-full"
                          src={user}
                          alt="user"
                        />
                        <div className="flex flex-col">
                          <h1 className="font-medium text-xl">Anaïs </h1>
                          <h1 className="font-medium text-base">
                            {" "}
                            Jumpsync Company{" "}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="h-2/4 bg-white p-3 shadow-lg rounded-sm">
                      <h1 className="font-medium text-2xl">Map </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
