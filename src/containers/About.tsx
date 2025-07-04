'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list, paragraphs } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center justify-between gap-10 md:gap-16 lg:items-start lg:flex-row-reverse">
        <AuthorImage src={img} alt={author.name} />
        <div className="space-y-4 lg:w-3/5">
          {paragraphs.map((paragraph) => (
            <p key={getId()} className="text-justify">{paragraph}</p>
          ))}

          {/* {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-full sm:w-2/3 grid-cols-2 gap-2 text-base">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )} */}
        </div>
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
