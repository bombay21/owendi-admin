import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function Home() {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
      const getStats = async () => {
        // console.log(`/users/stats?date=${new Date().toISOString()}`);
        await userRequest
          .get(`/users/stats?date=2020-10-18T10:38:31.247Z`)
          .then((result) => {
            result.data.map((item)=>
            setUserStats((prev)=>[
              ...prev,{name: MONTHS[item._id - 1], "Active User": item.count}
            ]))
          })
          .catch((err) => console.log(err));
      };
      getStats();
  }, [MONTHS]);

  console.log(userStats);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
