import React, {useRef, useState} from 'react';
import CanvasDraw from "react-canvas-draw";
import {ClayCheckbox} from '@clayui/form';
import ClayColorPicker from '@clayui/color-picker';
import ClayButton from "@clayui/button";
import ClayIcon from '@clayui/icon';
import ClayLayout from "@clayui/layout";
import ClayList from '@clayui/list';

// Imports the @clayui/css package CSS
import "@clayui/css/lib/css/atlas.css";
import spritemap from "@clayui/css/lib/images/icons/icons.svg";

function App() {
	const canvasDrawRef = useRef();

	const [bgColor, setBgColor] = useState('#FFFFFF');
	const [bgTransparent, setBgTransparent] = useState(false);
	const [brushColor, setBrushColor] = useState('#000000');

	return (
		<ClayLayout.ContainerFluid view>
			<ClayLayout.Row className="text-center">
				<ClayLayout.Col size={2} >
					<h2>Tools</h2>

					<ClayList>
						<ClayList.Item flex>
							<ClayList.ItemField	className="ml-1">
								<ClayColorPicker
									onValueChange={(value) => {
										setBrushColor(`#${value}`);
									}}
									showHex={false}
									title="Brush Color"
									value={brushColor}
								/>
							</ClayList.ItemField>
						</ClayList.Item>

						<ClayList.Item flex>
							<ClayList.ItemField	className="ml-1">
								<ClayColorPicker
									onValueChange={(value) => {
										setBgColor(`#${value}`);
									}}
									showHex={false}
									title="Background Color"
									value={bgColor}
								/>

								<br/>

								<ClayCheckbox
									checked={bgTransparent}
									label="Transparent"
									onChange={() => setBgTransparent(bgTransparent => !bgTransparent)}
								/>
							</ClayList.ItemField>
						</ClayList.Item>

						<ClayList.Item flex>
							<ClayList.ItemField>
								<ClayButton
									displayType="secondary"
									onClick={() => {
										canvasDrawRef.current.undo();
									}}
								>
									<span className="inline-item inline-item-before">
										<ClayIcon
											spritemap={spritemap}
											symbol="undo"
										/>
									</span>

									Undo
								</ClayButton>
							</ClayList.ItemField>
						</ClayList.Item>
					</ClayList>

					<ClayButton
						className="mr-2"
						displayType="primary"
						onClick={() => canvasDrawRef.current.clear()}
					>
						Clear
					</ClayButton>

					<ClayButton
						className="ml-2"
						displayType="primary"
					>
						Save
					</ClayButton>
				</ClayLayout.Col>

				<ClayLayout.Col size={10}>
					<CanvasDraw
						ref={canvasDrawRef}
						style={{
							backgroundColor: bgTransparent ? 'transparent' : bgColor
						}}
						//loadTimeOffset: 5,
						lazyRadius={0}
						brushRadius={2}
						brushColor={brushColor}
						//catenaryColor: "#0a0302",
						//gridColor: "rgba(150,150,150,0.17)",
						//hideGrid={true}
						canvasWidth="100%"
						//canvasHeight="100%"
						//disabled: false,
						//imgSrc: "",
						//saveData={drawData}
						//immediateLoading: false,
						//hideInterface={true}
					/>
				</ClayLayout.Col>
			</ClayLayout.Row>
		</ClayLayout.ContainerFluid>
	);
}

export default App;
