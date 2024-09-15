
export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (posts) => {
  return posts
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};