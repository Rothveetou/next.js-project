import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";
import Loading from "../loading";

interface Props {
  searchParams: { sortOrder: string };
}
const Userpage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <div className="flex justify-between ">
        <h1>Users</h1>
        <Link href="/users/new" className="btn btn-primary">
          New User
        </Link>
      </div>
      <Suspense fallback={<Loading />}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default Userpage;
