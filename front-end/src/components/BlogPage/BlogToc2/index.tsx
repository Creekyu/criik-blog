import React, { useEffect, useState } from 'react';

// css
import style from './index.module.scss';

// antd
import { Anchor } from 'antd';

interface BlogTocProps {
  text: string;
}

const getTitleList = (text: string) => {
  // Delete code blocks
  const codeBlocksRemoved = text.replace(/```[^`]*```|~~~[^~]*~~~/gs, '');

  // Find titles
  const titles = codeBlocksRemoved.match(/^(#{1,})(?:\s+)(.*)$/gm);

  const filterList = titles
    ? titles.map(title => {
        return title.replace(/^[#]+/g, '').trim();
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