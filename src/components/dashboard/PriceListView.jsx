/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useGetPriceList from "../../hooks/dashboard/useGetPriceList";
import Loading from "./Loading";

const PriceListView = () => {
  const { getPriceList } = useGetPriceList();
  const [priceList, setPriceList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPrices = async () => {
      const result = await getPriceList();
      if (result) {
        setPriceList(result);
        setLoading(false);
      }
    };
    getPrices();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <table className="price-list-table">
        <thead>
          <tr className="bg-[#F7F8FD]">
            <th>index</th>
            <th>category</th>
            <th>product</th>
            <th>service</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {priceList.slice(0, 10).map((item, index) => {
            const { category_name, price_price, product_name, service_name } =
              item;
            return (
              <tr
                key={index}
                className="transition duration-200 hover:bg-[rgba(226,225,231,0.39)]"
              >
                <td>{index + 1}</td>
                <td>{category_name}</td>
                <td>{product_name}</td>
                <td>{service_name}</td>
                <td>{price_price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PriceListView;
