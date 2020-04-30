// TODO JASON: Finish updating this file to export all the SVG files

// TODO JASON: Figure out how to allow consumers of this library to load via ESM (instead of umd/common). Perhaps directly load this file?

// TODO JASON: Update the `module` and `main` entries inside of package.json once ready

// TODO JASON: Remove the `dist-old` dir

import WaterIcon from './icons/water.svg';
import WarningLineIcon from './icons/warningLine.svg';
import './styles/styles.scss';

const libraryIcons = {
  WarningLineIcon,
  WaterIcon,
};

export default libraryIcons;
