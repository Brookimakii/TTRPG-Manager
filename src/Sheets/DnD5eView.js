import React from "react";
import '../style/dnd5e.css';

export default function DnD5eView(props) {

	let characterData = props.characterData
	return (
		<div className="charsheet">
			<section className='header'>
				<section className='charname'>
					<label htmlFor='charname'>Character Name</label>
					<input
						name='charname'
						type='text'
						value={characterData.name ? characterData.name : ''}
						onBlur={() => props.handleDataUpdate()}
						onChange={(e) => props.handleDataChange('name', e.target.value)}
					/>
				</section>
				<section className='misc'>
					<ul>
						<li>
							<label htmlFor='classlevel'>Classes & Level</label>
							<input
								type='text'
								name='classlevel'
								value={characterData ? characterData : ''}
								onBlur={() => props.handleDataUpdate()}
								onChange={(e) => props.handleDataChange('name', e.target.value)}
							/>
						</li>
						<li>
							<label htmlFor='background'>Background</label>
							<input
								type='text'
								name='background'
								value={characterData ? characterData : ''}
								onBlur={() => props.handleDataUpdate()}
								onChange={(e) => props.handleDataChange('name', e.target.value)}
							/>
						</li>
						<li>
							<label htmlFor='playername'>Player Name</label>
							<input
								type='text'
								name='playername'
								value={characterData ? characterData : ''}
								onBlur={() => props.handleDataUpdate()}
								onChange={(e) => props.handleDataChange('name', e.target.value)}
							/>
						</li>
						<li>
							<label htmlFor='race'>Race</label>
							<input
								type='text'
								name='race'
								value={characterData ? characterData : ''}
								onBlur={() => props.handleDataUpdate()}
								onChange={(e) => props.handleDataChange('name', e.target.value)}
							/>
						</li>
						<li>
							<label htmlFor='alignment'>Alignment</label>
							<input
								type='text'
								name='alignment'
								value={characterData ? characterData : ''}
								onBlur={() => props.handleDataUpdate()}
								onChange={(e) => props.handleDataChange('name', e.target.value)}
							/>
						</li>
						<li>
							<label htmlFor='exp'>Experience Points</label>
							<input
								type='text'
								name='exp'
								value={characterData ? characterData : ''}
								onBlur={() => props.handleDataUpdate()}
								onChange={(e) => props.handleDataChange('name', e.target.value)}
							/>
						</li>
					</ul>





				</section>
			</section>


		</div>
	)

}