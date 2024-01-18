import { NextPage } from 'next';
import Hero from '../../components/about/Hero';
import WhyUs from '../../components/about/WhyUs';
import Story from '../../components/about/Story';
import DefaultLayout from '../../components/layout/DefaultLayout';
import Head from 'next/head';
import { any } from 'joi';

interface Props {}

const About: NextPage<Props> = () => {
  return (
    <DefaultLayout>
        <Head>
        <title>Giới thiệu về giá kệ siêu thị Tân Phát</title>
        <meta name="description" content="Giá kệ siêu thị Tân Phát, với gần một thập kỷ hoạt động trong ngành cung cấp giải pháp kệ hàng, đã nhanh chóng trở thành một trong những tên tuổi uy tín và đáng tin cậy tại Việt Nam" />
        <meta name="author" content="Giá kệ Tân Phát" />

        <meta property="og:title" content="Giới thiệu về giá kệ siêu thị Tân Phát" />
        <meta property="og:description" content="Giá kệ siêu thị Tân Phát, với gần một thập kỷ hoạt động trong ngành cung cấp giải pháp kệ hàng, đã nhanh chóng trở thành một trong những tên tuổi uy tín và đáng tin cậy tại Việt Nam" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/digaabr5l/image/upload/v1705450749/gktanphat/baner11_copy_hegza4.jpg" />
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:url" content="https://giaketanphat.com/gioi-thieu" />
      </Head>
    <Hero className="mt-14" title="GIÁ KỆ SIÊU THỊ TÂN PHÁT" subTitle=" "/>
    <Story className=""  />
    <WhyUs className="" ref={any} />
    </DefaultLayout>
  )
};

export default About;