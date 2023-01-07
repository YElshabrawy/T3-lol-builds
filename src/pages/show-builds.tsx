import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";
import React, { useState } from "react";

const Home: NextPage = () => {
  const builds = api.builds.getAllBuilds.useQuery();

  return (
    <>
      <Head>
        <title>All Builds</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <h1>All builds</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Champion
                </th>
                <th scope="col" className="px-6 py-3">
                  Build
                </th>
              </tr>
            </thead>
            <tbody>
              {builds.data?.map((b) => (
                <tr className="border-b bg-white" key={b.id}>
                  <th className="px-6 py-4">{b.id}</th>
                  <th className="px-6 py-4">{b.champion}</th>
                  <th className="px-6 py-4">{b.build}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link className="rounded-md border border-white p-2" href="/">
          Home
        </Link>
      </main>
    </>
  );
};

export default Home;