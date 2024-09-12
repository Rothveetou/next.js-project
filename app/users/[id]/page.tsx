import React from "react";

interface UserDetail {
  params: { id: number };
}
const UserDetailPage = ({ params: { id } }: UserDetail) => {
  return (
    <div>
      <span>UserDetail {id}</span>
    </div>
  );
};

export default UserDetailPage;
