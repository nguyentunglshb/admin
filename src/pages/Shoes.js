import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@material-tailwind/react/Card";
import Sidebar from "components/Sidebar";

export default function Shoes() {
  const [allShoes, setAllShoes] = useState([]);
  useEffect(async () => {
    try {
      const res = await axios("http://localhost:5000/api/shoes");
      console.log(res.data);
      setAllShoes(res.data.allShoses);
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
          <div className="container mx-auto max-w-full"></div>
        </div>

        <div className="px-3 md:px-8 h-auto -mt-28 mb-16">
          <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 px-4 h-[600px]">
              <div className="px-3 md:px-8 h-auto -mt-24 bg: max-w-full">
                <div className="container mx-auto max-w-full">
                  <div className="grid grid-cols-1 px-4 mb-16">
                    <button className="bg-yellow-500 w-32 text-white h-12 rounded-xl my-5">
                      Add new shoes
                    </button>
                    <Card className="m-4">
                      <table className="table-auto">
                        <thead>
                          <tr>
                            <th className="pr-20">id</th>
                            <th className="pr-20">Shoes</th>
                            <th className="pr-20 pl-20">Sale Price</th>
                            <th className="pr-20 pl-20 text-center">
                              Price (vnd)
                            </th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {allShoes?.map((shoes, index) => (
                            <tr
                              key={index}
                              className="my-5 bg:grey border-2 border-rose-500"
                              style={{ height: "100px" }}
                            >
                              <td>{shoes._id}</td>
                              <td className="text-blue-400">{shoes.title} </td>
                              <td className="text-center text-green-500">
                                {shoes.saleprice}
                              </td>
                              <td className="text-center text-red-500">
                                {shoes.price}
                              </td>

                              <td className="px-20">
                                <button className="rounded-full bg-cyan-500 w-20 h-10 text-white">
                                  Edit
                                </button>
                              </td>
                              <td className="px-20">
                                <button className="rounded-full bg-cyan-500 w-20 h-10 text-white">
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
