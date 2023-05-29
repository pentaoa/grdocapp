export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl">关于</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        关于此网站，以及其更新。
      </p>
      
      <article className="group">
      <a href="https://www.grada.site/blog/establish"> 
        <img
        alt="Reading"
        src="https://ihs-1317591693.cos.ap-guangzhou.myqcloud.com/public/small10.jpg"
        className="cursor-none h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:drop-shadow-2xl"
        />

      <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">
            建站小记
          </h3>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
        在写这个网站的前一个网站的时候写的文章。时间大概在四月左右，我开始了建站的日程。
        </p>
      </div>
      </a>
      </article>
    </section>
  );
}
