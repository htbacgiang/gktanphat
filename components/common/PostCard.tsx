import Image from "next/image";
import { FC } from "react";
import dateformat from "dateformat";
import { PostDetail } from "../../utils/types";
import Link from "next/link";
import { trimText } from "../../utils/helper";

interface Props {
  post: PostDetail;
  busy?: boolean;
  controls?: boolean;
  onDeleteClick?(): void;
}

const PostCard: FC<Props> = ({
  controls = false,
  post,
  busy,
  onDeleteClick,
}): JSX.Element => {
  const { title, slug, meta, createdAt, tags, thumbnail } = post;
  return (
    <div className="rounded shadow-sm shadow-secondary-dark overflow-hidden bg-primary dark:bg-primary-dark transition flex flex-col h-full">
      {/* thumbnail */}
      <div className="aspect-video relative cursor-pointer">
        {!thumbnail ? (
          <div className="w-full h-full flex items-center justify-center text-secondary-dark opacity-50 font-semibold">
            No image
          </div>
        ) : (
          <Image src={thumbnail} layout="fill" alt="Thumbnail" 
          className="hover:scale-105 transition-all ease duration-300 "
          />
        )}
      </div>

      {/* Post Info */}
      <div className="p-2 flex-1 flex flex-col">
        <Link href={"/bai-viet/" + slug}>
          <a>
            <h1 className="font-semibold text-primary-dark dark:text-primary">
              {trimText(title, 50)}
            </h1>
            <p className="text-secondary-dark">{trimText(meta, 70)}</p>
          </a>
        </Link>
        <Link
          href={"/bai-viet/" + slug}
        >
          <a className="text-[12px] tracking-[2px] uppercase text-[red]">
          Đọc thêm
          </a>
        </Link>
        {controls && (
          <div className="flex justify-end items-center h-8 mt-auto space-x-4 text-primary-dark dark:text-primary">
            {busy ? (
              <span className="animate-pulse">Removing</span>
            ) : (
              <>
                <Link href={"/admin/posts/update/" + slug}>
                  <a className="hover:underline">Edit</a>
                </Link>
                <button onClick={onDeleteClick} className="hover:underline">
                  Delete
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
