import React, { useState } from "react";
import { useQuery } from "react-query";
import { Fade } from "react-reveal";
import Loading from "../Pages/Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ToolsRow from "./ToolsRow";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("https://daisycomputer-server.onrender.com/products", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <Fade left cascade>
      <div>
        <h2 className="text-2xl">Manage Tools: {tools.length}</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((doctor, index) => (
                <ToolsRow
                  key={doctor._key}
                  doctor={doctor}
                  index={index}
                  refetch={refetch}
                  setDeletingDoctor={setDeletingDoctor}
                ></ToolsRow>
              ))}
            </tbody>
          </table>
        </div>
        {deletingDoctor && (
          <DeleteConfirmModal
            deletingDoctor={deletingDoctor}
            refetch={refetch}
            setDeletingDoctor={setDeletingDoctor}
          ></DeleteConfirmModal>
        )}
      </div>
    </Fade>
  );
};

export default ManageDoctors;
