"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import banner from "../../public//images/social-banner.jpg";
import Gif from "../../public//images/ke-sieu-thi.gif";
import kedoi from "../../public//images/ke-sieu-thi-doi.jpg";
import cuahang from "../../public//images/lap-dat-ke-sieu-thi-luoi-doi.jpg";

import Link from "next/link";
// import post1 from "../../../public/images/post-1-min.jpg";
// import post2 from "../../../public/images/post-2-min.jpg";

const storyContent = {
  kstText: {
    heading: "Kệ siêu thị lưng lưới tại Tân Phát",

    p1: "Bạn đang tìm kiếm một đơn vị cung cấp uy tín để cung cấp giải pháp kệ hàng cho siêu thị mini hoặc cửa hàng tạp hoá của mình? Hãy cùng tham khảo một số mẫu kệ siêu thị mà Tân Phát đang cung cấp trên thị trường. Tất cả các mẫu kệ đều được cam kết về độ bền cao và được bảo hành trong 5 năm.",
    p2: "Đặc biệt, chúng tôi cung cấp dịch vụ vận chuyển và lắp đặt miễn phí tận nhà để tiết kiệm thời gian và công sức của bạn. Đừng ngần ngại liên hệ qua số điện thoại 0866.572.271 để biết thêm thông tin chi tiết về các mẫu kệ và nhận tư vấn từ đội ngũ chuyên nghiệp của chúng tôi. Nếu máy bận, vui lòng để lại tin nhắn và chúng tôi sẽ gọi lại ngay sau đó.",
  },
  kstWhy: {
    heading: "1. Kệ siêu thị lưng lưới phù hợp với những cửa hàng như nào",
    p1: "Kệ siêu thị lưng lưới là một giải pháp trưng bày hàng hóa linh hoạt và hiệu quả, phù hợp với nhiều loại cửa hàng khác nhau. Dưới đây là một số loại cửa hàng mà kệ siêu thị lưng lưới thường phù hợp:",
  },
  kstTS: {
    heading: "2. Thông số kỹ thuật của kệ siêu thị lưng lưới",
    p1: "Chiều cao: Có thể lựa chọn từ 120cm, 150cm, 180cm và 210cm.",
    p2: "Chiều dài: Có các tùy chọn chiều dài là 70cm, 90cm và 120cm",
    p3: "Chiều rộng kệ đơn: 41cm ",
    p4: "Chiều rộng kệ đôi: 76cm ",
    p5: "Chiều rộng mâm tầng: Có sẵn các kích thước 30cm -  35cm ",
    p6: "Tải trọng kệ: Tải trọng mỗi tầng kệ dao động từ 50kg đến 70kg, tùy thuộc vào cấu trúc và chất liệu của kệ",
    p7: "Số tầng kệ: Có thể lựa chọn từ 3 đến 6 tầng tùy theo nhu cầu sử dụng và không gian trưng bày.",
    p8: "Màu sắc: Màu sắc phổ biến trắng sữa, đen,",
    p9: "Diềm mica chắn hàng: Có các màu sắc như xanh dương, xanh lá, đỏ, trắng sữa và mica trong để lựa chọn.",
    p10: "Những thông số này cung cấp sự linh hoạt trong việc tùy chỉnh kệ siêu thị theo nhu cầu cụ thể của từng cửa hàng, đồng thời đảm bảo tính chất lượng và đa dạng trong trưng bày hàng hóa.",
    p11: "Nếu bạn đang phân vân không biết chọn loại giá kệ siêu thị nào phù hợp cho cửa hàng của mình, đừng lo lắng. Đội ngũ nhân viên của chúng tôi luôn sẵn sàng tư vấn miễn phí cho bạn 24/7. Dựa trên loại mặt hàng bạn kinh doanh và không gian cửa hàng, chúng tôi sẽ cung cấp những tư vấn chuyên môn và phù hợp nhất, giúp bạn tiết kiệm chi phí và tối ưu hóa hiệu suất kinh doanh.",
  },
  kstList: [
    {
      title: "Siêu thị mini và cửa hàng tạp hoá",
      description:
        "Kệ siêu thị lưng lưới thích hợp với các cửa hàng nhỏ với không gian trưng bày hạn chế. Chúng có thể được sử dụng để trưng bày các sản phẩm tiêu dùng hàng ngày như thực phẩm, đồ uống, sản phẩm chăm sóc cá nhân và nhiều loại hàng hóa khác.",
    },
    {
      title: "Cửa hàng quần áo và phụ kiện",
      description:
        "Kệ lưng lưới có thể được sử dụng để trưng bày quần áo, túi xách, giày dép và các phụ kiện khác một cách gọn gàng và thu hút. Việc treo các sản phẩm trên lưới giúp tạo ra một không gian trưng bày thú vị và sáng tạo.",
    },
    {
      title: "Cửa hàng đồ chơi và quà lưu niệm",
      description:
        "Kệ siêu thị lưng lưới cũng là lựa chọn phù hợp để trưng bày đồ chơi, đồ trang trí và quà lưu niệm. Chúng tạo ra một không gian mở và thuận tiện để khách hàng có thể dễ dàng lựa chọn và tham quan các sản phẩm.",
    },
    {
      title: "Cửa hàng văn phòng phẩm và đồ dùng học tập",
      description:
        "Với tính linh hoạt và dễ dàng sắp xếp hàng hóa, kệ siêu thị lưng lưới là một lựa chọn tuyệt vời cho các cửa hàng cung cấp văn phòng phẩm, đồ dùng học tập và đồ dùng gia đình. Chúng giúp tạo ra một không gian trưng bày gọn gàng và dễ dàng để khách hàng lựa chọn.",
    },
  ],
  kstWhy2: {
    heading:
      "3. Tại sao bạn nên chọn lắp đặt kệ siêu thị lưng lưới tại Tân Phát?",
  },
  kstList2: [
    {
      title:
        "1. Chất lượng đảm bảo: Tân Phát cung cấp các sản phẩm chất lượng cao, bền bỉ và đáng tin cậy. Kệ siêu thị lưng lưới được thiết kế và sản xuất với các tiêu chuẩn nghiêm ngặt, đảm bảo sự an toàn cho hàng hóa và người sử dụng.",
    },
    {
      title:
        "2. Đa dạng mẫu mã: Tân Phát cung cấp nhiều mẫu kệ siêu thị lưng lưới với đa dạng về kích thước, màu sắc và kiểu dáng, từ kệ đơn giản đến kệ đa năng, phù hợp với mọi loại cửa hàng và nhu cầu trưng bày sản phẩm.",
    },
    {
      title:
        "3. Dịch vụ chuyên nghiệp: Đội ngũ nhân viên tại Tân Phát có kinh nghiệm và chuyên môn cao trong việc lắp đặt kệ siêu thị lưng lưới. Chúng tôi cam kết cung cấp dịch vụ lắp đặt nhanh chóng, chính xác và chuyên nghiệp, đảm bảo sự hài lòng của khách hàng.",
    },
    {
      title:
        "4. Bảo hành dài hạn: Tân Phát cam kết bảo hành sản phẩm trong thời gian dài, thường là 5 năm, để đảm bảo sự yên tâm và an tâm cho khách hàng.",
    },
    {
      title:
        "5. Giá cả cạnh tranh: Tân Phát cam kết cung cấp giá cả cạnh tranh và hợp lý cho các sản phẩm và dịch vụ của mình, đảm bảo sự hiệu quả kinh doanh và tiết kiệm chi phí cho khách hàng.",
    },
    {
      title:
        "6. Dịch vụ hậu mãi tốt: Sau khi lắp đặt, Tân Phát vẫn sẽ tiếp tục hỗ trợ khách hàng với các dịch vụ hậu mãi như sửa chữa, bảo trì và tư vấn về việc bố trí không gian trưng bày hàng hóa.",
    },
  ],
};

