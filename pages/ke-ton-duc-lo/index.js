import DefaultLayout from "../../components/layout/DefaultLayout";
import Head from "next/head";
import KetonloItem from "../../components/product/KetonloItem";
import Dataset from "../../models/Product";
import BreadCrumbs from "../../components/layout/BreadCrumbs";
import Ketonlo from "../../components/product/Ketonlo";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
const Kesieuthi = ({ products, totalProducts, currentPage, totalPages }) => {
  const breadCrumbs = [
    { name: "Trang chủ", url: "/" },
    { name: "Sản phẩm", url: "/san-pham" },
    {
      name: "Kệ tôn đục lỗ",
      url: "/ke-ton-duc-lo",
    },
  ];
  const router = useRouter();

  const handleChange = (event, value) => {
    // Update the URL with the new page number
    router.push(`/ke-ton-duc-lo?page=${value}`);
  };
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
      <div className="mt-[60px] sm:mt-[91px] pt-3">
        <div className="container mx-auto p-3">
          <BreadCrumbs breadCrumbs={breadCrumbs} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {products.map((product, index) => (
              <KetonloItem key={product._id} product={product} />
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
      <Ketonlo />
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
      category: "ketonlo",
    });
    // Lấy sản phẩm cho trang hiện tại
    const products = await Dataset.find({ category: "ketonlo" })
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
