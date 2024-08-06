import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import remySharp from "./avtarImg.jpg";
import "./Table.css";

// Styled components
const TableContainer = styled.div`
  overflow-y: auto;
  display: block;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: var(--primary-color);
  color: #fff;
`;

const Thead = styled.thead`
  background-color: var(--primary-color);
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Th = styled.th`
  text-align: left;
  border-bottom: 1px solid #444;
  font-size: x-small;
`;

const Td = styled.td`
  padding: 5px 5px 5px 0px;
  border-bottom: 1px solid #444;
  font-size: small;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr``;

const Status = styled.span`
  padding: 5px;
  border-radius: 500px;
  font-size: x-small;
  color: ${(props) =>
    props.status === "Delivered"
      ? "#089a71"
      : props.status === "Pending"
      ? "#c05053"
      : "#c05053"};
  background-color: ${(props) =>
    props.status === "Delivered"
      ? "#165246"
      : props.status === "Pending"
      ? "#5e3339"
      : "#5e3339"};
`;

const RecentOrders = () => {
  const orders = [
    {
      customer: "Wade Warren",
      orderNo: 15478256,
      amount: 124.0,
      status: "Delivered",
      img: remySharp,
    },
    {
      customer: "Jane Cooper",
      orderNo: 48965786,
      amount: 365.02,
      status: "Delivered",
    },
    {
      customer: "Guy Hawkins",
      orderNo: 78958215,
      amount: 45.88,
      status: "Cancelled",
    },
    {
      customer: "Kristin Watson",
      orderNo: 20965732,
      amount: 65.0,
      status: "Pending",
    },
    {
      customer: "Cody Fisher",
      orderNo: 95715620,
      amount: 545.0,
      status: "Delivered",
    },
    {
      customer: "Savannah Nguyen",
      orderNo: 78514568,
      amount: 128.2,
      status: "Delivered",
    },
  ];

  return (
    <TableContainer className="TableContainer">
      <Table>
        <Thead>
          <Tr>
            <Th>Customer</Th>
            <Th>Order No.</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order, index) => (
            <Tr key={index}>
              <Td>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={order.img}
                    sx={{
                      width: { sm: "25px", xs: "30px" },
                      height: { sm: "25px", xs: "30px" },
                    }}
                  />
                  <span style={{ fontSize: "smaller" }}>{order.customer} </span>
                </div>
              </Td>
              <Td>{order.orderNo}</Td>
              <Td>${order.amount.toFixed(2)}</Td>
              <Td>
                <Status status={order.status}>{order.status}</Status>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default RecentOrders;
