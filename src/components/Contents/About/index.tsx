import "./index.css";
import { Icon } from "@iconify/react";
import { SKILL_LIST } from "../../../constants/skillList";
import { EDUCATION_TIME_LINE } from "../../../constants/educationTimeLine";

const AboutComponent = () => {
  return (
    <article className="about">
      <section className="introduction">
        <p>
          프로그램의 시각적 표현에 개입하여 즉시 처리하는 점이 저의 적극적인
          성향과 잘 어우러집니다.
        </p>
        <p>
          관련 영상과 서적, 컨퍼런스 참여를 좋아하고 즐기며, 다양한 기술들을
          활용해 보고 적용하여 각 상황마다 알맞게 활용하여 편안한 UX 환경을
          제공하는 개발자가 되고 싶습니다.
        </p>
        <p>풍부한 경험과 미래에 대한 열정을 갖춘 웹 개발자 윤예빈입니다.</p>
      </section>

      <section className="techStack">
        <h3 className="techStackTitle">Skillset</h3>
        <div className="techStackGrid">
          {SKILL_LIST.map((item) => (
            <div key={item.name} className="techStackItem">
              <Icon className="icon" icon={item.icon} />
              <div className="overlay">{item.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="education">
        <h3 className="educationTitle">Education</h3>
        <ol className="educationList">
          {EDUCATION_TIME_LINE.map((item) => (
            <li key={item.title} className="educationItem">
              <h4>{item.title}</h4>
              <span>{item.year}</span>
              <p>{item.context}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
};

export default AboutComponent;
