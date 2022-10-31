import React from 'react';

import {mouthData} from '../../data';
import { useSettings } from "../../setting-context";

const MouthSelector = () => {
	const { settings, changeSettings } = useSettings();

	const handleClick = (item) => {
		changeSettings({ mouth: item.id })
	}

	return (
		<div className="items">
			{mouthData.map(mouth =>
				<img
					className={`item ${settings.mouth === mouth.id && 'active'}`}
					key={mouth.id}
					src={mouth.image}
					onClick={() => { handleClick(mouth) }}
					/>
			)}
		</div>
	);
}

export default MouthSelector;