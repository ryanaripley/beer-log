const recipes = {
	recipe1984: {
		name: "Ripley's Bitter",
		style: "Ordinary bitter",
		brewDate: "2016-09-16",
		batchSize: 5.5,
	  malts: [
			{
				id: "malt8675309",
				name: "Maris Otter", 
				weight: 7, 
				country: "United Kingdom", 
				srm: 4.5, 
				sg: 1.037, 
				max: 1
			}
	  ],
	  hops: [
	  	{name: "Amarillo", weight: 0.9, boilTime: 40, type: "First wort", alpha: 8.2, beta: 6.0},
	  	{name: "Amarillo", weight: 0.3, boilTime: 10, type: "Boil", alpha: 8.2, beta: 6.0},
	  	{name: "Amarillo", weight: 0.8, boilTime: 2, type: "Boil", alpha: 8.2, beta: 6.0}
	  ],
	  yeast: {
	  	name: 'London ESB Ale',
	  	attenuation: .75,
	  	brand: "Wyeast"
	  }
	}
}

export default recipes;