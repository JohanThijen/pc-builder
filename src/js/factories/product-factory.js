'use-strict';

export default () => {

	// deze factory fungeert als database, hier wordt alle data vandaan gehaald

	return {
		getCategories : function(){
			return [{
				'label' : 'CPU',
				'route' : 'cpu'
			},{
				'label' : 'Motherboard',
				'route' : 'mobo'
			},{
				'label' : 'Graphics card',
				'route' : 'gfx'
			},{
				'label' : 'RAM',
				'route' : 'ram'
			},{
				'label' : 'Harddisk',
				'route' : 'hdd'
			},{
				'label' : 'Power supply',
				'route' : 'psu'
			},{
				'label' : 'Case',
				'route' : 'case'
			}]
		},
		getCPUs : function(){
			return [{
				'id' : 1,
				'category' : 'CPU',
				'brand' : 'Intel',
				'name' : 'Core i7-4770',
				'price' : 329
			},{
				'id' : 2,
				'category' : 'CPU',
				'brand' : 'Intel',
				'name' : 'Core i7-6800K',
				'price' : 479
			},{
				'id' : 3,
				'category' : 'CPU',
				'brand' : 'Intel',
				'name' : 'Celeron G1850',
				'price' : 59
			},{
				'id' : 4,
				'category' : 'CPU',
				'brand' : 'Intel',
				'name' : 'Core i5 4670',
				'price' : 239
			}]
		},
		getMotherboards : function(){
			return [{
				'id' : 5,
				'category' : 'Motherboard',
				'brand' : 'MSI',
				'name' : 'Z97 Gaming 3',
				'price' : 134
			},{
				'id' : 6,
				'category' : 'Motherboard',
				'brand' : 'MSI',
				'name' : 'Z97 Gaming 5',
				'price' : 147
			},{
				'id' : 7,
				'category' : 'Motherboard',
				'brand' : 'Asrock',
				'name' : 'C226MBS',
				'price' : 199
			},{
				'id' : 8,
				'category' : 'Motherboard',
				'brand' : 'Asrock',
				'name' : 'E3C224-4L',
				'price' : 229
			}]
		},
		getGraphicscards : function(){
			return [{
				'id' : 9,
				'category' : 'Graphics card',
				'brand' : 'Asus',
				'name' : 'GTX1080',
				'price' : 799
			},{
				'id' : 10,
				'category' : 'Graphics card',
				'brand' : 'Asus',
				'name' : 'GTX980Ti',
				'price' : 599
			},{
				'id' : 11,
				'category' : 'Graphics card',
				'brand' : 'Gigabyte',
				'name' : 'N950 Extreme-2GB',
				'price' : 187
			},{
				'id' : 12,
				'category' : 'Graphics card',
				'brand' : 'Gigabyte',
				'name' : 'N970WF3OC-4GB',
				'price' : 359
			}]
		},
		getRAM : function(){
			return [{
				'id' : 13,
				'category' : 'RAM',
				'brand' : 'Adata',
				'name' : '16GB DDR3 kit',
				'price' : 66
			},{
				'id' : 14,
				'category' : 'RAM',
				'brand' : 'Adata',
				'name' : '8GB DDR3 kit',
				'price' : 32
			},{
				'id' : 15,
				'category' : 'RAM',
				'brand' : 'Corsair',
				'name' : '16GB DDR3 kit',
				'price' : 64
			},{
				'id' : 16,
				'category' : 'RAM',
				'brand' : 'Corsair',
				'name' : '8GB DDR3 kit',
				'price' : 35
			}]
		},
		getHarddisks : function(){
			return [{
				'id' : 17,
				'category' : 'Harddisk',
				'brand' : 'Samsung',
				'name' : '750 EVO 250GB',
				'price' : 74
			},{
				'id' : 18,
				'category' : 'Harddisk',
				'brand' : 'Samsung',
				'name' : '850 EVO 1TB',
				'price' : 334
			},{
				'id' : 19,
				'category' : 'Harddisk',
				'brand' : 'Samsung',
				'name' : '950 PRO 256GB',
				'price' : 194
			},{
				'id' : 20,
				'category' : 'Harddisk',
				'brand' : 'Samsung',
				'name' : '950 PRO 512GB',
				'price' : 334
			}]
		},
		getPowerSupplies : function(){
			return [{
				'id' : 21,
				'category' : 'Power supply',
				'brand' : 'Corsair',
				'name' : 'CS550M 550W',
				'price' : 90
			},{
				'id' : 22,
				'category' : 'Power supply',
				'brand' : 'Corsair',
				'name' : 'AX860 860W',
				'price' : 209
			},{
				'id' : 23,
				'category' : 'Power supply',
				'brand' : 'Corsair',
				'name' : 'CS650M 650W',
				'price' : 102
			},{
				'id' : 24,
				'category' : 'Power supply',
				'brand' : 'Corsair',
				'name' : 'CS750M 750W',
				'price' : 117
			}]
		},
		getCases : function(){
			return [{
				'id' : 25,
				'category' : 'Case',
				'brand' : 'Aerocool',
				'name' : 'Aero 500',
				'price' : 40
			},{
				'id' : 26,
				'category' : 'Case',
				'brand' : 'Aerocool',
				'name' : 'Aero 600',
				'price' : 50
			},{
				'id' : 27,
				'category' : 'Case',
				'brand' : 'Aerocool',
				'name' : 'Aero 700',
				'price' : 60
			},{
				'id' : 28,
				'category' : 'Case',
				'brand' : 'Aerocool',
				'name' : 'Aero 800',
				'price' : 70
			}]
		}
	}
};
