import Link from "next/link";
import UserNav from "../components/common/nav/UserNav";
import Error from '../public/404.png'
import Image from "next/image";
import DefaultLayout from "../components/layout/DefaultLayout";

import { FacebookIcon, FacebookShareButton, TwitterShareButton,TwitterIcon,
    WhatsappIcon,WhatsappShareButton,RedditShareButton,RedditIcon,LinkedinShareButton,LinkedinIcon   } from 'next-share';
const NotFound = () => {
  return (
<DefaultLayout > 


<div id="notfound" className="">
		{/* <UserNav /> */}
		<div className="notfound mt-[250px] sm:mt-[360px]">

			<div className="">
			<Image src={Error} />
			</div>
			<h2>Oops! Không tìm thấy trang</h2>
			<p>Click vào đây để: <Link href="/">Quay lại trang chủ</Link></p>
			<div className="flex justify-center px-2">
			<FacebookIcon round size={30} className="hover:scale-125 transition-all ease duration-200 mr-2"/>
				<Link href="https://www.facebook.com/giaketanphathn/"> GIÁ KỆ SIÊU THỊ TÂN PHÁT</Link>
			</div>
		</div>
	</div>
	</DefaultLayout>

  );
};
export default NotFound;
