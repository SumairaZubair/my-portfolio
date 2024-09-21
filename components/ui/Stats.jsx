"use client";
import { Item } from '@radix-ui/react-select';
import CountUp from 'react-countup';
const stats = [
  {
    num: 1,
    text: "Years of Experience",
  },
  {
    num: 6,
    text: "Tecnologies mastered",
  },
  {
    num: 6,
    text: "Projects complete",
  },
];
const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none"></div>
        {stats.map((item, index) => {
          return (
            <div
              key={index}
              className="flex-1 flex pb-8 gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p 
              // className={`${item.text.length < 10 ? "max-w-[60px]" : "max-w-[100px]"}`}
              >
                {item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
