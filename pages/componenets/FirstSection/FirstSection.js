import React, { useEffect } from "react";
import styles from "./FirstSection.module.css";
import Image from "next/image";
import zero from "../../../public/images/0.png";
import one from "../../../public/images/1.png";
import two from "../../../public/images/2.png";
import three from "../../../public/images/3.png";
import four from "../../../public/images/4.png";
import five from "../../../public/images/5.png";
import Group from "../../../public/images/Group.png";
import Girl from "../../../public/images/girl.png";

const FirstSection = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1>One Programming Language</h1>
        <h4>
          One (onelang) is an open-source system programming language that makes
          it easy to build reliable, efficient and performant software.
        </h4>
      </header>
      <div className={styles.box}>
        <input type="text" />
        <input type="submit" value="Try it now" />
      </div>
      <small className={styles.small}>
        Free 30-days trial, no credit card required
      </small>
      <div className={styles.images}>
        <ul>
          <li>
            <Image src={zero} />
          </li>
          <li>
            <Image src={one} />
          </li>
          <li>
            <Image src={two} />
          </li>
          <li>
            <Image src={three} />
          </li>
          <li>
            <Image src={four} />
          </li>
          <li>
          <Image src={five} />
          </li>
        </ul>
      </div>
      <p className={styles.text2}>
      Their teams and hundreds more are using Popwork - in person or remote.
      </p>
        <div className={styles.vector}>
      <Image  src={Group}/>

        </div>
        <div className={styles.box2}>
            <p>Every week, Popwork asks a few simple questions to your team about what matters. It’s what we call a check-in. ✌️ </p>
            <p>Popwork is also an intuitive workspace to prepare 1-to-1 meetings, share feedback and follow up on topics week after week.</p>
        </div>
        <div className={styles.girl}>

        <Image src={Girl} />
        </div>

    </div>
  );
};

export default FirstSection;
