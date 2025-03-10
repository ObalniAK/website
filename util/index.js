import { formatDistanceToNow } from 'date-fns';
import { sl } from 'date-fns/locale';

export const experienceLevel = {
  TECAJNIK: {
    value: "TECAJNIK",
    name: "Tečajnik",
    colorText: "#2D6A4F",
    colorBg: "#A8D5BA",
  },
  MLAJSI_PRIPRAVNIK: {
    value: "MLAJSI_PRIPRAVNIK",
    name: "Mlajši pripravnik",
    colorText: "#1B4965",
    colorBg: "#7FB3D5",
  },
  STAREJSI_PRIPRAVNIK: {
    value: "STAREJSI_PRIPRAVNIK",
    name: "Starejši pripravnik",
    colorText: "#7D6608",
    colorBg: "#F4D03F",
  },
  ALPINIST: {
    value: "ALPINIST",
    name: "Alpinist",
    colorText: "#784212",
    colorBg: "#F39C12",
  },
  ALPINISTICNI_INSTRUKTOR: {
    value: "ALPINISTICNI_INSTRUKTOR",
    name: "Alpinistični inštruktor",
    colorText: "#641E16",
    colorBg: "#E57373",
  },
};

export const formatDate = (dateString) => {
  const parts = dateString.split("-");
  const [year, month, day] = parts;
  return `${day}. ${month}. ${year}`;
}

export const relativeTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return formatDistanceToNow(date, { addSuffix: false, locale: sl })
}