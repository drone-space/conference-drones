import utility from "@src/utilities";

const useCrumbs = (path: string) => {
	const crumbs = [{ link: "/", label: "Home" }];

	let currentLink = "";

	path.split("/")
		.filter((crumb) => crumb != "")
		.map((item) => {
			currentLink += `/${item}`;
			item.length < 24 &&
				crumbs.push({
					link: currentLink,
					label: `${utility.parser.string.capitalize.words(
						item.replaceAll("-", " ")
					)}`,
				});
		});

	return crumbs;
};

export default useCrumbs;