const Kelungluoi = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto">
        <motion.div
          inherit={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.8,
              duration: 0.5,
            },
          }}
          viewport={{ once: true }}
          className="lg:flex flex-col mt-5 text-left w-full lg:w-10/12 mx-auto "
        >
          {storyContent.kstText.heading && (
            <h1 className="text-center uppercase font-bold text-[#ff5e00fb] text-2xl md:text-3xl text-gray-800 mb-5 dark:text-light dark:text-primary">
              {storyContent.kstText.heading}
            </h1>
          )}

          {storyContent.kstText.p1 && (
            <b className="leading-relaxed text-gray-500 mb-2 text-dark dark:text-primary">
              {storyContent.kstText.p1}
            </b>
          )}

          <p className="leading-relaxed text-gray-500 mb-2 text-dark dark:text-primary">
            Đặc biệt, chúng tôi cung cấp dịch vụ vận chuyển và lắp đặt miễn phí
            tận nhà để tiết kiệm thời gian và công sức của bạn. Đừng ngần ngại
            liên hệ qua số điện thoại{" "}
            <b className="text-[#ff5e00fb]">0866.572.271 </b> để biết thêm thông
            tin chi tiết về các mẫu kệ và nhận tư vấn từ đội ngũ chuyên nghiệp
            của chúng tôi. Nếu máy bận, vui lòng để lại tin nhắn và chúng tôi sẽ
            gọi lại ngay sau đó.
          </p>
          <Image src={banner} />
          {storyContent.kstWhy.heading && (
            <h2 className="font-bold text-gray-800 text-xl md:text-2xl mt-2 mb-5 dark:text-light dark:text-primary">
              {storyContent.kstWhy.heading}
            </h2>
          )}

          <p className="leading-relaxed text-gray-500 text-dark dark:text-primary">
            Tất cả các sản phẩm{" "}
            <Link href="/ke-sieu-thi">
              <a className="text-[red]"> kệ siêu thị lưng lưới</a>
            </Link>{" "}
            của Tân Phát được sản xuất tại nhà máy có dây chuyền công nghệ cao
            tại huyện Phúc Thọ, Hà Nội. Điều này không chỉ đảm bảo chất lượng
            sản phẩm mà còn giúp giảm thiểu các chi phí trung gian, từ đó mang
            lại giá thành hợp lý và cạnh tranh nhất cho khách hàng.
          </p>

          {storyContent.kstWhy.p1 && (
            <p className="leading-relaxed text-gray-500 mb-2 text-dark dark:text-primary">
              {storyContent.kstWhy.p1}
            </p>
          )}
          <Image src={kedoi} />

          <ul className="list-none">
            {storyContent.kstList.map((item, index) => (
              <li className="flex items-start mb-3" key={item.title}>
                <div>
                  <h3 className="text-gray-800 text-base text-dark dark:text-primary font-semibold">
                    {item.title}:
                  </h3>

                  <p className="text-gray-500 text-dark dark:text-light text-dark dark:text-primary">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {storyContent.kstTS.heading && (
            <h2 className="font-bold text-gray-800 text-xl md:text-2xl mt-2 mb-5 dark:text-light dark:text-primary">
              {storyContent.kstTS.heading}
            </h2>
          )}

          {storyContent.kstTS.p1 && (
            <p className="leading-relaxed mb-1 text-dark dark:text-primary">
              {storyContent.kstTS.p1}
            </p>
          )}
          {storyContent.kstTS.p2 && (
            <p className="leading-relaxed mb-1 text-dark dark:text-primary">
              {storyContent.kstTS.p2}
            </p>
          )}
          {storyContent.kstTS.p3 && (
            <p className="leading-relaxed mb-1 text-dark dark:text-primary">
              {storyContent.kstTS.p3}
            </p>
          )}
          {storyContent.kstTS.p4 && (
            <p className="leading-relaxed mb-1 text-dark dark:text-primary">
              {storyContent.kstTS.p4}
            </p>
          )}
          {storyContent.kstTS.p5 && (
            <p className="leading-relaxed mb-1 text-dark dark:text-primary">
              {storyContent.kstTS.p5}
            </p>
          )}
          {storyContent.kstTS.p6 && (
            <p className="leading-relaxed mb-1 text-dark dark:text-primary">
              {storyContent.kstTS.p6}
            </p>
          )}
          {storyContent.kstTS.p7 && (
            <p className="leading-relaxed mb-1 text-dark dark:text-primary">
              {storyContent.kstTS.p7}
            </p>
          )}
          {storyContent.kstTS.p8 && (
            <p className="leading-relaxed mb-1 text-dark dark:text-primary">
              {storyContent.kstTS.p8}
            </p>
          )}
          {storyContent.kstTS.p9 && (
            <p className="leading-relaxed mb-1 text-dark dark:text-primary">
              {storyContent.kstTS.p9}
            </p>
          )}
          <Image src={Gif} />

          {storyContent.kstTS.p10 && (
            <b className="leading-relaxed mb-1 text-dark dark:text-primary">
              {storyContent.kstTS.p10}
            </b>
          )}
          {storyContent.kstTS.p11 && (
            <i className="leading-relaxed mb-1 text-dark dark:text-primary">
              {storyContent.kstTS.p11}
            </i>
          )}

          {storyContent.kstWhy2.heading && (
            <h2 className="font-bold text-gray-800 text-xl md:text-2xl mt-2 mb-5 dark:text-light dark:text-primary ">
              {storyContent.kstWhy2.heading}
            </h2>
          )}
          <b className="text-dark dark:text-primary">
            {" "}
            Lắp đặt kệ siêu thị lưng lưới tại{" "}
            <Link href="https://giaketanphat.com/">
              <a className="text-[red]"> Tân Phát </a>
            </Link>{" "}
            có nhiều lợi ích mà bạn nên xem xét:
          </b>
          <ul className="list-none">
            {storyContent.kstList2.map((item, index) => (
              <li className="flex items-start mb-3" key={item.title}>
                <div>
                  <p className="text-dark dark:text-primary">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
          <Image src={cuahang} />

          <b className="leading-relaxed text-dark dark:text-primary">
            Lắp đặt kệ siêu thị lưng lưới tại Tân Phát không chỉ mang lại sản
            phẩm chất lượng cao mà còn đi kèm với các dịch vụ chuyên nghiệp và
            hậu mãi tốt, giúp tối ưu hóa hoạt động kinh doanh của bạn.
          </b>
          <p className="leading-relaxed text-gray-500 mb-2 text-dark dark:text-primary">
            Với sự đa dạng và chất lượng của sản phẩm kệ siêu thị từ Giá kệ siêu
            thị Tân Phát, bạn chỉ cần 1 giây để tìm ra sản phẩm phù hợp và giao
            cho khách hàng một cách nhanh chóng và hiệu quả nhất. Điều này không
            chỉ giúp tăng hiệu suất làm việc mà còn đem lại sự hài lòng và tin
            tưởng từ phía khách hàng.
          </p>
          <p className="leading-relaxed text-gray-500 mb-2 text-dark dark:text-primary">
            Nếu bạn đang tìm kiếm các giải pháp lưu trữ và trưng bày hàng hóa
            cho kho hàng của mình, hãy liên hệ với chúng tôi qua Hotline, Zalo:
            <b className="text-[#ff5e00fb]"> 0866.572.271 </b> hoặc qua fanpage
            chính thức
            <Link href="https://www.facebook.com/giaketanphathn">
              <a className="text-[blue] font-bold"> Giá kệ Tân Phát </a>
            </Link>{" "}
            để được tư vấn chi tiết hơn.
          </p>
          <b className="leading-relaxed text-dark dark:text-primary">
            Đội ngũ chuyên viên của chúng tôi sẽ đồng hành cùng bạn để đưa ra
            các giải pháp tối ưu nhất, phù hợp với nhu cầu và yêu cầu cụ thể của
            bạn. Hãy liên hệ ngay để nhận được sự hỗ trợ tận tình và chuyên
            nghiệp nhất từ Giá kệ siêu thị Tân Phát!
          </b>
        </motion.div>
      </div>
    </section>
  );
};

export default Kelungluoi;
