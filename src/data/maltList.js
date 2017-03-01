const maltList = [
  {
    "id": "malt0001",
    "name": "Acid Malt",
    "country": "Germany",
    "type": "Grain",
    "srm": 3,
    "requiresMash": "Yes",
    "sg": 1.027,
    "max": 0.1
  },
  {
    "id": "malt0002",
    "name": "Amber Dry Extract",
    "country": "US",
    "type": "Dry Extract",
    "srm": 13,
    "requiresMash": "No",
    "sg": 1.044,
    "max": 1
  },
  {
    "id": "malt0003",
    "name": "Amber Liquid Extract",
    "country": "US",
    "type": "Extract",
    "srm": 13,
    "requiresMash": "No",
    "sg": 1.036,
    "max": 1
  },
  {
    "id": "malt0004",
    "name": "Amber Malt",
    "country": "United Kingdom",
    "type": "Grain",
    "srm": 22,
    "requiresMash": "Yes",
    "sg": 1.035,
    "max": 0.2
  },
  {
    "id": "malt0005",
    "name": "Aromatic Malt",
    "country": "Belgium",
    "type": "Grain",
    "srm": 26,
    "requiresMash": "Yes",
    "sg": 1.036,
    "max": 0.1
  },
  {
    "id": "malt0006",
    "name": "Barley Hulls",
    "country": "US",
    "type": "Adjunct",
    "srm": 0,
    "requiresMash": "No",
    "sg": 1,
    "max": 0.05
  },
  {
    "id": "malt0007",
    "name": "Barley, Flaked",
    "country": "US",
    "type": "Grain",
    "srm": 2,
    "requiresMash": "Yes",
    "sg": 1.032,
    "max": 0.2
  },
  {
    "id": "malt0008",
    "name": "Barley, Raw",
    "country": "US",
    "type": "Grain",
    "srm": 2,
    "requiresMash": "Yes",
    "sg": 1.028,
    "max": 0.15
  },
  {
    "id": "malt0009",
    "name": "Barley, Torrefied",
    "country": "US",
    "type": "Grain",
    "srm": 2,
    "requiresMash": "Yes",
    "sg": 1.036,
    "max": 0.4
  },
  {
    "id": "malt0010",
    "name": "Biscuit Malt",
    "country": "Belgium",
    "type": "Grain",
    "srm": 23,
    "requiresMash": "No",
    "sg": 1.036,
    "max": 0.1
  },
  {
    "id": "malt0011",
    "name": "Black (Patent) Malt",
    "country": "US",
    "type": "Grain",
    "srm": 500,
    "requiresMash": "No",
    "sg": 1.025,
    "max": 0.1
  },
  {
    "id": "malt0012",
    "name": "Black Barley (Stout)",
    "country": "US",
    "type": "Grain",
    "srm": 500,
    "requiresMash": "No",
    "sg": 1.025,
    "max": 0.1
  },
  {
    "id": "malt0013",
    "name": "Brown Malt",
    "country": "United Kingdom",
    "type": "Grain",
    "srm": 65,
    "requiresMash": "Yes",
    "sg": 1.032,
    "max": 0.1
  },
  {
    "id": "malt0014",
    "name": "Brown Sugar, Dark",
    "country": "US",
    "type": "Sugar",
    "srm": 50,
    "requiresMash": "No",
    "sg": 1.046,
    "max": 0.1
  },
  {
    "id": "malt0015",
    "name": "Brown Sugar, Light",
    "country": "US",
    "type": "Sugar",
    "srm": 8,
    "requiresMash": "No",
    "sg": 1.046,
    "max": 0.1
  },
  {
    "id": "malt0016",
    "name": "Brumalt",
    "country": "Germany",
    "type": "Grain",
    "srm": 23,
    "requiresMash": "Yes",
    "sg": 1.033,
    "max": 0.1
  },
  {
    "id": "malt0017",
    "name": "Candi Sugar, Amber",
    "country": "Belgium",
    "type": "Sugar",
    "srm": 75,
    "requiresMash": "No",
    "sg": 1.036,
    "max": 0.2
  },
  {
    "id": "malt0018",
    "name": "Candi Sugar, Clear",
    "country": "Belgium",
    "type": "Sugar",
    "srm": 1,
    "requiresMash": "No",
    "sg": 1.036,
    "max": 0.2
  },
  {
    "id": "malt0019",
    "name": "Candi Sugar, Dark",
    "country": "Belgium",
    "type": "Sugar",
    "srm": 275,
    "requiresMash": "No",
    "sg": 1.036,
    "max": 0.2
  },
  {
    "id": "malt0020",
    "name": "Cane (Beet) Sugar",
    "country": "US",
    "type": "Sugar",
    "srm": 0,
    "requiresMash": "No",
    "sg": 1.046,
    "max": 0.07
  },
  {
    "id": "malt0021",
    "name": "Cara-Pils/Dextrine",
    "country": "US",
    "type": "Grain",
    "srm": 2,
    "requiresMash": "No",
    "sg": 1.033,
    "max": 0.2
  },
  {
    "id": "malt0022",
    "name": "Caraamber",
    "country": "US",
    "type": "Grain",
    "srm": 30,
    "requiresMash": "No",
    "sg": 1.035,
    "max": 0.2
  },
  {
    "id": "malt0023",
    "name": "Carafoam",
    "country": "US",
    "type": "Grain",
    "srm": 2,
    "requiresMash": "No",
    "sg": 1.033,
    "max": 0.2
  },
  {
    "id": "malt0024",
    "name": "Caramel/Crystal Malt – 10L",
    "country": "US",
    "type": "Grain",
    "srm": 10,
    "requiresMash": "No",
    "sg": 1.035,
    "max": 0.2
  },
  {
    "id": "malt0025",
    "name": "Caramel/Crystal Malt – 20L",
    "country": "US",
    "type": "Grain",
    "srm": 20,
    "requiresMash": "No",
    "sg": 1.035,
    "max": 0.2
  },
  {
    "id": "malt0026",
    "name": "Caramel/Crystal Malt – 30L",
    "country": "US",
    "type": "Grain",
    "srm": 30,
    "requiresMash": "No",
    "sg": 1.035,
    "max": 0.2
  },
  {
    "id": "malt0027",
    "name": "Caramel/Crystal Malt – 40L",
    "country": "US",
    "type": "Grain",
    "srm": 40,
    "requiresMash": "No",
    "sg": 1.034,
    "max": 0.2
  },
  {
    "id": "malt0028",
    "name": "Caramel/Crystal Malt – 60L",
    "country": "US",
    "type": "Grain",
    "srm": 60,
    "requiresMash": "No",
    "sg": 1.034,
    "max": 0.2
  },
  {
    "id": "malt0029",
    "name": "Caramel/Crystal Malt – 80L",
    "country": "US",
    "type": "Grain",
    "srm": 80,
    "requiresMash": "No",
    "sg": 1.034,
    "max": 0.2
  },
  {
    "id": "malt0030",
    "name": "Caramel/Crystal Malt -120L",
    "country": "US",
    "type": "Grain",
    "srm": 120,
    "requiresMash": "No",
    "sg": 1.033,
    "max": 0.2
  },
  {
    "id": "malt0031",
    "name": "Caramunich Malt",
    "country": "Belgium",
    "type": "Grain",
    "srm": 56,
    "requiresMash": "No",
    "sg": 1.033,
    "max": 0.1
  },
  {
    "id": "malt0032",
    "name": "Carared",
    "country": "US",
    "type": "Grain",
    "srm": 20,
    "requiresMash": "No",
    "sg": 1.035,
    "max": 0.2
  },
  {
    "id": "malt0033",
    "name": "Caravienne Malt",
    "country": "Belgium",
    "type": "Grain",
    "srm": 22,
    "requiresMash": "No",
    "sg": 1.034,
    "max": 0.1
  },
  {
    "id": "malt0034",
    "name": "Chocolate Malt (US)",
    "country": "US",
    "type": "Grain",
    "srm": 350,
    "requiresMash": "No",
    "sg": 1.028,
    "max": 0.1
  },
  {
    "id": "malt0035",
    "name": "Chocolate Malt (UK)",
    "country": "United Kingdom",
    "type": "Grain",
    "srm": 450,
    "requiresMash": "No",
    "sg": 1.034,
    "max": 0.1
  },
  {
    "id": "malt0036",
    "name": "Corn Sugar (Dextrose)",
    "country": "US",
    "type": "Sugar",
    "srm": 0,
    "requiresMash": "No",
    "sg": 1.046,
    "max": 0.05
  },
  {
    "id": "malt0037",
    "name": "Corn Syrup",
    "country": "US",
    "type": "Sugar",
    "srm": 1,
    "requiresMash": "No",
    "sg": 1.036,
    "max": 0.1
  },
  {
    "id": "malt0038",
    "name": "Corn, Flaked",
    "country": "US",
    "type": "Grain",
    "srm": 1,
    "requiresMash": "Yes",
    "sg": 1.037,
    "max": 0.4
  },
  {
    "id": "malt0039",
    "name": "Dark Dry Extract",
    "country": "US",
    "type": "Dry Extract",
    "srm": 18,
    "requiresMash": "No",
    "sg": 1.044,
    "max": 1
  },
  {
    "id": "malt0040",
    "name": "Dark Liquid Extract",
    "country": "US",
    "type": "Extract",
    "srm": 18,
    "requiresMash": "No",
    "sg": 1.036,
    "max": 1
  },
  {
    "id": "malt0041",
    "name": "Dememera Sugar",
    "country": "United Kingdom",
    "type": "Sugar",
    "srm": 2,
    "requiresMash": "No",
    "sg": 1.046,
    "max": 0.1
  },
  {
    "id": "malt0042",
    "name": "Extra Light Dry Extract",
    "country": "US",
    "type": "Dry Extract",
    "srm": 3,
    "requiresMash": "No",
    "sg": 1.044,
    "max": 1
  },
  {
    "id": "malt0043",
    "name": "Grits",
    "country": "US",
    "type": "Adjunct",
    "srm": 1,
    "requiresMash": "No",
    "sg": 1.037,
    "max": 0.1
  },
  {
    "id": "malt0044",
    "name": "Honey",
    "country": "US",
    "type": "Extract",
    "srm": 1,
    "requiresMash": "No",
    "sg": 1.035,
    "max": 1
  },
  {
    "id": "malt0045",
    "name": "Invert Sugar",
    "country": "United Kingdom",
    "type": "Sugar",
    "srm": 0,
    "requiresMash": "No",
    "sg": 1.046,
    "max": 0.1
  },
  {
    "id": "malt0046",
    "name": "Light Dry Extract",
    "country": "US",
    "type": "Dry Extract",
    "srm": 8,
    "requiresMash": "No",
    "sg": 1.044,
    "max": 1
  },
  {
    "id": "malt0047",
    "name": "Maple Syrup",
    "country": "US",
    "type": "Sugar",
    "srm": 35,
    "requiresMash": "No",
    "sg": 1.03,
    "max": 0.1
  },
  {
    "id": "malt0048",
    "name": "Melanoiden Malt",
    "country": "Germany",
    "type": "Grain",
    "srm": 20,
    "requiresMash": "Yes",
    "sg": 1.037,
    "max": 0.15
  },
  {
    "id": "malt0049",
    "name": "Mild Malt",
    "country": "United Kingdom",
    "type": "Grain",
    "srm": 4,
    "requiresMash": "Yes",
    "sg": 1.037,
    "max": 1
  },
  {
    "id": "malt0050",
    "name": "Milk Sugar (Lactose)",
    "country": "US",
    "type": "Sugar",
    "srm": 0,
    "requiresMash": "No",
    "sg": 1.035,
    "max": 0.1
  },
  {
    "id": "malt0051",
    "name": "Molasses",
    "country": "US",
    "type": "Sugar",
    "srm": 80,
    "requiresMash": "No",
    "sg": 1.036,
    "max": 0.05
  },
  {
    "id": "malt0052",
    "name": "Munich Malt",
    "country": "Germany",
    "type": "Grain",
    "srm": 9,
    "requiresMash": "Yes",
    "sg": 1.037,
    "max": 0.8
  },
  {
    "id": "malt0053",
    "name": "Munich Malt – 10L",
    "country": "US",
    "type": "Grain",
    "srm": 10,
    "requiresMash": "Yes",
    "sg": 1.035,
    "max": 0.8
  },
  {
    "id": "malt0054",
    "name": "Munich Malt – 20L",
    "country": "US",
    "type": "Grain",
    "srm": 20,
    "requiresMash": "Yes",
    "sg": 1.035,
    "max": 0.8
  },
  {
    "id": "malt0055",
    "name": "Oats, Flaked",
    "country": "US",
    "type": "Grain",
    "srm": 1,
    "requiresMash": "Yes",
    "sg": 1.037,
    "max": 0.3
  },
  {
    "id": "malt0056",
    "name": "Oats, Malted",
    "country": "US",
    "type": "Grain",
    "srm": 1,
    "requiresMash": "Yes",
    "sg": 1.037,
    "max": 0.1
  },
  {
    "id": "malt0057",
    "name": "Pale Liquid Extract",
    "country": "US",
    "type": "Extract",
    "srm": 8,
    "requiresMash": "No",
    "sg": 1.036,
    "max": 1
  },
  {
    "id": "malt0058",
    "name": "Pale Malt (2 Row) Bel",
    "country": "Belgium",
    "type": "Grain",
    "srm": 3,
    "requiresMash": "Yes",
    "sg": 1.037,
    "max": 1
  },
  {
    "id": "malt0059",
    "name": "Pale Malt (2 Row) UK",
    "country": "United Kingdom",
    "type": "Grain",
    "srm": 3,
    "requiresMash": "Yes",
    "sg": 1.036,
    "max": 1
  },
  {
    "id": "malt0060",
    "name": "Pale Malt (2 Row) US",
    "country": "US",
    "type": "Grain",
    "srm": 2,
    "requiresMash": "Yes",
    "sg": 1.036,
    "max": 1
  },
  {
    "id": "malt0061",
    "name": "Pale Malt (6 Row) US",
    "country": "US",
    "type": "Grain",
    "srm": 2,
    "requiresMash": "Yes",
    "sg": 1.035,
    "max": 1
  },
  {
    "id": "malt0062",
    "name": "Peat Smoked Malt",
    "country": "United Kingdom",
    "type": "Grain",
    "srm": 3,
    "requiresMash": "Yes",
    "sg": 1.034,
    "max": 0.2
  },
  {
    "id": "malt0063",
    "name": "Pilsner (2 Row) Bel",
    "country": "Belgium",
    "type": "Grain",
    "srm": 2,
    "requiresMash": "Yes",
    "sg": 1.036,
    "max": 1
  },
  {
    "id": "malt0064",
    "name": "Pilsner (2 Row) Ger",
    "country": "Germany",
    "type": "Grain",
    "srm": 2,
    "requiresMash": "Yes",
    "sg": 1.037,
    "max": 1
  },
  {
    "id": "malt0065",
    "name": "Pilsner (2 Row) UK",
    "country": "United Kingdom",
    "type": "Grain",
    "srm": 1,
    "requiresMash": "Yes",
    "sg": 1.036,
    "max": 1
  },
  {
    "id": "malt0066",
    "name": "Pilsner Liquid Extract",
    "country": "US",
    "type": "Extract",
    "srm": 4,
    "requiresMash": "No",
    "sg": 1.036,
    "max": 1
  },
  {
    "id": "malt0067",
    "name": "Rice Extract Syrup",
    "country": "US",
    "type": "Extract",
    "srm": 7,
    "requiresMash": "No",
    "sg": 1.032,
    "max": 0.15
  },
  {
    "id": "malt0068",
    "name": "Rice Hulls",
    "country": "US",
    "type": "Adjunct",
    "srm": 0,
    "requiresMash": "No",
    "sg": 1,
    "max": 0.05
  },
  {
    "id": "malt0069",
    "name": "Rice, Flaked",
    "country": "US",
    "type": "Grain",
    "srm": 1,
    "requiresMash": "Yes",
    "sg": 1.032,
    "max": 0.25
  },
  {
    "id": "malt0070",
    "name": "Roasted Barley",
    "country": "US",
    "type": "Grain",
    "srm": 300,
    "requiresMash": "No",
    "sg": 1.025,
    "max": 0.1
  },
  {
    "id": "malt0071",
    "name": "Rye Malt",
    "country": "US",
    "type": "Grain",
    "srm": 5,
    "requiresMash": "Yes",
    "sg": 1.029,
    "max": 0.15
  },
  {
    "id": "malt0072",
    "name": "Rye, Flaked",
    "country": "US",
    "type": "Grain",
    "srm": 2,
    "requiresMash": "Yes",
    "sg": 1.036,
    "max": 0.1
  },
  {
    "id": "malt0073",
    "name": "Smoked Malt",
    "country": "Germany",
    "type": "Grain",
    "srm": 9,
    "requiresMash": "Yes",
    "sg": 1.037,
    "max": 1
  },
  {
    "id": "malt0074",
    "name": "Special B Malt",
    "country": "Belgium",
    "type": "Grain",
    "srm": 180,
    "requiresMash": "Yes",
    "sg": 1.03,
    "max": 0.1
  },
  {
    "id": "malt0075",
    "name": "Special Roast",
    "country": "US",
    "type": "Grain",
    "srm": 50,
    "requiresMash": "Yes",
    "sg": 1.033,
    "max": 0.1
  },
  {
    "id": "malt0076",
    "name": "Sugar, Table (Sucrose)",
    "country": "US",
    "type": "Sugar",
    "srm": 1,
    "requiresMash": "No",
    "sg": 1.046,
    "max": 0.1
  },
  {
    "id": "malt0077",
    "name": "Toasted Malt",
    "country": "United Kingdom",
    "type": "Grain",
    "srm": 27,
    "requiresMash": "Yes",
    "sg": 1.033,
    "max": 0.1
  },
  {
    "id": "malt0078",
    "name": "Turbinado",
    "country": "United Kingdom",
    "type": "Sugar",
    "srm": 10,
    "requiresMash": "No",
    "sg": 1.044,
    "max": 0.1
  },
  {
    "id": "malt0079",
    "name": "Victory Malt",
    "country": "US",
    "type": "Grain",
    "srm": 25,
    "requiresMash": "Yes",
    "sg": 1.034,
    "max": 0.15
  },
  {
    "id": "malt0080",
    "name": "Vienna Malt",
    "country": "Germany",
    "type": "Grain",
    "srm": 4,
    "requiresMash": "Yes",
    "sg": 1.036,
    "max": 0.9
  },
  {
    "id": "malt0081",
    "name": "Wheat Dry Extract",
    "country": "US",
    "type": "Dry Extract",
    "srm": 8,
    "requiresMash": "No",
    "sg": 1.044,
    "max": 1
  },
  {
    "id": "malt0082",
    "name": "Wheat Liquid Extract",
    "country": "US",
    "type": "Extract",
    "srm": 8,
    "requiresMash": "No",
    "sg": 1.036,
    "max": 1
  },
  {
    "id": "malt0083",
    "name": "Wheat Malt, Bel",
    "country": "Belgium",
    "type": "Grain",
    "srm": 2,
    "requiresMash": "Yes",
    "sg": 1.037,
    "max": 0.6
  },
  {
    "id": "malt0084",
    "name": "Wheat Malt, Dark",
    "country": "Germany",
    "type": "Grain",
    "srm": 9,
    "requiresMash": "Yes",
    "sg": 1.039,
    "max": 0.2
  },
  {
    "id": "malt0085",
    "name": "Wheat Malt, Ger",
    "country": "Germany",
    "type": "Grain",
    "srm": 2,
    "requiresMash": "Yes",
    "sg": 1.039,
    "max": 0.6
  },
  {
    "id": "malt0086",
    "name": "Wheat, Flaked",
    "country": "US",
    "type": "Grain",
    "srm": 2,
    "requiresMash": "Yes",
    "sg": 1.035,
    "max": 0.4
  },
  {
    "id": "malt0087",
    "name": "Wheat, Roasted",
    "country": "Germany",
    "type": "Grain",
    "srm": 425,
    "requiresMash": "Yes",
    "sg": 1.025,
    "max": 0.1
  },
  {
    "id": "malt0088",
    "name": "Wheat, Torrified",
    "country": "US",
    "type": "Grain",
    "srm": 2,
    "requiresMash": "Yes",
    "sg": 1.036,
    "max": 0.4
  },
  {
    "id": "malt0089",
    "name": "White Wheat Malt",
    "country": "US",
    "type": "Grain",
    "srm": 2,
    "requiresMash": "Yes",
    "sg": 1.04,
    "max": 0.6
  }
]

export default maltList;