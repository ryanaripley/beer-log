import React from 'react';

function BeerLogLogo(props) {
	const letterFill = props.letterFill || "#000";
	const beerFill = props.beerFill || "#cdaa37";
	const headFill = props.headFill || "#f0e4cc";
	const iconHeight = props.height || "19";
	const iconWidth = props.width || "120";

	return (
		<svg className="beer-log-logo" xmlns="http://www.w3.org/2000/svg" height={iconHeight} width={iconWidth} viewBox="0 0 735.41357 117.49121">
			<path d="M54.127 1.8q12.841 0 22.27 3.576 9.59 3.413 14.791 9.915 5.202 6.502 5.202 15.28 0 8.94-5.365 15.603-5.2 6.665-14.304 9.103 10.891 2.113 17.067 9.915 6.34 7.802 6.34 18.855 0 9.59-5.364 16.905-5.364 7.152-15.28 11.053-9.914 3.739-23.243 3.739H0V1.804h54.127zm-1.625 45.35q6.176 0 9.752-2.926 3.576-3.088 3.576-8.452 0-5.202-3.576-7.965-3.576-2.925-9.752-2.763H29.746V47.15h22.756zm0 45.513q7.802 0 12.353-3.251 4.551-3.25 4.551-9.102 0-5.365-4.551-8.453-4.551-3.25-12.353-3.088H29.746v23.894h22.756zM104.991 1.8h89.887v23.731h-60.142v21.293h54.29v23.569l-54.29.16V92.01h61.767v23.732H104.99V1.802zM202.641 1.8h89.887v23.731h-60.142v21.293h54.29v23.569l-54.29.16V92.01h61.767v23.732H202.64V1.802zM368.731 115.8l-16.58-31.534h-22.106V115.8H300.3V1.86c19.79.184 39.597-.393 59.373.34 14.05 1.16 29.025 7.778 35.35 21.104 5.918 12.744 5.114 28.26-1.188 40.696-3.47 6.222-8.842 11.352-15.188 14.58l23.732 37.224H368.73zm-38.686-55.265c9.542-.302 19.201.715 28.66-.762 7.104-1.749 12.198-8.667 12.03-15.942.702-7.883-4.495-16.28-12.664-17.493-7.756-1.471-15.697-.455-23.542-.75-1.446.457-4.925-1.12-4.484 1.225v33.723zM438.011 1.8h29.746v88.587h48.276v25.357h-78.02V1.804zM709.321 57.4h24.832v43.848q-8.801 6.444-21.688 10.53-12.73 3.929-24.203 3.929-16.659 0-30.175-7.387-13.359-7.543-21.06-20.588-7.7-13.044-7.7-29.232 0-16.03 7.857-28.918 8.016-13.044 21.845-20.43 13.987-7.387 31.118-7.387 12.26 0 24.517 4.557 12.26 4.401 20.745 11.944l-16.345 20.117q-5.972-5.657-13.83-8.958-7.7-3.3-15.245-3.3-8.8 0-15.873 4.243-7.072 4.244-11.158 11.63-4.086 7.387-4.086 16.502 0 9.273 4.086 16.816 4.087 7.387 11.316 11.63 7.23 4.244 16.03 4.244 8.33 0 19.017-5.344V57.4z" fill={letterFill} />
			<g>
				<path d="M548.481 25.1c-7.586-.01-16.619 2.645-23.487 5.168l4.094 9.743c-.732 1.465-1.318 2.638-1.904 4.102l-17.433 7.325v14.65l17.433 7.325c.586 1.465 1.172 2.637 1.904 4.102l-7.325 17.433 10.548 10.548 17.433-7.325c1.319.586 2.637 1.318 4.102 1.904l7.325 17.434h14.65l7.325-17.434c1.318-.586 2.784-1.172 4.102-1.904l17.433 7.325 10.548-10.548-7.325-17.433c.586-1.319 1.32-2.784 1.905-4.102l17.433-7.325v-14.65l-17.433-7.325c-.44-1.318-1.172-2.783-1.905-4.102l4.604-10.957c-7.74 2.13-15.77 3.82-23.836 3.726-20.82-.242-22.514-5.81-37.038-7.505a27.567 27.567 0 0 0-3.152-.175zm20.015 11.542c12.16 0 21.975 9.815 21.975 21.975 0 12.159-9.815 21.974-21.975 21.974-12.159 0-21.975-9.815-21.975-21.974 0-12.16 9.816-21.975 21.975-21.975z" fill={beerFill} />
				<path d="M561.171 0l-7.325 17.433c-1.465.44-2.783 1.172-4.102 1.904l-17.433-7.325-10.548 10.548 3.231 7.69c7.849-2.883 18.526-5.939 26.64-4.992 14.524 1.694 16.22 7.262 37.037 7.504 8.067.094 16.096-1.595 23.836-3.725l2.721-6.476-10.548-10.549-17.433 7.325c-1.318-.586-2.783-1.318-4.102-1.904L575.82 0h-14.65z" fill={headFill} />
			</g>
		</svg>
	);
}

export default BeerLogLogo;