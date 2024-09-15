import Image from "next/image"
import Link from "next/link"
import logoImg from "../../public/logo.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-start text-dark">
        <div 
        className="logo rounded-full overflow-hiden" 
        >
            <Image src={logoImg}  alt="Logo giá kệ siêu thị Tân Phát" className="rounded-full "/>
        </div>
    </Link>
  )
}

export default Logo