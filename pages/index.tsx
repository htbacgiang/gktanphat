import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import DefaultLayout from "../components/layout/DefaultLayout";
import { formatPosts, readPostsFromDb } from "../lib/utils";
import { PostDetail, UserProfile } from "../utils/types";
import axios from "axios";
import { useSession } from "next-auth/react";
import { filterPosts } from "../utils/helper";
import useAuth from "../hooks/useAuth";
import Banner from "../components/common/Baner";
import PostCard from "../components/common/PostCard";
import Testimonlal from "../components/about/Testimonlal";
import HeroBlog from "../components/about/HeroBlog";
import FacebookMsg from "../components/common/FacebookMsg";
import Head from 'next/head';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
const Home: NextPage<Props> = ({ posts }) => {
  return (

    <DefaultLayout> 
        <Head>
        <title>Giá kệ siêu thị Tân Phát - Uy tín - Chất lượng - Dẫn đầu</title>
        <meta name="description" content="Giá kệ siêu thị Tân Phát, với gần một thập kỷ hoạt động trong ngành cung cấp giải pháp kệ hàng, đã nhanh chóng trở thành một trong những tên tuổi uy tín và đáng tin cậy tại Việt Nam" />
        <meta name="author" content="Giá kệ Tân Phát" />

        <meta property="og:title" content="Giá kệ siêu thị Tân Phát - Uy tín - Chất lượng - Dẫn đầu" />
        <meta name="og:description" content="Giá kệ siêu thị Tân Phát, với gần một thập kỷ hoạt động trong ngành cung cấp giải pháp kệ hàng, đã nhanh chóng trở thành một trong những tên tuổi uy tín và đáng tin cậy tại Việt Nam" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/digaabr5l/image/upload/v1705450749/gktanphat/baner11_copy_hegza4.jpg" />
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:url" content="https://giaketanphat.com" />
      </Head>
      <br />
      <Banner/>
      <HeroBlog className="" title="" subTitle=""/>
      <div className="pb-10">
         <div className="container mx-auto p-3">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6">
            {posts.slice(0, 6).map((post, index) => (
              <PostCard
                key={post.slug}
                post={post}
              />
            ))}
          </div>
        </div>
      </div>
      <Testimonlal className="" />
      <FacebookMsg />

    </DefaultLayout>
  );
};
interface ServerSideResponse {
  posts: PostDetail[];
}

export const getServerSideProps: GetServerSideProps<
  ServerSideResponse
> = async () => {
  try {
    // Read 8 posts from the database
    const posts = await readPostsFromDb(6, 0);
    // Format posts
    const formattedPosts = formatPosts(posts);
    return {
      props: {
        posts: formattedPosts,
      },
    };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
};

export default Home;
