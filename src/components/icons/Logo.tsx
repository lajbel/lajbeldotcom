import type { FunctionComponent as FC } from "preact";

interface Props {
	className?: string;
}

const Logo: FC<Props> = ({ className }) => {
	return (
		<svg
			width="61"
			height="156"
			viewBox="0 0 61 156"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
            className={className}
		>
			<path
				d="M10.7471 94.4502C9.4671 94.4502 8.5071 94.2582 7.8671 93.8742C7.2271 93.5542 6.7791 93.0742 6.5231 92.4342C6.3311 91.7942 6.2351 91.0262 6.2351 90.1302V31.8582C6.2351 30.8982 6.3311 30.0982 6.5231 29.4582C6.7151 28.8182 7.0991 28.3382 7.6751 28.0182C8.3151 27.6342 9.2751 27.4422 10.5551 27.4422C11.8351 27.4422 12.7631 27.6342 13.3391 28.0182C13.9791 28.3382 14.3951 28.8182 14.5871 29.4582C14.7791 30.0982 14.8751 30.8662 14.8751 31.7622V86.3862H47.0351C47.8671 86.3862 48.5711 86.4822 49.1471 86.6742C49.7231 86.8662 50.1711 87.2502 50.4911 87.8262C50.8751 88.4022 51.0671 89.2662 51.0671 90.4182C51.0671 91.5062 50.9071 92.3702 50.5871 93.0102C50.2671 93.5862 49.8191 93.9702 49.2431 94.1622C48.6671 94.3542 47.9631 94.4502 47.1311 94.4502H10.7471Z"
			/>
			<path
				d="M31.5249 133.758C29.6689 133.758 27.8449 133.534 26.0529 133.086C24.3249 132.638 22.7249 132.062 21.2529 131.358C19.7809 130.654 18.4689 129.886 17.3169 129.054C16.1649 128.222 15.2049 127.422 14.4369 126.654C13.7329 125.95 13.1249 125.31 12.6129 124.734C12.1649 124.158 11.9409 123.614 11.9409 123.102C11.9409 122.526 12.1329 121.95 12.5169 121.374C12.9009 120.734 13.3169 120.19 13.7649 119.742C14.4689 119.038 15.0449 118.59 15.4929 118.398C16.0049 118.142 16.4849 118.014 16.9329 118.014C17.8289 118.014 18.5329 118.302 19.0449 118.878C19.6209 119.454 20.4529 120.254 21.5409 121.278C22.1809 121.726 23.0129 122.27 24.0369 122.91C25.0609 123.55 26.2449 124.126 27.5889 124.638C28.9329 125.086 30.3729 125.31 31.9089 125.31C34.0209 125.31 35.8449 124.926 37.3809 124.158C38.9169 123.39 40.1649 122.302 41.1249 120.894C42.1489 119.486 42.9169 117.854 43.4289 115.998C43.9409 114.078 44.1969 112.03 44.1969 109.854V71.5498C44.1969 70.5258 44.2929 69.6298 44.4849 68.8618C44.6769 68.0938 45.0929 67.5178 45.7329 67.1338C46.4369 66.6858 47.4289 66.4618 48.7089 66.4618C49.9249 66.4618 50.8209 66.6538 51.3969 67.0378C51.9729 67.3578 52.3569 67.8698 52.5489 68.5738C52.7409 69.2138 52.8369 69.9818 52.8369 70.8778V110.622C52.8369 114.014 52.3569 117.118 51.3969 119.934C50.5009 122.75 49.1569 125.182 47.3649 127.23C45.5729 129.278 43.3329 130.878 40.6449 132.03C38.0209 133.182 34.9809 133.758 31.5249 133.758Z"
			/>
			<path
				d="M17.2058 105.339C16.2787 108.653 16.7686 109.052 26.9576 114.26C37.0886 108.94 40.8944 105.881 39.9309 102.578C38.3097 99.2791 33.5303 100.188 26.9578 106.826C22.303 102.688 18.7905 102.022 17.2058 105.339Z"
			/>
			<path
				d="M17.2801 78.3709C16.3531 75.0575 16.843 74.6581 27.032 69.4508C37.163 74.7701 40.9688 77.8289 40.0052 81.1319C38.3841 84.4312 33.6046 83.5221 27.0321 76.8842C22.3773 81.0219 18.8648 81.6879 17.2801 78.3709Z"
			/>
		</svg>
	);
};

export default Logo;