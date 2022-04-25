import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDetails } from "../../component/store/action";
import { productId } from "../../component/constant";
import ReactHtmlParse from "html-react-parser";
import logo from "../../component/images/innoloftLogo.svg";
import user from "../../component/images/user.jpg"; 
import EditAttributes from "../../component/editAttributes";
import Header from "../../component/header";
import Sidebar from "../../component/sidbar";
export default function Product() {
  //  open the edit form inside the attribute  tab

  const [editOpen, setEditOpen] = useState(true);

  // openTab state change the tab if open set True open the discription tab
  const [openTab, setOpenTab] = useState(true);

  const dispatch = useDispatch();

  //  productData  all product data in productData variable
  const productDeails = useSelector((state) => state?.reducer?.productData);

  // if updata data success set true other wish false
  const success = useSelector((state) => state?.reducer?.success);

  // hide and show user Info  using  configuration
  const configuration = useSelector((state) => state?.reducer?.configuration);

  //  set address details
  const address = productDeails?.company?.address;
  // productDeails method is actios method call the get api and set result in redux store
  useEffect(() => {
    if (!success) {
      dispatch(productDetails(productId));
    }
    setOpenTab(true);
    setEditOpen(true);
  }, [success]);

  return (
    <>
      {configuration?.mainColor && (
        <div>
          <Header />
          <div
            className="relative min-h-screen md:flex"
            data-dev-hint="container"
          >
            <Sidebar />
            <main
              id="content"
              className="flex-1 sm:pl-4 pl-2 sm:pr-4 pr-0 bg-gray-100 mt-2 ml-2"
            >
              <div className=" mx-auto">
                <div className="px-3 py-3 sm:px-0">
                  <div>
                    {productDeails?.picture && configuration?.mainColor && (
                      <div>
                        <div className="block gap-4 sm:flex">
                          <div className="sm:w-7/12 flex flex-col gap-3 w-full">
                            <div className="bg-white p-3 shadow-lg rounded-sm">
                              <h1 className="font-medium text-2xl">
                                Product image
                              </h1>
                              <div className="flex justify-center items-center py-10">
                                <img
                                  className="w-60"
                                  src={
                                    productDeails?.picture
                                      ? productDeails?.picture
                                      : logo
                                  }
                                  alt="Logo"
                                />
                              </div>
                            </div>
                            <div className="bg-white p-3 shadow-lg rounded-sm">
                              <h1 className="font-medium text-2xl">
                                Product main info
                              </h1>
                              <h1 className="font-medium text-md py-1">
                                {productDeails?.name}{" "}
                              </h1>
                              <h1 className="font-medium text-md py-1">
                                {productDeails?.type?.name}
                              </h1>
                            </div>
                            <div className="sm:flex  block gap-5">
                              <div className=" w-full ">
                                <button
                                  className="w-full bg-btn text-white font-bold py-2 px-4 rounded"
                                  onClick={() => setOpenTab(true)}
                                >
                                  Description tab
                                </button>
                              </div>
                              <div className="w-full">
                                <button
                                  className="w-full bg-btn text-white font-bold py-2 px-4 rounded"
                                  onClick={() => setOpenTab(false)}
                                >
                                  Attributes tab
                                </button>
                              </div>
                            </div>
                            <div className="bg-white p-3 shadow-lg rounded-sm mb-28">
                              {openTab === false ? (
                                <div>
                                  <div className="mb-2 float-right">
                                    <button
                                      className="w-auto bg-btn text-white font-bold py-2 px-4 rounded"
                                      onClick={() => setEditOpen(false)}
                                    >
                                      Edit
                                    </button>
                                    {!editOpen && (
                                      <div className="mb-2 ml-2 float-right">
                                        <button
                                          className="w-auto bg-red-600 text-white font-bold py-2 px-4 rounded"
                                          onClick={() => setEditOpen(true)}
                                        >
                                          Cancel
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ) : null}
                              <h1 className="font-medium text-2xl">
                                Tab content
                              </h1>

                              {openTab ? (
                                <p className="my-1">
                                  {productDeails?.description &&
                                    ReactHtmlParse(productDeails?.description)}
                                </p>
                              ) : !openTab && editOpen ? (
                                <div>
                                  <h1 className="font-medium text-2xl">
                                    Categories:
                                  </h1>
                                    <ol className="my-1 list-decimal ml-5">
                                      {productDeails?.categories?.map(
                                        (item, i) => (
                                          <li key={i}>{item?.name}</li>
                                        )
                                      )}
                                    </ol>
                                  <h1 className="font-medium text-2xl">
                                    Business Models:
                                  </h1>
                                    <ol className="my-1 list-decimal ml-5">
                                      {productDeails?.businessModels?.map(
                                        (item, i) => (
                                          <li key={i}>{item?.name}</li>
                                        )
                                      )}
                                    </ol>
                                  <div>
                                    <h1 className="font-medium text-2xl">
                                      TRL:
                                    </h1>
                                    <p className="my-1 ml-2">
                                      {productDeails?.trl?.name}
                                    </p>
                                  </div>
                                </div>
                              ) : (
                                <EditAttributes />
                              )}
                            </div>
                          </div>
                          <div className=" sm:w-5/12 flex flex-col gap-3 w-full ">
                            {configuration?.hasUserSection && (
                              <div className=" bg-white p-3 shadow-lg rounded-sm h-44 ">
                                <h1 className="font-medium text-2xl">
                                  User info{" "}
                                </h1>
                                <div className="mt-2 flex gap-4 items-center">
                                  <img
                                    className="w-14 rounded-full"
                                    src={
                                      productDeails?.user?.profilePicture
                                        ? productDeails?.user?.profilePicture
                                        : user
                                    }
                                    alt="user"
                                  />
                                  <div className="flex flex-col">
                                    <h1 className="font-medium text-xl">
                                      {productDeails?.user?.firstName}
                                    </h1>
                                    <h1 className="font-medium text-base">
                                      {productDeails?.company?.name}
                                    </h1>
                                  </div>
                                </div>
                              </div>
                            )}
                            <div className="h-44 bg-white p-3 shadow-lg rounded-sm">
                              <h1 className="font-medium text-2xl">Map </h1>
                              {address?.house +
                                "," +
                                address?.city?.name +
                                "," +
                                address?.country?.name +
                                " " +
                                address?.zipCode}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
}
