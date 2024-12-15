import accounts from "../../../data/accounts";
import Card from "../../Elements/Card";
import Stepper from "../../Stepper";
import { Link } from "react-router-dom";
import { Icon } from "../../Elements/Icon";
import { useContext } from "react";
import { ThemeContext } from "@emotion/react";

const CardBalance = () => {
  const { theme } = useContext(ThemeContext);
  const themeName = theme?.name || "default-theme"; // Fallback untuk theme.name

  const balanceCard = accounts.map((account) => {
    // Validasi properti pada setiap elemen accounts
    const { id, balance, accountType, accountNumber, logo } = account || {};

    return (
      <div key={id || Math.random()} className={`p-2 ${themeName}`}>
        <div className="flex justify-between">
          <div className="text-2xl font-bold">${balance || "0.00"}</div>
          <div>
            <Link to="/balance">All account</Link>
          </div>
        </div>
        <div className="border-b-2 my-4"></div>
        <div className="flex justify-between bg-primary text-white p-4 rounded-md">
          <div>
            Account Type
            <br />
            <span className="text-xl font-bold">{accountType || "Unknown"}</span>
            <br />
            {accountNumber || "N/A"}
          </div>
          <div className="flex flex-col justify-between">
            {logo && <img className="ms-auto" src={`/images/${logo}`} alt={`${accountType || "Account"} logo`} />}
            <div className="flex">
              <span className="text-xl font-bold">${balance || "0.00"}</span>
              <div className="bg-white max-w-min rounded-full ps-1 pt-1 ms-4">
                <Icon.ArrowUpRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <Card title="Total Balance" desc={<Stepper desc={balanceCard} />} />;
};

export default CardBalance;
