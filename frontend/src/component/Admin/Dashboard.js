import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import MetaData from "../layout/MetaData";
import UsersList from "./UsersList.js";

const Dashboard = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.products);
    const { orders } = useSelector((state) => state.allOrders);
    const { users } = useSelector((state) => state.allUsers);

let outOfStock = 0;

products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
    }
});

let totalAmount = 0;
let count = 0;
orders &&
  orders.forEach((item) => {
    totalAmount += item.totalPrice;
    count+=1;
  });
//   console.log(orders.length)

useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);
   
    return (
        <div className="dashboard">
            <MetaData title="Dashboard - Admin Panel" />
            <Sidebar />

            <div className="dashboardContainer">
                <Typography component="h1">Dashboard</Typography>

                <div className="dashboardSummary">
                    <div>
                        <p>
                            Total Amount <br /> {totalAmount}
                        </p>
                    </div>
                    <div className="dashboardSummaryBox2">
                        <Link to="/admin/products">
                            <p>Products</p>
                            <p>{products.length}</p>
                        </Link>
                        <Link to="/admin/orders">
                            <p>Orders</p>
                            <p>{count}</p>
                        </Link>
                        <Link to="/admin/users">
                            <p>Users</p>
                            <p>{users.length}</p>
                        </Link>
                    </div>
                </div>
                {/* <div className="lineChart">
                    <Line data={lineState} />
                </div> */}

                {/* <div className="doughnutChart">
                    <Doughnut data={doughnutState} />
                </div> */}
            </div>
        </div>
    );
};

export default Dashboard;
