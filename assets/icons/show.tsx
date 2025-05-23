export default function (props: React.SVGProps<SVGSVGElement>) {
	const size = props.width || 22;
	return (
		<svg width={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="12" r="3" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> </g></svg>
	);
}
