import { useState } from "react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import InfiniteScrollPosts from "../../components/common/InfiniteScrollPosts";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { formatPosts, readPostsFromDb } from "../../lib/utils";
import { PostDetail, UserProfile } from "../../utils/types";
import axios from "axios";
import { useSession } from "next-auth/react";
import { filterPosts } from "../../utils/helper";
import HeroBlog from "../../components/about/HeroBlog";
import Head from 'next/head';


type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Blogs: NextPage<Props> = ({ posts }) => {
  const [postsToRender, setPostsToRender] = useState(posts);
  const [hasMorePosts, setHasMorePosts] = useState(posts.length >= limit);

  const { data } = useSession();
  const profile = data?.user as UserProfile;

  const isAdmin = profile && profile.role === "admin";

  const fetchMorePosts = async () => {
    try {
      pageNo++;
      const { data } = await axios(
        `/api/posts?limit=${limit}&skip=${postsToRender.length}`
      );
      if (data.posts.length < limit) {
        setPostsToRender([...postsToRender, ...data.posts]);
        setHasMorePosts(false);
      } else setPostsToRender([...postsToRender, ...data.posts]);
    } catch (error) {
      setHasMorePosts(false);
      console.log(error);
    }
  };

  const ogImageUrl = '/public/social-banner.jpg';


  return (
    <> 
    <DefaultLayout>
    <Head>
      <title>Bài viết | Giá kệ siêu thị Tân Phát </title>
        <meta name="og:description" content="Giá kệ siêu thị Tân Phát, với gần một thập kỷ hoạt động trong ngành cung cấp giải pháp kệ hàng, đã nhanh chóng trở thành một trong những tên tuổi uy tín và đáng tin cậy tại Việt Nam" />
        <meta property="og:url" content="https://giaketanphat.com/bai-viet" />
        <meta property="og:image" content={ogImageUrl} />

      </Head>
      <div className="pb-12">
        <HeroBlog className="mt-20" title="" subTitle="" />
        <InfiniteScrollPosts
          hasMore={hasMorePosts}
          next={fetchMorePosts}
          dataLength={postsToRender.length}
          posts={postsToRender}
          showControls={isAdmin}
          onPostRemoved={(post) => setPostsToRender(filterPosts(posts, post))}
        />
      </div>
    </DefaultLayout>
    </>
  );
};

interface ServerSideResponse {
  posts: PostDetail[];
}

let pageNo = 0;
const limit = 8;

export const getServerSideProps: GetServerSideProps<
  ServerSideResponse
> = async () => {
  try {
    // read posts
    const posts = await readPostsFromDb(limit, pageNo);
    // format posts
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

export default Blogs;
