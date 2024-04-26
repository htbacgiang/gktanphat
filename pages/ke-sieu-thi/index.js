import DefaultLayout from "../../components/layout/DefaultLayout";
import Head from "next/head";
import { useState, useContext, useEffect } from "react";
import ProductItem from "../../components/product/ProductItem";
import Dataset from "../../models/Product";
import BreadCrumbs from "../../components/layout/BreadCrumbs";
import Kelungluoi from "../../components/product/Kelungluoi";
const Kesieuthi = (props) => {
  const [products, setProducts] = useState(props.products);
  const breadCrumbs = [
    { name: "Trang chủ", url: "/" },

    { name: "Sản phẩm", url: "/san-pham" },
    {
      name: "Kệ siêu thị",
      url: "/ke-sieu-thi",
    },
  ];
  return (
    <DefaultLayout>
      <Head>
        <title>Kệ siêu thị lưng lưới | Giá Kệ Tân Phát</title>
        <meta
          name="description"
          content="Dòng sản phẩm kệ siêu thị lưng lưới của Tân Phát mang lại sự tiện lợi và hiệu quả cho việc trưng bày hàng hóa trong cửa hàng của bạn. Khám phá giải pháp kệ linh hoạt này với mức giá phải chăng từ Tân Phát ngay hôm nay!"
        />
        <meta name="author" content="Giá kệ Tân Phát" />
        <meta
          property="og:title"
          content="Kệ siêu thị lưng lưới | Giá Kệ Tân Phát"
        />
        <meta
          property="og:description"
          content="Dòng sản phẩm kệ siêu thị lưng lưới của Tân Phát mang lại sự tiện lợi và hiệu quả cho việc trưng bày hàng hóa trong cửa hàng của bạn. Khám phá giải pháp kệ linh hoạt này với mức giá phải chăng từ Tân Phát ngay hôm nay!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/digaabr5l/image/upload/v1713262970/gktanphat/baner-ke-sieu-thi_mbp43g.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://giaketanphat.com/ke-sieu-thi"
        />
      </Head>
      <div className="mt-[60px] sm:mt-[91px] pt-3">
        <div className="container mx-auto p-3">
          <BreadCrumbs breadCrumbs={breadCrumbs} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {products.slice(0, 20).map((product, index) => (
              <ProductItem key={product._id} product={product} />
            ))}
          </div>
          {/* {parse(product.content)} */}
          <Kelungluoi />
        </div>
      </div>
    </DefaultLayout>
  );
};

export async function getServerSideProps() {
  try {
    const products = await Dataset.find({ category: "kesieuthi" });
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
