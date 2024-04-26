import DefaultLayout from "../../components/layout/DefaultLayout";
import Head from "next/head";
import { getData } from "../../utils/fetchData";
import { useState, useContext, useEffect } from "react";
import PhuKienItem from "../../components/product/PhuKienItem";
import Dataset from "../../models/Product";
import BreadCrumbs from "../../components/layout/BreadCrumbs";
const PhukienST = (props) => {
  const [products, setProducts] = useState(props.products);
  const breadCrumbs = [
    { name: "Trang chủ", url: "/" },

    { name: "Sản phẩm", url: "/san-pham" },
    {
      name: "Phụ kiện siêu thị",
      url: "/phu-kien-sieu-thi",
    },
  ];
  return (
    <DefaultLayout>
      <Head>
        <title>Phụ kiện siêu thị | Giá Kệ Tân Phát</title>
        <meta
          name="description"
          content="Khám phá bộ sưu tập phụ kiện siêu thị đa dạng và chất lượng tại Tân Phát. Từ kệ trưng bày đến hệ thống treo móc, chúng tôi cung cấp các giải pháp phụ kiện đáng tin cậy để tối ưu hóa không gian cửa hàng của bạn. Khám phá ngay để tạo ra trải nghiệm mua sắm tốt hơn!"
        />
        <meta name="author" content="Giá kệ Tân Phát" />
        <meta
          property="og:title"
          content="Kệ siêu thị tôn đục lỗ | Giá Kệ Tân Phát"
        />
        <meta
          property="og:description"
          content="Khám phá bộ sưu tập phụ kiện siêu thị đa dạng và chất lượng tại Tân Phát. Từ kệ trưng bày đến hệ thống treo móc, chúng tôi cung cấp các giải pháp phụ kiện đáng tin cậy để tối ưu hóa không gian cửa hàng của bạn. Khám phá ngay để tạo ra trải nghiệm mua sắm tốt hơn!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/digaabr5l/image/upload/v1705450749/gktanphat/baner11_copy_hegza4.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://giaketanphat.com/phu-kien-sieu-thi"
        />
      </Head>
      <div className="mt-[60px] sm:mt-[91px] pt-1">
        <div className="container mx-auto p-3">
          <BreadCrumbs breadCrumbs={breadCrumbs} />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {products.slice(0, 20).map((product, index) => (
              <PhuKienItem key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export async function getServerSideProps() {
  try {
    const products = await Dataset.find({ category: "thietbi" });
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
export default PhukienST;
