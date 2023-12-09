// "use server";
/* eslint-disable react-hooks/exhaustive-deps */

import Adddata from "@/components/Adddata";
import Image from "next/image";
import mongoose from "mongoose";
import { Card, CardBody, CardHeader, Table } from "react-bootstrap";
import { connectionSrt } from "@/lib/db";
import { Message } from "@/lib/model/Message";
import Delete from "@/components/Delete";

export default async function Home() {
  let data;
  async function getdata() {
    "use server";
    let data;
    await mongoose.connect(connectionSrt);
    data = await Message.find();
  }

  async function addData(title, msg, status) {
    "use server";

    await mongoose.connect(connectionSrt);
    await Message.insertMany({
      title: title,
      message: msg,
      status: status,
    });

    // getdata();
    await mongoose.connect(connectionSrt);
    let data = await Message.find();
  }

  await mongoose.connect(connectionSrt);
  data = await Message.find();
  console.log(data);

  async function del(t) {
    "use server";
    await mongoose.connect(connectionSrt);
    await Message.deleteMany({ title: t });
    getdata();
  }

  return (
    <div className="row m-4">
      <Adddata fun={addData} />

      <Card className="mt-3">
        <CardHeader>
          <span>Data List</span>
        </CardHeader>
        <CardBody>
          <Table>
            <thead>
              <tr>
                <th>Sno</th>
                <th>Title</th>
                <th>Message</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 &&
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{++index}</td>
                    <td>{item.title}</td>
                    <td>{item.message}</td>
                    <td></td>
                    <td>{item.status}</td>
                    <td>
                      <Delete del1={del} title={item.title} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
