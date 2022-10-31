import React from 'react';

import {colorsData} from '../../data';
import { useSettings } from "../../setting-context";

const ColorSelector = () => {
	const { settings, changeSettings } = useSettings();

	const handleClick = (item) => {
		changeSettings({ color: item.id })
	}

	return (
		<div className="items">
			{colorsData.map(color =>
				<div
					className={`item ${settings.color === color.id && 'active'}`}
					key={color.id}
					style={{ backgroundColor: color.value}}
					onClick={() => { handleClick(color) }}
					/>
			)}
		</div>
	);
}

export default ColorSelector;