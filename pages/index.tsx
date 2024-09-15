import { getData } from "../utils/fetchData";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import DefaultLayout from "../components/layout/DefaultLayout";
import { formatPosts, readPostsFromDb } from "../lib/utils";
import { getProductsByCategory } from "../lib/productUtils"; // Hàm để lấy sản phẩm theo danh mục
import Link from "next/link";
import { PostDetail,ProductItemType} from "../utils/types";
import Banner from "../components/common/Baner";
import PostCard from "../components/common/PostCard";
import Testimonlal from "../components/about/Testimonlal";
import HeroBlog from "../components/about/HeroBlog";
import Head from "next/head";
import ProductItem from "../components/product/ProductItem";
import KetonloItem from "../components/product/KetonloItem";


import SEO from "../components/product/SEO";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Home: NextPage<Props> = ({ posts, kesieuthiProducts,ketonloProducts}) => {
  
  return (
    <DefaultLayout>
      <Head>
        <title>Giá kệ siêu thị Tân Phát - Uy tín - Chất lượng - Dẫn đầu</title>
        <meta
          name="description"
          content="Giá kệ siêu thị Tân Phát, với gần một thập kỷ hoạt động trong ngành cung cấp giải pháp kệ hàng, đã nhanh chóng trở thành một trong những tên tuổi uy tín và đáng tin cậy tại Việt Nam"
        />
        <meta name="author" content="Giá kệ Tân Phát" />

        <meta
          property="og:title"
          content="Giá kệ siêu thị Tân Phát - Uy tín - Chất lượng - Dẫn đầu"
        />
        <meta
          name="og:description"
          content="Giá kệ siêu thị Tân Phát, với gần một thập kỷ hoạt động trong ngành cung cấp giải pháp kệ hàng, đã nhanh chóng trở thành một trong những tên tuổi uy tín và đáng tin cậy tại Việt Nam"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/digaabr5l/image/upload/v1705450749/gktanphat/baner11_copy_hegza4.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://giaketanphat.com" />
        
      </Head>
      <br />
      <Banner />
      <SEO className="hidden"/>
      <div className="">
        <div className="container mx-auto p-5">
          <div className="lg:flex w-full lg:w-10/12 mx-auto items-center justify-between mb-5">
          <h2 className="text-xl mt-5 sm:text-2xl md:text-2xl font-bold text-[#404041] dark:text-light dark:text-primary cursor-pointer">
          <Link href='/ke-sieu-thi' >
          KỆ SIÊU THỊ LƯNG LƯỚI
        </Link>
          </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
           {/* <Category /> */}
           {/* Kệ siêu thị  */}
           {kesieuthiProducts?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
           
          </div>
           {/* Hiển thị danh mục Kệ tôn đục lỗ */}
 
        </div>
        <div className="container mx-auto p-5">
          <div className="lg:flex w-full lg:w-10/12 mx-auto items-center justify-between mb-5">
          <h2 className="text-xl mt-5 sm:text-2xl md:text-2xl font-bold text-[#404041] dark:text-light dark:text-primary cursor-pointer">
          <Link href='ke-ton-duc-lo' >
          KỆ SIÊU THỊ TÔN ĐỤC LỖ
        </Link>
          </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
           {/* <Category /> */}
           {/* Kệ siêu thị  */}
           {ketonloProducts?.map((product) => (
            <KetonloItem key={product.id} product={product} />
          ))}
           
          </div>
        </div>
      </div>
      <HeroBlog className="" title="" subTitle="" />
      <div className="pb-10">
        <div className="container mx-auto p-3">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
            {posts.slice(0, 8).map((post, index) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
      <Testimonlal className="" />
      {/* <FacebookMsg /> */}
      
    </DefaultLayout>
  );
};
interface ServerSideResponse {
  posts: PostDetail[];
  kesieuthiProducts: ProductItemType[]; 
  ketonloProducts: ProductItemType[]; 
  
}
export const getServerSideProps: GetServerSideProps<
  ServerSideResponse
> = async () => {
  try {
    // Lấy sản phẩm "Kệ siêu thị"
  const kesieuthiProducts = await getProductsByCategory('kesieuthi', 10); // Giới hạn 5 sản phẩm "Kệ siêu thị"
  const ketonloProducts = await getProductsByCategory('ketonlo', 10); // Giới hạn 5 sản phẩm "Kệ siêu thị"
  
    // Read 8 posts from the database
    const posts = await readPostsFromDb(8, 0);
    // Format posts
    const formattedPosts = formatPosts(posts);
    return {
      props: {
        kesieuthiProducts: JSON.parse(JSON.stringify(kesieuthiProducts)),
        ketonloProducts: JSON.parse(JSON.stringify(ketonloProducts)), 
        posts: formattedPosts,
      },
    };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
};

export default Home;
