import { Button, Typography } from '@/components';
import img from '@/assets/images/about.webp';

import styles from './AboutCompany.module.scss';

const AboutCompany = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.coontainerImg}>
        <img src={img} />
      </div>

      <div className={styles.aboutInfo}>
        <Typography className={styles.aboutInfoHead} variant="h1" tag="h2">
          Тату магазин Mr. Driskell
        </Typography>
        <Typography className={styles.aboutInfoDesc}>
          Приветствуем вас в Tattoo Mall — в нашем тату магазине собираются энтузиасты индустрии,
          профессиональные мастера и новички, которые только делают первые шаги в тату искусстве.
          Мы знаем, насколько важно грамотно и точно подобрать инструменты для продуктивных тату
          сеансов, и помогаем быстро найти то, что поможет их сделать именно такими.
          <br />
          <br />
          В нашем ассортименте не просто тату оборудование, это буквально целая команда из грамотных
          и действительно эффективных помощников на вашем рабочем столе. Пройдя этап долгих
          разработок и бесчисленных тестов под пристальным взглядом отечественных машиностроителей,
          космецевтов и брендов с мировым именем, эти товары нарабатывали опыт и каждый день
          становились лучше, чтобы показать, на что они способны, и помочь раскрыть ваш потенциал.
        </Typography>
        <Button className={styles.btn} borderStyle="clip">
          О компании
        </Button>
      </div>
    </div>
  );
};

export { AboutCompany };
