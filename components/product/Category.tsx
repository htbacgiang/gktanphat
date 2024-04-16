import Link from "next/link";
import Image from 'next/image';
import KST from '../../public//images/ke-sieu-thi.jpg';
import KTL from '../../public//images/ke-ton-lo.jpg';
import KV from '../../public//images/ke-v-lo.jpg';
import TBTS from '../../public//images/phu-kien.jpg';


const Category  = () =>{
    return(
    <section className="gap-5 grid grid-cols-2 md:grid-cols-4">
    <div className="border w-full max-w-sm rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-transform translate-y-0.5 cursor-pointer">
      <Link href="/ke-sieu-thi">
        <a className="flex flex-col items-stretch" href="/ke-sieu-thi">
          <div className="aspect-16/9">
            <Image
              alt="kệ siêu thị"
              className="object-cover w-full aspect-[1.5] dark:filter dark:grayscale dark:contrast-150 transition-transform
              hover:scale-105 ease duration-300"
              src={KST}
            />
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between items-center">
            <div className="grid gap-1.5">
              <h3 className="font-bold line-clamp-2 text-[#f1592a]">KỆ SIÊU THỊ LƯNG LƯỚI</h3>
            </div>
          </div>
        </a>
      </Link>

    </div>
    <div className="border w-full max-w-sm rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-transform translate-y-0.5 cursor-pointer">
      <Link href="/ke-ton-duc-lo">
        <a className="flex flex-col items-stretch" href="/ke-ton-duc-lo">
          <div className="aspect-16/9">
            <Image
              alt="kệ siêu thị tôn đục lỗ"
              className="object-cover w-full aspect-[1.5] dark:filter dark:grayscale dark:contrast-150 transition-transform
              hover:scale-105 ease duration-300"
              src={KTL}
            />
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between items-center">
            <div className="grid gap-1.5">
              <h3 className="font-bold line-clamp-2 text-[#f1592a]">KỆ SIÊU THỊ TÔN LỖ</h3>
            </div>
          </div>
        </a>
      </Link>

    </div>
    <div className="border w-full max-w-sm rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-transform translate-y-0.5 cursor-pointer">
      <Link href="/ke-v-lo">
        <a className="flex flex-col items-stretch" href="/ke-v-lo">
          <div className="aspect-16/9">
            <Image
              alt="kệ v lỗ đa năng"
              className="object-cover w-full aspect-[1.5] dark:filter dark:grayscale dark:contrast-150 transition-transform
              hover:scale-105 ease duration-300"
              src={KV}
            />
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between items-center">
            <div className="grid gap-1.5">
              <h3 className="font-bold line-clamp-2 text-[#f1592a]">KỆ V LỖ ĐA NĂNG</h3>
            </div>
          </div>
        </a>
      </Link>

    </div>
    <div className="border w-full max-w-sm rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-transform translate-y-0.5 cursor-pointer">
      <Link href="/phu-kien-sieu-thi">
        <a className="flex flex-col items-stretch" href="/phu-kien-sieu-thi">
          <div className="aspect-16/9">
            <Image
              alt="phụ kiện siêu thị"
              className="object-cover w-full aspect-[1.5] dark:filter dark:grayscale dark:contrast-150 transition-transform
              hover:scale-105 ease duration-300"
              src={TBTS}
            />
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between items-center">
            <div className="grid gap-1.5">
              <h3 className="font-bold line-clamp-2 text-[#f1592a]">PHỤ KIỆN SIÊU THỊ</h3>
            </div>
          </div>
        </a>
      </Link>

    </div>
    </section>
    )
}

export default Category