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
	},
	recipe1985: {
		name: "Ripley's Stout",
		style: "American Stout",
		brewDate: "2016-10-16",
		batchSize: 5.5,
	  malts: [
			{
				id: "malt8675309",
				name: "Maris Otter", 
				weight: 10, 
				country: "United Kingdom", 
				srm: 4.5, 
				sg: 1.037, 
				max: 1
			},
			{
				id: "malt8675310",
				name: "Chocolate Malt", 
				weight: .5, 
				country: "United Kingdom", 
				srm: 350, 
				sg: 1.035, 
				max: .2
			},
			{
				id: "malt8675311",
				name: "Roasted Barley", 
				weight: .25, 
				country: "United Kingdom", 
				srm: 500, 
				sg: 1.035, 
				max: .2
			}
	  ],
	  hops: [
	  	{name: "Cascade", weight: .5, boilTime: 60, type: "Boil", alpha: 8, beta: 6.0},
	  	{name: "Cascade", weight: .5, boilTime: 40, type: "Boil", alpha: 8, beta: 6.0},
	  	{name: "Cascade", weight: .5, boilTime: 20, type: "Boil", alpha: 8, beta: 6.0}
	  ],
	  yeast: {
	  	name: 'London ESB Ale',
	  	attenuation: .75,
	  	brand: "Wyeast"
	  }
	}
}

export default recipes;