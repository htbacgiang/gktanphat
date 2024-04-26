import { useState } from "react";
import { getData } from "../../utils/fetchData";
import DefaultLayout from "../../components/layout/DefaultLayout";
import Head from "next/head";
import HeroProduct from "../../components/about/HeroProduct";
import Category from "../../components/product/Category";
const Products = (props) => {
  const [products, setProducts] = useState(props.products);
  return (
    <DefaultLayout>
      <Head>
        <title>Sản Phẩm | Giá Kệ Tân Phát</title>
        <meta
          name="description"
          content="Giá kệ siêu thị Tân Phát, với gần một thập kỷ hoạt động trong ngành cung cấp giải pháp kệ hàng, đã nhanh chóng trở thành một trong những tên tuổi uy tín và đáng tin cậy tại Việt Nam"
        />
        <meta name="author" content="Giá kệ Tân Phát" />
        <meta property="og:title" content="Kệ Siêu Thị | Giá Kệ Tân Phát" />
        <meta
          property="og:description"
          content="Giá kệ siêu thị Tân Phát, với gần một thập kỷ hoạt động trong ngành cung cấp giải pháp kệ hàng, đã nhanh chóng trở thành một trong những tên tuổi uy tín và đáng tin cậy tại Việt Nam"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/digaabr5l/image/upload/v1705450749/gktanphat/baner11_copy_hegza4.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://giaketanphat.com/san-pham" />
      </Head>

      <HeroProduct
        className="mt-[60px] sm:mt-[91px] pt-1"
        title=""
        subTitle=""
      />
      <div className="pb-10">
        <div className="container mx-auto p-5">
          <div className="gap-3 mt-6">
            <Category />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export async function getServerSideProps() {
  const res = await getData("product");
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
export default Products;
