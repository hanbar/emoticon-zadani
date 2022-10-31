import React from 'react';

import {eyesData} from '../../data';
import { useSettings } from "../../setting-context";

const EyesSelector = () => {
	const { settings, changeSettings } = useSettings();

	const handleClick = (item) => {
		changeSettings({ eyes: item.id })
	}

	return (
		<div className="items">
			{eyesData.map(eyes =>
				<img
					className={`item ${settings.eyes === eyes.id && 'active'}`}
					key={eyes.id}
					src={eyes.image}
					onClick={() => { handleClick(eyes) }}
					/>
			)}
		</div>
	);
}

export default EyesSelector;