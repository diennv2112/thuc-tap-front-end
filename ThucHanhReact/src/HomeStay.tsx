import React from "react";
import Student from "./Student";
const HomeStay = () => {
  const Students = [
    {
      name: "Mai",
      age: 30,
      address: "Bắc Ninh",
    },
    {
      name: "Đạt",
      age: 30,
      address: "Hà Nam",
    },
    {
      name: "Hiển",
      age: 29,
      address: "Thái Bình",
    },
    {
      name: "Tiên",
      age: 25,
      address: "Hà Nội",
    },
  ];
  return (
    <div>
      <Student listStudents={Students} />
    </div>
  );
};

export default HomeStay;
