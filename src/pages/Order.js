import StatusCard from "components/StatusCard";
import TableCard from "components/TableCard";
import Card from "@material-tailwind/react/Card";
import Sidebar from "components/Sidebar";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Order() {
  const [orders, setOrders] = useState([]);
  useEffect(async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/order");
      console.log(res.data);
      setOrders(res.data.allOrder);
    } catch (error) {
      console.log(error.message);
    }
  }, [orders]);

  const deleteOrder = async (id) => {
    await axios.delete(`http://localhost:5000/api/order/${id}`);
  };

  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto"></div>

        <div className="px-3 md:px-8 h-auto -mt-28 mb-16">
          <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 px-4 h-[600px]">
              <div className="px-3 md:px-8 h-auto -mt-24 bg: max-w-full">
                <div className="container mx-auto max-w-full">
                  <div className="grid grid-cols-1 px-4 mb-16">
                    <Card className="m-4">
                      <table className="table-auto">
                        <thead>
                          <tr>
                            <th className="pr-20">id</th>
                            <th className="pr-20">Full Name</th>
                            <th className="pr-20 pl-20">Address</th>
                            <th className="pr-20 pl-20 text-center">
                              Price (vnd)
                            </th>
                            <th className="pl-20">Shoes</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order) => (
                            <tr
                              className="my-5 bg:grey border-2 border-rose-500"
                              style={{ height: "100px" }}
                            >
                              <td>{order._id}</td>
                              <td>{order.fullname} </td>
                              <td>{order.address}</td>
                              <td className="text-center">{order.price}</td>
                              <td>
                                {order.shoes.map((singleShoes) => (
                                  <p>
                                    {singleShoes.name} - {singleShoes.size} -{" "}
                                    {singleShoes.quantity}
                                  </p>
                                ))}
                              </td>
                              <td className="px-20">
                                <button
                                  className="rounded-full bg-cyan-500 w-20 h-10 text-white"
                                  onClick={() => deleteOrder(order._id)}
                                >
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
