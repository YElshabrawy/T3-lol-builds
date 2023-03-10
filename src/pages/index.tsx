import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

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
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <h1>Welcome to LOL Builds</h1>
        <Link
          className="rounded-md border border-white p-2"
          href="/create-build"
        >
          Create a build
        </Link>
        <Link
          className="rounded-md border border-white p-2"
          href="/show-builds"
        >
          Show all builds
        </Link>
      </main>
    </>
  );
};

export default Home;
