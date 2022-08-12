import React, { useState } from "react";
import { ReactDOM } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CurrencyDollarIcon,
  ShoppingCartIcon,
  CheckCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/solid";

import {
  faAnglesLeft,
  faAnglesRight,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
const ReportsAndLedger = () => {
  // Pagination functions

  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);

  const pages = [{ page: num }, { page: num + 1 }, { page: num + 2 }];
  function Next() {
    setNum(++num);
  }
  function back() {
    num > 1 && setNum(--num);
  }
  function FastNext() {
    setNum((num += 3));
  }
  function Fastback() {
    num > 1 && setNum((num -= 3));
  }

  return (
    <>
      <div className="pl-5 mt-2">
        <h1 className="text-4xl font-semibold uppercase">
          Reports And <br /> Financial Ledger's
        </h1>
        <h4 className="mt-1">Get Summary of your weekly transitions here</h4>
      </div>
      {/* 4 cards below Heading */}
      <div className="flex  ">
        <div className="flex shadow-lg bg-slate-50  h-20 w-48 m-4 rounded py-4">
          <div className=" items-center pl-4 w-2/3   ">
            <h3 className="text-gray-500 text-sm font-semibold">
              Total Revenue
            </h3>
            <p className="text-neutral-900 text-sm">$10,000</p>
          </div>
          <div className="w-1/3">
            <CurrencyDollarIcon className=" h-12  w-12 text-blue-500" />
          </div>
        </div>
        <div className="flex bg-slate-50 shadow-lg h-20 w-48 m-4 rounded py-4">
          <div className=" items-center pl-4 w-2/3 ">
            <h3 className="text-gray-500 text-sm font-semibold">Sales</h3>
            <p className="text-neutral-900 text-sm">1,900</p>
          </div>
          <div className=" w-1/3">
            <ShoppingCartIcon className=" h-12  w-12 text-blue-500" />
          </div>
        </div>
        <div className="flex bg-slate-50 shadow-lg h-20 w-48 m-4 rounded py-4">
          <div className=" items-center pl-4 w-2/3">
            <h3 className="text-gray-500 text-sm font-semibold">
              Sales in 2021
            </h3>
            <p className="text-neutral-900 text-sm">$20,000</p>
          </div>
          <div className=" w-1/3">
            <CheckCircleIcon className=" h-12  w-12 text-blue-500" />
          </div>
        </div>
        <div className="flex bg-slate-50 shadow-lg h-20 w-48 m-4 rounded py-4">
          <div className=" items-center pl-4 w-2/3">
            <h3 className="text-gray-500 text-sm font-semibold">
              Sales in August
            </h3>
            <p className="text-neutral-900 text-sm">$10,000</p>
          </div>
          <div className=" w-1/3">
            <ShoppingBagIcon className=" h-12  w-12 text-blue-500" />
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="ml-4 mb-4 bg-slate-50 w-fit rounded-lg py-6 shadow-lg">
        <table className="">
          <thead>
            <tr className="text-slate-400 mt-4">
              <th className="px-10">Order</th>
              <th className="px-10">Owner</th>
              <th className="px-10">Type</th>
              <th className="pl-10 ">Date and time</th>
              <th className="px-10">Amount</th>
              <th className="px-10">Status</th>
            </tr>
          </thead>
          <tbody className="px-4 divide-y divide-slate-200">
            <tr>
              <td className="pl-10 text-blue-600">#1</td>
              <td className="px-10">Bata</td>
              <td className="px-10">Shopping</td>
              <td className="pl-10 pt-6">
                <p> 21 June,2022</p>
                <span className="text-slate-500 text-xs">09:45 pm</span>
              </td>
              <td className="px-10 font-semibold text-green-500"> 40,000</td>
              <td className="px-10 font-semibold text-green-500">Completed</td>
            </tr>
            <tr>
              <td className="px-10 text-blue-600">#2</td>
              <td className="px-10">Edenrobe</td>
              <td className="px-10">Shopping</td>
              <td className="pl-10  pt-6">
                <p>21 June,2022</p>
                <span className="text-slate-500 text-xs ">09:45 pm</span>
              </td>
              <td className="px-10 font-semibold text-green-500"> 40,000</td>
              <td className="px-10 font-semibold text-green-500">Completed</td>
            </tr>
            <tr>
              <td className="px-10 text-blue-600">#3</td>
              <td className="px-10">Services</td>
              <td className="px-10">Shopping</td>
              <td className="pl-10  pt-6">
                <p> 21 June,2022</p>
                <span className="text-slate-500 text-xs">09:45 pm</span>
              </td>
              <td className="px-10 font-semibold text-yellow-500"> 40,000</td>
              <td className="px-10 font-semibold text-yellow-500">
                In Progress
              </td>
            </tr>
            <tr>
              <td className="px-10 text-blue-600">#4</td>
              <td className="px-10">Stylo</td>
              <td className="px-10">Shopping</td>
              <td className="pl-10  pt-6">
                <p> 21 June,2022</p>
                <span className="text-slate-500 text-xs">09:45 pm</span>
              </td>
              <td className="px-10 font-semibold text-green-500"> 40,000</td>
              <td className="px-10 font-semibold text-green-500">Completed</td>
            </tr>
            <tr>
              <td className="px-10 text-blue-600">#5</td>
              <td className="px-10">Lime light</td>
              <td className="px-10">Shopping</td>
              <td className="pl-10  pt-6">
                <p> 21 June,2022</p>
                <span className="text-slate-500 text-xs">09:45 pm</span>
              </td>
              <td className="px-10 font-semibold text-green-500"> 40,000</td>
              <td className="px-10 font-semibold text-green-500">Completed</td>
            </tr>

            <tr>
              <td className="px-10 text-blue-600">#6</td>
              <td className="px-10">Khaddi</td>
              <td className="px-10">Shopping</td>
              <td className="pl-10  pt-6">
                <p> 21 June,2022</p>
                <span className="text-slate-500 text-xs">09:45 pm</span>
              </td>
              <td className="px-10 font-semibold text-green-500"> 40,000</td>
              <td className="px-10 font-semibold text-green-500">Completed</td>
            </tr>
            <tr>
              <td className="px-10 text-blue-600">#7</td>
              <td className="px-10">J.</td>
              <td className="px-10">Shopping</td>
              <td className="pl-10  pt-6">
                <p> 21 Jun,022</p>
                <span className="text-slate-500 text-xs">09:45 pm</span>
              </td>
              <td className="px-10 font-semibold text-red-500"> 40,000</td>
              <td className="px-10 font-semibold text-red-500">Cancelled</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
        <div className="flex py-3 pl-[44rem] space-x-0  ">
          <button
            onClick={Fastback}
            className="h-5 w-5 my-3 text-xs text-slate-500 
             "
          >
            <FontAwesomeIcon icon={faAnglesLeft} className="" />
          </button>
          <button
            onClick={back}
            className="h-5 w-5 text-slate-500 my-3  text-xs 
        "
          >
            <FontAwesomeIcon icon={faAngleLeft} className="" />
          </button>
          {pages.map((pg, i) => (
            <button
              key={i}
              onClick={() => setCur(pg.page)}
              className={`h-5   my-3   text-slate-400  text-xs 
               w-5 ${cur === pg.page && "text-blue-900 "}`}
            >
              {pg.page}
            </button>
          ))}
          <button
            onClick={Next}
            className="h-5 w-5 text-slate-500 my-3  text-xs "
          >
            <FontAwesomeIcon icon={faAngleRight} className="" />
          </button>
          <button
            onClick={FastNext}
            className="h-5 w-5 text-slate-500 my-3  text-xs  "
          >
            <FontAwesomeIcon icon={faAnglesRight} className="" />
          </button>
        </div>
      </div>
    </>
  );
};
export default ReportsAndLedger;
