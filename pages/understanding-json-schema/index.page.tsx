import React from 'react';
import { getLayout } from '~/components/Sidebar';
import fs from 'fs';
import matter from 'gray-matter';
import StyledMarkdown from '~/components/StyledMarkdown';
import { DocsHelp } from '~/components/DocsHelp';
import { SectionContext } from '~/context';

export async function getStaticProps() {
  const block1 = fs.readFileSync(
    'pages/understanding-json-schema/_index.md',
    'utf-8',
  );
  const { content: block1Content } = matter(block1);
  return {
    props: {
      blocks: [block1Content],
    },
  };
}

export default function ContentExample({ blocks }: { blocks: any[] }) {
  const markdownFile = '_indexmd';

  return (
    <SectionContext.Provider value='docs'>
      <StyledMarkdown markdown={blocks[0]} />
      <DocsHelp fileRenderType={markdownFile} />
    </SectionContext.Provider>
  );
}
ContentExample.getLayout = getLayout;
