import React, { useState } from "react";

type Props = {
  listStudents: any;
};
interface student {
  name: string;
  age: number;
  address: string;
}

const Student = ({ listStudents }: Props) => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const showGreeting = (name: any, age: any, address: any) => {
    setName(name);
    setAge(age);
    setAddress(address);
  };
  return (
    <div>
      <div className="flex justify-center">
        {listStudents.map((item: student, index: number) => (
          <div
            onClick={() => showGreeting(item.name, item.age, item.address)}
            key={index}
            className="w-[150px] h-[100px] mx-3 rounded border border-cyan-200 text-center cursor-pointer"
          >
            <p>name: {item.name}</p>
            <p>age: {item.age}</p>
            <p>address: {item.address}</p>
          </div>
        ))}
      </div>
      <div className={`text-center pt-2 ${age != 0 ? "block" : "hidden"}`}>
        <p>
          Hello everyone, I'm {name} I'm from {address}
        </p>
      </div>
    </div>
  );
};
export default Student;
