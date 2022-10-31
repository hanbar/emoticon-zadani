import React from 'react';
import './style.css';

import eyes1 from '../../img/eyes1.svg';
import eyes2 from '../../img/eyes2.svg';
import eyes3 from '../../img/eyes3.svg';
import eyes4 from '../../img/eyes4.svg';
import eyes5 from '../../img/eyes5.svg';
import eyes6 from '../../img/eyes6.svg';
import eyes7 from '../../img/eyes7.svg';
import eyes8 from '../../img/eyes8.svg';

import mouth1 from '../../img/mouth1.svg';
import mouth2 from '../../img/mouth2.svg';
import mouth3 from '../../img/mouth3.svg';
import mouth4 from '../../img/mouth4.svg';
import mouth5 from '../../img/mouth5.svg';
import mouth6 from '../../img/mouth6.svg';
import mouth7 from '../../img/mouth7.svg';
import mouth8 from '../../img/mouth8.svg';

import { useSettings } from "../../setting-context";
import { colorsData, eyesData, mouthData } from '../../data';

const Emoticon = () => {
	const { settings, setSettings } = useSettings();
	console.log(settings)

	return (
		<div className='emoticon' style={{ backgroundColor: colorsData.find(color => color.id === settings.color).value }}>
			<img className="emoticon__eyes" src={eyesData.find(eye => eye.id === settings.eyes).image} />
			<img className="emoticon__mouth" src={mouthData.find(mouth => mouth.id === settings.mouth).image} />
		</div>
	);
}

export default Emoticon;