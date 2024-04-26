import DefaultLayout from "../../components/layout/DefaultLayout";
import Head from "next/head";
import { getData } from "../../utils/fetchData";
import { useState, useContext, useEffect } from "react";
import KetonloItem from "../../components/product/KetonloItem";
import Dataset from "../../models/Product";
import BreadCrumbs from "../../components/layout/BreadCrumbs";
import Ketonlo from "../../components/product/Ketonlo";

const Kesieuthi = (props) => {
  const [products, setProducts] = useState(props.products);
  const breadCrumbs = [
    { name: "Trang chủ", url: "/" },

    { name: "Sản phẩm", url: "/san-pham" },
    {
      name: "Kệ siêu thị tôn đục lỗ",
      url: "/ke-ton-duc-lo",
    },
  ];
  return (
    <DefaultLayout>
      <Head>
        <title>Kệ siêu thị tôn đục lỗ | Giá Kệ Tân Phát</title>
        <meta
          name="description"
          content="Khám phá bộ sưu tập kệ siêu thị tôn đục lỗ của Tân Phát - giải pháp lưu trữ linh hoạt và tiết kiệm không gian cho cửa hàng của bạn. Tận hưởng sự thuận tiện và hiệu quả với giá kệ hấp dẫn từ Tân Phát ngay hôm nay!"
        />
        <meta name="author" content="Giá kệ Tân Phát" />
        <meta
          property="og:title"
          content="Kệ siêu thị tôn đục lỗ | Giá Kệ Tân Phát"
        />
        <meta
          property="og:description"
          content="Khám phá bộ sưu tập kệ siêu thị tôn đục lỗ của Tân Phát - giải pháp lưu trữ linh hoạt và tiết kiệm không gian cho cửa hàng của bạn. Tận hưởng sự thuận tiện và hiệu quả với giá kệ hấp dẫn từ Tân Phát ngay hôm nay!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/digaabr5l/image/upload/v1713262971/gktanphat/baner-gia-ke-sieu-thi_qtzaio.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://giaketanphat.com/ke-ton-duc-lo"
        />
      </Head>
      <div className="mt-[70px] sm:mt-[91px]">
        <div className="container mx-auto p-3">
          <BreadCrumbs breadCrumbs={breadCrumbs} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {products.slice(0, 20).map((product, index) => (
              <KetonloItem key={product._id} product={product} />
            ))}
          </div>
          <Ketonlo />
        </div>
      </div>
    </DefaultLayout>
  );
};

export async function getServerSideProps() {
  try {
    const products = await Dataset.find({ category: "ketonlo" });
    return {
      props: {
        products: JSON.parse(JSON.stringify(products)),
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}
export default Kesieuthi;
