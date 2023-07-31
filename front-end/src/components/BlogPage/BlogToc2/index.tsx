import React, { useEffect, useState } from 'react';

// antd
import { Anchor } from 'antd';

// css
import style from './index.module.scss';

interface BlogTocProps {
  text: string;
}

const getTitleList = (text: string) => {
  // 移除被```或者~~~包围的代码块内容
  const removedCodeblocks = text.replace(/(```|~~~)[\s\S]*?\1/g, '');

  // 提取包含1~n个#号的标题内容
  const headings = removedCodeblocks.match(/(^|\n)(#{1,}[^#\n].*)/g);
  // 移除标题前的换行符
  const titles = headings ? headings.map(line => line.trim()) : [];

  const filterList = titles
    ? titles.map(title => {
        return title.replace(/^#+/g, '').trim();
      })
    : [];
  return filterList.map(title => {
    return title.split('<')[0].trim();
  });
};

const generateAnchorItems = (textList: string[]) => {
  return textList.map((text, index) => {
    return { key: index, href: '#' + text, title: text };
  });
};
const BlogToc: React.FC<BlogTocProps> = ({ text }) => {
  const [tocList, setTocList] = useState<any>();
  const [scrollWrapper, setScrollWrapper] = useState<HTMLDivElement>();
  useEffect(() => {
    const tocs = generateAnchorItems(getTitleList(text));
    const scrollDiv = document.getElementById('blog-page-content-wrapper') as HTMLDivElement;
    setScrollWrapper(scrollDiv);
    setTocList(tocs);
  }, [text]);

  return (
    <div className={`${style.wrapper} clearfix`}>
      <div className={style.tocHeader}>
        <span>此页内容 </span>
        <span className="iconfont">&#xe640;</span>
      </div>
      <>
        <Anchor
          offsetTop={60}
          affix={true}
          items={tocList}
          onClick={(e, link) => {
            e.preventDefault();
            const span = document.getElementById(String(link.title)) as HTMLSpanElement;
            scrollWrapper!.scrollTo({
              top: span.offsetTop,
              behavior: 'smooth',
            });
          }}
          getContainer={() => {
            return document.getElementById('blog-page-content-wrapper') as HTMLDivElement;
          }}
        ></Anchor>
      </>
    </div>
  );
};

export default BlogToc;
