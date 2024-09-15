import DefaultLayout from "../../components/layout/DefaultLayout";
import Head from "next/head";
import ProductItem from "../../components/product/ProductItem";
import Dataset from "../../models/Product";
import BreadCrumbs from "../../components/layout/BreadCrumbs";
import Kelungluoi from "../../components/product/Kelungluoi";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";

const Kesieuthi = ({ products, totalProducts, currentPage, totalPages }) => {
  const breadCrumbs = [
    { name: "Trang chủ", url: "/" },
    { name: "Sản phẩm", url: "/san-pham" },
    {
      name: "Kệ siêu thị",
      url: "/ke-sieu-thi",
    },
  ];
  const router = useRouter();

  const handleChange = (event, value) => {
    // Update the URL with the new page number
    router.push(`/ke-sieu-thi?page=${value}`);
  };

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
            {products.map((product, index) => (
              <ProductItem key={product._id} product={product} />
            ))}
          </div>

          {/* Nút phân trang */}

          <div className="mt-5">
            {/* Phân trang với giao diện MUI */}
            <Stack
              spacing={2}
              className="mt-5"
              justifyContent="center"
              alignItems="center"
            >
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handleChange}
                shape="rounded-full"
                color="primary"
                siblingCount={1}
                boundaryCount={1}
                showFirstButton
                showLastButton
              />
            </Stack>
          </div>
        </div>
      </div>
      <Kelungluoi />
    </DefaultLayout>
  );
};

export async function getServerSideProps(context) {
  const page = parseInt(context.query.page) || 1; // Trang hiện tại, mặc định là 1
  const limit = 10; // Số lượng sản phẩm trên mỗi trang
  const skip = (page - 1) * limit; // Bỏ qua số sản phẩm dựa trên trang

  try {
    // Lấy tổng số sản phẩm
    const totalProducts = await Dataset.countDocuments({
      category: "kesieuthi",
    });
    // Lấy sản phẩm cho trang hiện tại
    const products = await Dataset.find({ category: "kesieuthi" })
      .skip(skip)
      .limit(limit);

    return {
      props: {
        products: JSON.parse(JSON.stringify(products)),
        totalProducts,
        currentPage: page,
        totalPages: Math.ceil(totalProducts / limit),
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: [],
        totalProducts: 0,
        currentPage: 1,
        totalPages: 1,
      },
    };
  }
}

export default Kesieuthi;
