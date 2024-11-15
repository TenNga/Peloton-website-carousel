import { cardType } from "../types/globle";
import {ReactComponent as StrengthIcon} from '../assets/icons/strengthIcon.svg';
import {ReactComponent as CyclingIcon} from '../assets/icons/cyclingIcon.svg';
import {ReactComponent as YogaIcon} from '../assets/icons/yogaIcon.svg';
import {ReactComponent as RunningIcon} from '../assets/icons/runningIcon.svg';
import {ReactComponent as BoxingIcon} from '../assets/icons/boxingIcon.svg';
import {ReactComponent as RowingIcon} from '../assets/icons/rowingIcon.svg';
import {ReactComponent as MeditationIcon} from '../assets/icons/meditationIcon.svg';
import {ReactComponent as BarreIcon} from '../assets/icons/barreIcon.svg';
import {ReactComponent as StretchingIcon} from '../assets/icons/stretchingIcon.svg';
import {ReactComponent as WalkingIcon} from '../assets/icons/walkingIcon.svg';
import {ReactComponent as PilatesIcon} from '../assets/icons/pilatesIcon.svg';

export const cards: cardType[] = [
  {
    imageURL:
      "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/3Tygq87mpjCysd6dRomamP/d8a7b4f46a0c45eb3ff95a1a2e186d84/strength.png",
    heading: "strength",
    linkText: "preview strength classes",
    link: "https://www.onepeloton.com/classes/strength",
    workoutIcon: StrengthIcon
  },
  {
    imageURL:
      "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/6SpPJjMEkwBvt4dcuROUhM/0969da2fdbd85583e417f59e5fec0371/cycling.png",
    heading: "cycling",
    linkText: "preview cycling classes",
    link: "https://www.onepeloton.com/classes/cycling",
    workoutIcon: CyclingIcon
  },
  {
    imageURL:
      "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/39RfW5BtElEcHNCRlSo6Df/c864ce9b567e24c3842f4ec0c907295d/yoga.png",
    heading: "yoga",
    linkText: "preview yoga classes",
    link: "https://www.onepeloton.com/classes/yoga",
    workoutIcon: YogaIcon
  },
  {
    imageURL:
      "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/4Jc8Hc0m70MpNiVmo6qJTx/e4d5cda8bd22e8861fc6e846d01f2e63/running.png",
    heading: "running",
    linkText: "preview running classes",
    link: "https://www.onepeloton.com/classes/running",
    workoutIcon: RunningIcon
  },
  {
    imageURL:
      "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/1xxaCMlxguek1IOGongpIE/4aae8d7a1cc246cdf479174d47c00dbd/boxing.png",
    heading: "boxing",
    linkText: "preview boxing classes",
    link: "https://www.onepeloton.com/classes/boxing",
    workoutIcon: BoxingIcon
  },
  {
    imageURL:
      "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/4iDBWDsC4KYkpeMR6fVZYK/caa2b9fc508bb01ff6e8f27df0872541/rowing.png",
    heading: "rowing",
    linkText: "preview rowing classes",
    link: "https://www.onepeloton.com/classes/rowing",
    workoutIcon: RowingIcon
  },
  {
    imageURL:
      "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/5MZALvSO3XxB4Cr6ac8FXP/728e707b749abd719d30614d1cb30ebe/meditation.png",
    heading: "meditation",
    linkText: "preview meditation classes",
    link: "https://www.onepeloton.com/classes/meditation",
    workoutIcon: MeditationIcon
  },
  {
    imageURL:
      "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/4ZnglqAN0rv0PTiXqPIMcS/afbeca60f9edd33d566d0a33fcd529a1/barre.png",
    heading: "barre",
    linkText: "preview barre classes",
    link: "https://www.onepeloton.com/classes/barre",
    workoutIcon: BarreIcon
  },
  {
    imageURL:
      "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/GWFCVD0x5miCw8s6hPlC2/6d276c1c1b2d21c6988643e5104d7f1d/stretching.png",
    heading: "stretching",
    linkText: "preview stretching classes",
    link: "https://www.onepeloton.com/classes/stretching",
    workoutIcon: StretchingIcon
  },
  {
    imageURL:
      "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/4U2KaAhIDv0sXJAE6zzoPE/9d00b065573fc4a083b5718d9be727c1/walking.png",
    heading: "walking",
    linkText: "preview walking classes",
    link: "https://www.onepeloton.com/classes/walking",
    workoutIcon: WalkingIcon
  },
  {
    imageURL:
      "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/1w5iVdAQ9lHnn63MbJkrwc/a76bf3c3ca0561cac94fde2a78b9ca0e/pilates.png",
    heading: "pilates",
    linkText: "preview pilates classes",
    link: "https://www.onepeloton.com/classes/pilates",
    workoutIcon: PilatesIcon
  },
];
