import Link from "next/link";
import UserNav from "../components/common/nav/UserNav";

import { FacebookIcon, FacebookShareButton, TwitterShareButton,TwitterIcon,
    WhatsappIcon,WhatsappShareButton,RedditShareButton,RedditIcon,LinkedinShareButton,LinkedinIcon   } from 'next-share';
const NotFound = () => {
  return (
<>
<div id="notfound">
		{/* <UserNav /> */}

		<div className="notfound">
			<div className="notfound-404">
				<h1>404</h1>
			</div>
			<h2>Oops! Không tìm thấy trang</h2>
			<p>Click vào đây để: <Link href="/">Quay lại trang chủ</Link></p>
			<div className="flex justify-center px-2">
			<FacebookIcon round size={30} className="hover:scale-125 transition-all ease duration-200 mr-2"/>
				<Link href="https://www.facebook.com/giaketanphathn/"> GIÁ KỆ SIÊU THỊ TÂN PHÁT</Link>
			</div>
		</div>
		
	</div>
			
</>
  );
};
export default NotFound;
