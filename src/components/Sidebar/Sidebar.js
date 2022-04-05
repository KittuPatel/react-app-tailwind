/*eslint-disable*/
import React from "react"
import { Link, useLocation } from "react-router-dom"

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js"
import UserDropdown from "components/Dropdowns/UserDropdown.js"

export default function Sidebar() {
  const location = useLocation()
  const pathName = location.pathname
  console.log(pathName)
  const [collapseShow, setCollapseShow] = React.useState("hidden")
  return (
    <>
      <nav className='md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6'>
        <div className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto'>
          {/* Toggler */}
          <button
            className='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
            type='button'
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className='fas fa-bars'></i>
          </button>
          {/* Brand */}
          <Link
            className='md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0'
            to='/'
          >
            Siremar
          </Link>
          {/* User */}

          <hr />

          <div className='flex flex-col md:flex-row items-center'>
            {pathName.includes("/admin/") && (
              <div className='flex flex-row items-center'>
                <h2>{JSON.parse(localStorage.getItem('userInfo'))['name'] + "  - "}</h2>
                <h2>Admin</h2>
              </div>
            )}

            {pathName.includes("/resident/") && (
              <div className='flex flex-row items-center'>
                <h2>{ JSON.parse(localStorage.getItem('userInfo'))['name'] + "  - "}</h2>
                <h2> Resident</h2>
              </div>
            )}

            {pathName.includes("/inspector/") && (
              <div className='flex flex-row items-center'>
                <h2>{JSON.parse(localStorage.getItem('userInfo'))['name'] + "  - "}</h2>
                <h2>Inspector</h2>
              </div>
            )}
            
          </div>
          <ul className='md:hidden items-center flex flex-wrap list-none'>
            <li className='inline-block relative'>
              <NotificationDropdown />
            </li>
            <li className='inline-block relative'>
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className='md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200'>
              <div className='flex flex-wrap'>
                <div className='w-6/12'>
                  <Link
                    className='md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0'
                    to='/'
                  >
                    Siremar
                  </Link>
                </div>
                <div className='w-6/12 flex justify-end'>
                  <button
                    type='button'
                    className='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className='fas fa-times'></i>
                  </button>
                </div>
              </div>
            </div>
            <hr className='my-4 md:min-w-full' />

            {pathName.includes("admin/") && (
              <ul className='md:flex-col md:min-w-full flex flex-col list-none'>
                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/admin/dashboard'
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (window.location.href.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Dashboard
                  </Link></li>
                  <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/profile") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/admin/profile'
                  >Profile</Link>
                </li>

                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/residents") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/admin/residents'
                  >
                    <i
                      className={
                        "fas fa-users mr-2 text-sm " +
                        (window.location.href.indexOf("/admin/residents") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Residents
                  </Link>
                </li>

                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/counties") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/admin/counties'
                  >
                    <i
                      className={
                        "fas fa-map-marked mr-2 text-sm " +
                        (window.location.href.indexOf("/admin/counties") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Counties
                  </Link>
                </li>

                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/schools") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/admin/schools'
                  >
                    <i
                      className={
                        "fas fa-school mr-2 text-sm " +
                        (window.location.href.indexOf("/admin/schools") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Schools
                  </Link>
                </li>

                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/business") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/admin/business'
                  >
                    <i
                      className={
                        "fas fa-building mr-2 text-sm " +
                        (window.location.href.indexOf("/admin/business") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Business
                  </Link>
                </li>

                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/inspectors") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/admin/inspectors'
                  >
                    <i
                      className={
                        "fas fa-user mr-2 text-sm " +
                        (window.location.href.indexOf("/admin/inspectors") !==
                        -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Inspectors
                  </Link>
                </li>

                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/chats") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/admin/chats'
                  >
                    <i
                      className={
                        "fas fa-comment mr-2 text-sm " +
                        (window.location.href.indexOf("/admin/chats") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Chat
                  </Link>
                </li>
              </ul>
            )}

            {pathName.includes("resident/") && (
              <ul className='md:flex-col md:min-w-full flex flex-col list-none'>
                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/resident/profile") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/resident/profile'
                  ><i
                  className={
                    "fas fa-profile mr-2 text-sm " +
                    (window.location.href.indexOf("/resident/profile") !== -1
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>{" "}Profile</Link>
                </li>
                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/resident/school") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/resident/school'
                  >
                    <i
                      className={
                        "fas fa-school mr-2 text-sm " +
                        (window.location.href.indexOf("/resident/school") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    School
                  </Link>
                </li>

                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/resident/events") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/resident/events'
                  >
                    <i
                      className={
                        "fas fa-calendar mr-2 text-sm " +
                        (window.location.href.indexOf("/resident/events") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Events
                  </Link>
                </li>

                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/resident/tickets") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/resident/tickets'
                  >
                    <i
                      className={
                        "fas fa-calendar-check mr-2 text-sm " +
                        (window.location.href.indexOf("/resident/tickets") !==
                        -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Tickets
                  </Link>
                </li>

                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/resident/business") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/resident/business'
                  >
                    <i
                      className={
                        "fas fa-building mr-2 text-sm " +
                        (window.location.href.indexOf("/resident/business") !==
                        -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Business
                  </Link>
                </li>

                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/resident/discount") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/resident/discount'
                  >
                    <i
                      className={
                        "fas fa-dollar-sign mr-2 text-sm " +
                        (window.location.href.indexOf("/resident/discount") !==
                        -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Discount
                  </Link>
                </li>

                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/resident/chats") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/resident/chats'
                  >
                    <i
                      className={
                        "fas fa-comment mr-2 text-sm " +
                        (window.location.href.indexOf("/resident/chats") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Chat
                  </Link>
                </li>
              </ul>
            )}

            {pathName.includes("inspector/") && (
              <ul className='md:flex-col md:min-w-full flex flex-col list-none'>
                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/inspector/dashboard") !==
                      -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/inspector/dashboard'
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (window.location.href.indexOf(
                          "/inspector/dashboard"
                        ) !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Dashboard
                  </Link>
                </li>
                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/inspector/profile") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/inspector/profile'
                  ><i
                  className={
                    "fas fa-profile mr-2 text-sm " +
                    (window.location.href.indexOf("/inspector/profile") !== -1
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>{" "}Profile</Link>
                </li>
                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/inspector/residents") !==
                      -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/inspector/residents'
                  >
                    <i
                      className={
                        "fas fa-users mr-2 text-sm " +
                        (window.location.href.indexOf(
                          "/inspector/residents"
                        ) !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Residents
                  </Link>
                </li>

                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/inspector/schools") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/inspector/schools'
                  >
                    <i
                      className={
                        "fas fa-school mr-2 text-sm " +
                        (window.location.href.indexOf("/inspector/schools") !==
                        -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Schools
                  </Link>
                </li>

                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/inspector/moveouts") !==
                      -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/inspector/moveouts'
                  >
                    <i
                      className={
                        "fas fa-question-circle mr-2 text-sm " +
                        (window.location.href.indexOf("/inspector/moveouts") !==
                        -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Move outs
                  </Link>
                </li>

                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/inspector/events") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/inspector/events'
                  >
                    <i
                      className={
                        "fas fa-calendar mr-2 text-sm " +
                        (window.location.href.indexOf("/inspector/events") !==
                        -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Events
                  </Link>
                </li>

                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/inspector/discount") !==
                      -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/inspector/discount'
                  >
                    <i
                      className={
                        "fas fa-calendar-check mr-2 text-sm " +
                        (window.location.href.indexOf("/inspector/discount") !==
                        -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Discount
                  </Link>
                </li>
                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/inspector/business") !==
                      -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/inspector/business'
                  >
                    <i
                      className={
                        "fas fa-building mr-2 text-sm " +
                        (window.location.href.indexOf("/inspector/business") !==
                        -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Business
                  </Link>
                </li>

                <li className='items-center'>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/inspector/chats") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to='/inspector/chats'
                  >
                    <i
                      className={
                        "fas fa-comment mr-2 text-sm " +
                        (window.location.href.indexOf("/inspector/chats") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Chat
                  </Link>
                </li>
              </ul>
            )}

            {/* Divider */}
            <hr className='my-4 md:min-w-full' />

            <ul className='md:flex-col md:min-w-full flex flex-col list-none md:mb-4'>
              <li className='items-center'>
                <Link
                  className='text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block'
                  to='/'
                >
                  <i className='fas fa-share-square text-blueGray-400 mr-2 text-sm'></i>{" "}
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
