import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import parse from "html-react-parser";
import DefaultLayout from "../../components/layout/DefaultLayout";
import dbConnect from "../../lib/dbConnect";
import Post from "../../models/Post";
import Head from 'next/head';
import Share from "../../components/common/Share";
import Link from "next/link";
type Props = InferGetStaticPropsType<typeof getStaticProps>;

const host = 'https://giaketanphat.com/bai-viet'

export const APP_NAME = "Giá kệ Tân Phát";
const SinglePost: NextPage<Props> = ({ post }) => {
  const { title, content, meta, slug, thumbnail, createdAt, relatedPosts } = post;
  return (
      <DefaultLayout>
        <Head>
        <title>{title}</title>
        <meta name="description" content={meta} />
        <meta name="author" content="Giá kệ Tân Phát" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={meta}/>
        <meta property="og:type" content="website" />
        <meta property="og:image" content={thumbnail} />
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:url" content={`https://giaketanphat.com/bai-viet/${slug}`} />

      </Head>
      <div className="pb-20 container mx-auto px-4 mt-[60px] sm:mt-[91px] max-w-2xl md:max-w-4xl lg:max-w-5xl">
      <br />
        <h1 className="text-4xl font-semibold text-primary-dark dark:text-primary py-2 item-center text-center ">
          {title}
        </h1>
        <div className="">
        <Share url={host + '/' +slug}/>
        <br />
        </div>
        <div className="blog prose prose-sm dark:prose-invert max-w-2xl md:max-w-4xl lg:max-w-5xl">
          {parse(content)}
        </div>
        <div className="pt-5 max-w-2xl md:max-w-4xl lg:max-w-5xl">
        <p className="text-xl font-semibold text-primary-dark dark:text-primary p-2 mb-4">
            Bài viết gần đây
          </p>
    <div className="flex flex-col space-y-4">
      {relatedPosts.map((p) =>{
        return <Link key={p.slug} href={p.slug}>
          <a className="font-semibold text-primary-dark dark:text-primary hover:underline">
            {p.title}
          </a>
           </Link>
      })}
    </div>
        </div>
      </div>
      </DefaultLayout>
  );
};

export default SinglePost;

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    await dbConnect();
    const posts = await Post.find().select("slug");
    const paths = posts.map(({ slug }) => ({ params: { slug } }));
    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    return {
      paths: [{ params: { slug: "/" } }],
      fallback: false,
    };
  }
};

interface StaticPropsResponse {
  post: {
    id: string;
    title: string;
    content: string;
    meta: string;
    tags: string[];
    slug: string;
    thumbnail: string;
    createdAt: string;
    relatedPosts: {
      id: string;
      title: string;
      slug: string;
  }[]
  };
}

export const getStaticProps: GetStaticProps<
  StaticPropsResponse,
  { slug: string }
> = async ({ params }) => {
  try {
    await dbConnect();
    const post = await Post.findOne({ slug: params?.slug });
    if (!post) return { notFound: true };
    const posts = await Post.find({
      _id:{$ne: post._id}
    }).sort({createdAt: 'desc'}).limit(5).select('slug title')
    const relatedPosts = posts.map(p =>{
      return{id:p._id.toString(), title:p.title, slug:p.slug}
    })

    const { _id, title, content, meta, slug, tags, thumbnail, createdAt } =
      post;
    return {
      props: {
        post: {
          id: _id.toString(),
          title,
          content,
          meta,
          slug,
          tags,
          thumbnail: thumbnail?.url || "",
          createdAt: createdAt.toString(),
          relatedPosts,

        },
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};
