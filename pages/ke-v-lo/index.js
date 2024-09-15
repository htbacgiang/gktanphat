import DefaultLayout from "../../components/layout/DefaultLayout";
import Head from "next/head";
import { getData } from "../../utils/fetchData";
import { useState, useContext, useEffect } from "react";
import KetonloItem from "../../components/product/KetonloItem";
import Dataset from "../../models/Product";
import BreadCrumbs from "../../components/layout/BreadCrumbs";
const KeVlo = (props) => {
  const [products, setProducts] = useState(props.products);
  const breadCrumbs = [
    { name: "Trang chủ", url: "/" },

    { name: "Sản phẩm", url: "/san-pham" },
    {
      name: "Kệ V lỗ đa năng",
      url: "/ke-v-lo",
    },
  ];
  return (
    <DefaultLayout>
      <Head>
        <title>Kệ V lỗ đa năng | Giá Kệ Tân Phát</title>
        <meta
          name="description"
          content="Tân Phát mang đến cho bạn bộ sưu tập kệ V lỗ đa năng - giải pháp lưu trữ linh hoạt và tiện ích cho mọi nhu cầu trưng bày hàng hóa. Khám phá ngay giải pháp trưng bày hiệu quả với giá kệ hấp dẫn từ Tân Phát!"
        />
        <meta name="author" content="Giá kệ Tân Phát" />
        <meta
          property="og:title"
          content="Kệ siêu thị tôn đục lỗ | Giá Kệ Tân Phát"
        />
        <meta
          property="og:description"
          content="Tân Phát mang đến cho bạn bộ sưu tập kệ V lỗ đa năng - giải pháp lưu trữ linh hoạt và tiện ích cho mọi nhu cầu trưng bày hàng hóa. Khám phá ngay giải pháp trưng bày hiệu quả với giá kệ hấp dẫn từ Tân Phát!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/digaabr5l/image/upload/v1705450749/gktanphat/baner11_copy_hegza4.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://giaketanphat.com/ke-v-lo" />
      </Head>
      <div className="mt-[60px] sm:mt-[91px] pt-1">
        <div className="container mx-auto p-3">
          <BreadCrumbs breadCrumbs={breadCrumbs} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {products.slice(0, 20).map((product, index) => (
              <KetonloItem key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export async function getServerSideProps() {
  try {
    const products = await Dataset.find({ category: "kevlo" });
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
export default KeVlo;
