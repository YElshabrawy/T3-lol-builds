import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";
import React, { useState } from "react";

const Home: NextPage = () => {
  const createBuildMutation = api.builds.createBuild.useMutation();

  const [build, setBuild] = useState("");
  const [champion, setChampion] = useState("fiora");

  const handleSubmitCreateBuild = async (e: React.FormEvent) => {
    e.preventDefault();
    await createBuildMutation.mutateAsync({
      champion,
      build,
    });
  };

  return (
    <>
      <Head>
        <title>Create Build</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <h1>Create a new build!</h1>
        <form
          onSubmit={handleSubmitCreateBuild}
          className="flex flex-col gap-4"
          action=""
        >
          <label htmlFor="champions">Champion</label>
          <select
            className="text-black"
            name=""
            id="champions"
            value={champion}
            onChange={(e) => setChampion(e.target.value)}
          >
            <option value="fiora">Fiora</option>
            <option value="zyra">Zyra</option>
            <option value="leona">Leona</option>
            <option value="yummi">Yummi</option>
          </select>

          <label htmlFor="build">Build</label>
          <textarea
            className="text-black"
            value={build}
            id="build"
            onChange={(e) => setBuild(e.target.value)}
          />

          <button>Submit</button>
        </form>
      </main>
    </>
  );
};

export default Home;