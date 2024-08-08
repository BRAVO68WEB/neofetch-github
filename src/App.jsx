import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.article`
	background: #b158ec;
	background: linear-gradient(
		135deg,
		#b158ec 35%,
		#f94c4c 100%
	);
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
`;

const TerminalFigure = styled.figure`
	background: #020202;
	border-top: 20px solid #c4c4c4;
	border-radius: 0.25rem;
	box-shadow: 1px 1px 11px rgba(0, 0, 0, 0.22);
	min-height: 425px;
	max-width: 600px;
	min-width: 350px;
	padding: 0.5rem;
	position: relative;
	width: 100%;

	&::before {
		background: #747474;
		border-radius: 50%;
		content: "";
		display: block;
		height: 10px;
		position: absolute;
		top: -15px;
		left: 5px;
		width: 10px;
	}
`;

const Lines = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

const LineContainer = styled.li`
	color: white;
	margin-top: 0.15rem;
	position: relative;
`;

const Blinker = styled.div`
	animation: 0.8s blink infinite;
	background: white;
	display: inline-block;
	height: calc(12px + 0.25vw);
	margin-bottom: -1px;
	padding-bottom: 3px;
	width: 8px;

	@keyframes blink {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
`;

const HiddenForm = styled.form`
	position: absolute;
	bottom: -1;
	left: 10px;
	z-index: -10;

	& > input {
		font-size: 16px;
	}
`;

const NeofetchOutputContainer = styled.div`
	color: white;
	display: flex;
	font-size: calc(9px + 0.25vw);
	padding: 0.5rem;
	position: relative;

	svg {
		max-width: 100%;
		padding: 0.5rem;
		width: 100%;
	}
`;

const NeofetchList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0 0 0 0.5rem;
`;

const Red = styled.span`
	color: red;
`;

const Cyan = styled.span`
	color: cyan;
`;

const Block = styled.div`
	background: ${(props) => props.color};
	display: inline-block;
	height: calc(9px + 0.25vw);
	margin-top: 0.5rem;
	width: 10px;

	&:first-of-type {
		margin-left: 1rem;
	}
`;

const Line = ({ children }) => <LineContainer>{children}</LineContainer>;

const ActiveLine = ({ children }) => (
	<LineContainer>
		$ {children}
		<Blinker />
	</LineContainer>
);

const ColorBlock = (props) => <Block color={props.color} />;

const NeofetchOutput = () => {
	const colors = [
		"red",
		"green",
		"yellow",
		"blue",
		"rebeccapurple",
		"cyan",
		"grey"
	];

	const startTime = new Date("2024-08-08");
	const currentTime = new Date();

	const daysLeft = Math.floor((currentTime - startTime) / 1000 / 60 / 60 / 24);
	const hoursLeft = Math.floor((currentTime - startTime) / 1000 / 60 / 60) % 24;
	const minutesLeft = Math.floor((currentTime - startTime) / 1000 / 60) % 60;

	return (
		<NeofetchOutputContainer>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="-10 0 120 100"
				fill="none"
				stroke="#fff"
				strokeWidth="2.3"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/>
			</svg>
			<NeofetchList>
				<li>
					<Cyan>bravo68web</Cyan>@<Cyan>github</Cyan>
				</li>
				<li>-----------------</li>
				<li>
					<Red>OS</Red>: GitHub Pages
				</li>
				<li>
					<Red>Host</Red>: github
				</li>
				<li>
					<Red>Kernel</Red>: 4.20.69-nice
				</li>
				{/* <li>
					<Red>Uptime</Red>: 7 days, 10 hours, 15 mins
				</li> */}
				<li>
					<Red>Uptime</Red>: {daysLeft} days, {hoursLeft} hours, {minutesLeft} mins
				</li>
				<li>
					<Red>Packages</Red>: 666 (enough to be dangerous)
				</li>
				<li>
					<Red>Shell</Red>: bash x.x.x
				</li>
				<li>
					<Red>Resolution</Red>: SMALLxSMALL
				</li>
				<li>
					<Red>Terminal</Red>: git-bash
				</li>
				<li>
					<Red>CPU</Red>: AMD Ryzen Threadripper 3990X
				</li>
				<li>
					<Red>GPU</Red>: NVIDIA GeForce RTX 4090
				</li>
				<li>
					<Red>Memory</Red>: 15513MiB / 128789MiB
				</li>
				<li>
					{colors.map((color) => (
						<Block color={color} />
					))}
				</li>
			</NeofetchList>
		</NeofetchOutputContainer>
	);
};

const Terminal = () => {
	const [lines, setLines] = React.useState(['Try typing "neofetch"!']);
	const [input, setInput] = React.useState("");
	const [displayNeofetch, setDisplayNeofetch] = React.useState(false);
	const focusInput = (e) => document.querySelector('input[type="text"]').focus();
	const clearTerminal = () => setLines([]);
	const clearInput = () => setInput("");

	function handleSubmit(e) {
		e.preventDefault();

		if (input === "clear") {
			clearTerminal();
			setDisplayNeofetch(false);
		} else if (input === "help") {
			setLines([...lines, "$ " + input, "Available Commands: clear, help, neofetch"]);
		} else if (input === " " || input.replace(/\s/g, "") === "") {
			setLines([...lines, "$ " + input]);
		} else if (input === "neofetch") {
			setLines([...lines, "$ " + input]);
			setDisplayNeofetch(true);
		} else {
			setLines([...lines, "$ " + input, `${input}: command not found`]);
		}

		clearInput();
	}

	React.useEffect(() => {
		focusInput();
	});

	return (
		<TerminalFigure onClick={focusInput}>
			<Lines>
				{lines.map((line, index) => (
					<Line key={index}>{line}</Line>
				))}
				{displayNeofetch && (
					<Line>
						<NeofetchOutput />
					</Line>
				)}
				<Line>
					<HiddenForm method="post" onSubmit={handleSubmit}>
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value.toLowerCase())}
						></input>
						<input type="submit" />
					</HiddenForm>
				</Line>
				<ActiveLine>{input}</ActiveLine>
			</Lines>
		</TerminalFigure>
	);
};

function App() {
  return (
    <AppContainer>
        <Terminal />
    </AppContainer>
  )
}

export default App
