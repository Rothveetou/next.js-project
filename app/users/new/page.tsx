"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUser = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <h1>Create a new user </h1>
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <button
        onClick={() => router.push("/users")}
        className="btn btn-primary mt-5"
      >
        Create a user
      </button>
    </div>
  );
};

export default NewUser;
