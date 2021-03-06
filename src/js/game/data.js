//Diese file ist im Grunde eine .json file. Jedoch habe ich keinen Weg gefunden .json files ohne ein XMLHttpRequest zu laden.
//Da die url ein http beinhalten muss um eine file mit einem XMLHttpRequest zu laden, also von einem Server, habe ich keine besser Lösung
//gefunden, als einfach ein Objekt anzulegen, und es wie eine normale .js file zu laden.

var data = {
	"weapons": [
		{
			"name": "Shotgun",
			"fireRate": 50,
			"precision": 20,
			"damage": 30,
			"knockback": 50,
			"fireMode": "semi",
			"bulletsPerShot": 10,
			"bulletVelocity": 25,
			"bulletLifeTime": 30,
			"magazinSize": 8,
			"reloadTime": 150,
			"type": "Main Weapon",
			"description": "a strong and reliable weapon for close distance combat",
			"img": "res/items/weapons/shotgun.png",
			"bulletImg": "res/shotgun_bullet.png"
		},
		{
			"name": "Shotgun +1",
			"fireRate": 50,
			"precision": 20,
			"damage": 37,
			"knockback": 50,
			"fireMode": "semi",
			"bulletsPerShot": 10,
			"bulletVelocity": 25,
			"bulletLifeTime": 30,
			"magazinSize": 8,
			"reloadTime": 150,
			"type": "Main Weapon",
			"description": "an upgraded version of the shotgun",
			"img": "res/items/weapons/shotgun.png",
			"bulletImg": "res/shotgun_bullet.png"
		},
		{
			"name": "Shotgun +2",
			"fireRate": 50,
			"precision": 20,
			"damage": 44,
			"knockback": 50,
			"fireMode": "semi",
			"bulletsPerShot": 10,
			"bulletVelocity": 25,
			"bulletLifeTime": 30,
			"magazinSize": 8,
			"reloadTime": 150,
			"type": "Main Weapon",
			"description": "an upgraded version of the shotgun",
			"img": "res/items/weapons/shotgun.png",
			"bulletImg": "res/shotgun_bullet.png"
		},
		{
			"name": "Shotgun +3",
			"fireRate": 40,
			"precision": 20,
			"damage": 51,
			"knockback": 50,
			"fireMode": "semi",
			"bulletsPerShot": 10,
			"bulletVelocity": 25,
			"bulletLifeTime": 30,
			"magazinSize": 10,
			"reloadTime": 150,
			"type": "Main Weapon",
			"description": "an upgraded version of the shotgun",
			"img": "res/items/weapons/shotgun.png",
			"bulletImg": "res/shotgun_bullet.png"
		},
		{
			"name": "Shotgun +4",
			"fireRate": 50,
			"precision": 20,
			"damage": 58,
			"knockback": 50,
			"fireMode": "semi",
			"bulletsPerShot": 10,
			"bulletVelocity": 25,
			"bulletLifeTime": 30,
			"magazinSize": 10,
			"reloadTime": 120,
			"type": "Main Weapon",
			"description": "an upgraded version of the shotgun",
			"img": "res/items/weapons/shotgun.png",
			"bulletImg": "res/shotgun_bullet.png"
		},
		{
			"name": "Shotgun +5",
			"fireRate": 40,
			"precision": 15,
			"damage": 65,
			"knockback": 50,
			"fireMode": "semi",
			"bulletsPerShot": 10,
			"bulletVelocity": 25,
			"bulletLifeTime": 30,
			"magazinSize": 12,
			"reloadTime": 120,
			"type": "Main Weapon",
			"description": "The final version of the shotgun. Aim it at anything and it should be gone after you pull the trigger!",
			"img": "res/items/weapons/shotgun.png",
			"bulletImg": "res/shotgun_bullet.png"
		},
		{
			"name": "Pistol",
			"fireRate": 20,
			"precision": 3,
			"damage": 50,
			"knockback": 10,
			"fireMode": "semi",
			"bulletsPerShot": 1,
			"bulletVelocity": 25,
			"bulletLifeTime": 80,
			"magazinSize": 15,
			"reloadTime": 50,
			"type": "Secondary Weapon",
			"description": "a weak but fast weapon",
			"img": "res/items/weapons/pistol.png",
			"bulletImg": "res/small_bullet.png"
		},
		{
			"name": "Pistol +1",
			"fireRate": 20,
			"precision": 3,
			"damage": 70,
			"knockback": 10,
			"fireMode": "semi",
			"bulletsPerShot": 1,
			"bulletVelocity": 25,
			"bulletLifeTime": 80,
			"magazinSize": 15,
			"reloadTime": 50,
			"type": "Secondary Weapon",
			"description": "an upgraded version of the pistol",
			"img": "res/items/weapons/pistol.png",
			"bulletImg": "res/small_bullet.png"
		},
		{
			"name": "Pistol +2",
			"fireRate": 20,
			"precision": 3,
			"damage": 90,
			"knockback": 10,
			"fireMode": "semi",
			"bulletsPerShot": 1,
			"bulletVelocity": 25,
			"bulletLifeTime": 80,
			"magazinSize": 15,
			"reloadTime": 50,
			"type": "Secondary Weapon",
			"description": "an upgraded version of the pistol",
			"img": "res/items/weapons/pistol.png",
			"bulletImg": "res/small_bullet.png"
		},
		{
			"name": "Pistol +3",
			"fireRate": 20,
			"precision": 3,
			"damage": 110,
			"knockback": 10,
			"fireMode": "semi",
			"bulletsPerShot": 1,
			"bulletVelocity": 25,
			"bulletLifeTime": 80,
			"magazinSize": 15,
			"reloadTime": 50,
			"type": "Secondary Weapon",
			"description": "an upgraded version of the pistol",
			"img": "res/items/weapons/pistol.png",
			"bulletImg": "res/small_bullet.png"
		},
		{
			"name": "Pistol +4",
			"fireRate": 20,
			"precision": 3,
			"damage": 130,
			"knockback": 10,
			"fireMode": "semi",
			"bulletsPerShot": 1,
			"bulletVelocity": 25,
			"bulletLifeTime": 80,
			"magazinSize": 15,
			"reloadTime": 50,
			"type": "Secondary Weapon",
			"description": "an upgraded version of the pistol",
			"img": "res/items/weapons/pistol.png",
			"bulletImg": "res/small_bullet.png"
		},
		{
			"name": "Pistol +5",
			"fireRate": 20,
			"precision": 3,
			"damage": 150,
			"knockback": 20,
			"fireMode": "semi",
			"bulletsPerShot": 1,
			"bulletVelocity": 35,
			"bulletLifeTime": 80,
			"magazinSize": 15,
			"reloadTime": 40,
			"type": "Secondary Weapon",
			"description": "Still pretty useless tbh",
			"img": "res/items/weapons/pistol.png",
			"bulletImg": "res/small_bullet.png"
		},
		{
			"name": "Assault Rifle",
			"fireRate": 5,
			"precision": 5,
			"damage": 15,
			"knockback": 5,
			"fireMode": "auto",
			"bulletsPerShot": 1,
			"bulletVelocity": 25,
			"bulletLifeTime": 80,
			"magazinSize": 30,
			"reloadTime": 60,
			"type": "Main Weapon",
			"description": "a fast and medium damage weapon",
			"img": "res/items/weapons/assault.png",
			"bulletImg": "res/medium_bullet.png"
		},
		{
			"name": "Assault Rifle +1",
			"fireRate": 5,
			"precision": 5,
			"damage": 19,
			"knockback": 5,
			"fireMode": "auto",
			"bulletsPerShot": 1,
			"bulletVelocity": 25,
			"bulletLifeTime": 80,
			"magazinSize": 30,
			"reloadTime": 60,
			"type": "Main Weapon",
			"description": "an upgraded version of the assault rifle",
			"img": "res/items/weapons/assault.png",
			"bulletImg": "res/medium_bullet.png"
		},
		{
			"name": "Assault Rifle +2",
			"fireRate": 5,
			"precision": 5,
			"damage": 23,
			"knockback": 5,
			"fireMode": "auto",
			"bulletsPerShot": 1,
			"bulletVelocity": 25,
			"bulletLifeTime": 80,
			"magazinSize": 30,
			"reloadTime": 60,
			"type": "Main Weapon",
			"description": "an upgraded version of the assault rifle",
			"img": "res/items/weapons/assault.png",
			"bulletImg": "res/medium_bullet.png"
		},
		{
			"name": "Assault Rifle +3",
			"fireRate": 5,
			"precision": 5,
			"damage": 27,
			"knockback": 5,
			"fireMode": "auto",
			"bulletsPerShot": 1,
			"bulletVelocity": 25,
			"bulletLifeTime": 80,
			"magazinSize": 40,
			"reloadTime": 60,
			"type": "Main Weapon",
			"description": "an upgraded version of the assault rifle",
			"img": "res/items/weapons/assault.png",
			"bulletImg": "res/medium_bullet.png"
		},
		{
			"name": "Assault Rifle +4",
			"fireRate": 4,
			"precision": 5,
			"damage": 31,
			"knockback": 5,
			"fireMode": "auto",
			"bulletsPerShot": 1,
			"bulletVelocity": 25,
			"bulletLifeTime": 80,
			"magazinSize": 40,
			"reloadTime": 60,
			"type": "Main Weapon",
			"description": "an upgraded version of the assault rifle",
			"img": "res/items/weapons/assault.png",
			"bulletImg": "res/medium_bullet.png"
		},
		{
			"name": "Assault Rifle +5",
			"fireRate": 4,
			"precision": 5,
			"damage": 36,
			"knockback": 5,
			"fireMode": "auto",
			"bulletsPerShot": 1,
			"bulletVelocity": 35,
			"bulletLifeTime": 80,
			"magazinSize": 40,
			"reloadTime": 50,
			"type": "Main Weapon",
			"description": "I couldn`t come up with a cretive description for this one, but it's good... belive me!",
			"img": "res/items/weapons/assault.png",
			"bulletImg": "res/medium_bullet.png"
		},
		{
			"name": "Sniper",
			"fireRate": 80,
			"precision": 1,
			"damage": 160,
			"knockback": 50,
			"fireMode": "semi",
			"bulletsPerShot": 1,
			"bulletVelocity": 40,
			"bulletLifeTime": 100,
			"magazinSize": 5,
			"reloadTime": 100,
			"type": "Main Weapon",
			"description": "A very slow but extremely high damaging weapon",
			"img": "res/items/weapons/sniper.png",
			"bulletImg": "res/large_bullet.png"
		},
		{
			"name": "Sniper +1",
			"fireRate": 80,
			"precision": 1,
			"damage": 230,
			"knockback": 50,
			"fireMode": "semi",
			"bulletsPerShot": 1,
			"bulletVelocity": 40,
			"bulletLifeTime": 100,
			"magazinSize": 5,
			"reloadTime": 100,
			"type": "Main Weapon",
			"description": "an upgraded version of the sniper",
			"img": "res/items/weapons/sniper.png",
			"bulletImg": "res/large_bullet.png"
		},
		{
			"name": "Sniper +2",
			"fireRate": 80,
			"precision": 1,
			"damage": 300,
			"knockback": 50,
			"fireMode": "semi",
			"bulletsPerShot": 1,
			"bulletVelocity": 40,
			"bulletLifeTime": 100,
			"magazinSize": 5,
			"reloadTime": 100,
			"type": "Main Weapon",
			"description": "an upgraded version of the sniper",
			"img": "res/items/weapons/sniper.png",
			"bulletImg": "res/large_bullet.png"
		},
		{
			"name": "Sniper +3",
			"fireRate": 80,
			"precision": 1,
			"damage": 380,
			"knockback": 50,
			"fireMode": "semi",
			"bulletsPerShot": 1,
			"bulletVelocity": 40,
			"bulletLifeTime": 100,
			"magazinSize": 5,
			"reloadTime": 100,
			"type": "Main Weapon",
			"description": "an upgraded version of the sniper",
			"img": "res/items/weapons/sniper.png",
			"bulletImg": "res/large_bullet.png"
		},
		{
			"name": "Sniper +4",
			"fireRate": 80,
			"precision": 1,
			"damage": 450,
			"knockback": 50,
			"fireMode": "semi",
			"bulletsPerShot": 1,
			"bulletVelocity": 40,
			"bulletLifeTime": 100,
			"magazinSize": 5,
			"reloadTime": 100,
			"type": "Main Weapon",
			"description": "an upgraded version of the sniper",
			"img": "res/items/weapons/sniper.png",
			"bulletImg": "res/large_bullet.png"
		},
		{
			"name": "Sniper +5",
			"fireRate": 70,
			"precision": 1,
			"damage": 500,
			"knockback": 70,
			"fireMode": "semi",
			"bulletsPerShot": 1,
			"bulletVelocity": 40,
			"bulletLifeTime": 100,
			"magazinSize": 8,
			"reloadTime": 70,
			"type": "Main Weapon",
			"description": "One shot one kill",
			"img": "res/items/weapons/sniper.png",
			"bulletImg": "res/large_bullet.png"
		},
		{
			"name": "Minigun",
			"fireRate": 1,
			"precision": 10,
			"damage": 5,
			"knockback": 2,
			"fireMode": "auto",
			"bulletsPerShot": 1,
			"bulletVelocity": 20,
			"bulletLifeTime": 50,
			"magazinSize": 250,
			"reloadTime": 250,
			"type": "Main Weapon",
			"description": "A extremely fast but very low damaging weapon",
			"img": "res/items/weapons/minigun.png",
			"bulletImg": "res/medium_bullet.png"
		},
		{
			"name": "Minigun +1",
			"fireRate": 1,
			"precision": 10,
			"damage": 6,
			"knockback": 2,
			"fireMode": "auto",
			"bulletsPerShot": 1,
			"bulletVelocity": 20,
			"bulletLifeTime": 50,
			"magazinSize": 250,
			"reloadTime": 250,
			"type": "Main Weapon",
			"description": "an upgraded version of the minigun",
			"img": "res/items/weapons/minigun.png",
			"bulletImg": "res/medium_bullet.png"
		},
		{
			"name": "Minigun +2",
			"fireRate": 1,
			"precision": 10,
			"damage": 7,
			"knockback": 2,
			"fireMode": "auto",
			"bulletsPerShot": 1,
			"bulletVelocity": 20,
			"bulletLifeTime": 50,
			"magazinSize": 250,
			"reloadTime": 250,
			"type": "Main Weapon",
			"description": "an upgraded version of the minigun",
			"img": "res/items/weapons/minigun.png",
			"bulletImg": "res/medium_bullet.png"
		},
		{
			"name": "Minigun +3",
			"fireRate": 1,
			"precision": 10,
			"damage": 9,
			"knockback": 2,
			"fireMode": "auto",
			"bulletsPerShot": 1,
			"bulletVelocity": 20,
			"bulletLifeTime": 50,
			"magazinSize": 250,
			"reloadTime": 250,
			"type": "Main Weapon",
			"description": "an upgraded version of the minigun",
			"img": "res/items/weapons/minigun.png",
			"bulletImg": "res/medium_bullet.png"
		},
		{
			"name": "Minigun +4",
			"fireRate": 1,
			"precision": 10,
			"damage": 11,
			"knockback": 2,
			"fireMode": "auto",
			"bulletsPerShot": 1,
			"bulletVelocity": 30,
			"bulletLifeTime": 50,
			"magazinSize": 350,
			"reloadTime": 250,
			"type": "Main Weapon",
			"description": "an upgraded version of the minigun",
			"img": "res/items/weapons/minigun.png",
			"bulletImg": "res/medium_bullet.png"
		},
		{
			"name": "Minigun +5",
			"fireRate": 1,
			"precision": 10,
			"damage": 13,
			"knockback": 2,
			"fireMode": "auto",
			"bulletsPerShot": 1,
			"bulletVelocity": 30,
			"bulletLifeTime": 50,
			"magazinSize": 350,
			"reloadTime": 200,
			"type": "Main Weapon",
			"description": "Use it, It's kinda OP!",
			"img": "res/items/weapons/minigun.png",
			"bulletImg": "res/medium_bullet.png"
		},
	],
	"hats": [
		{
			"name": "Traffic Cone",
			"type": "hat",
			"description": "An old broken traffic cone. You prbably shouldn't put it on your head, but you're gonna do it anyway.",
			"img": "res/items/hats/traffic_cone_icon.png",
			"ingameImg": "res/items/hats/traffic_cone.png"
		},
		{
			"name": "Bandana",
			"type": "hat",
			"description": "A shiny red bandana. Strap it around your head and go in like a madman!",
			"img": "res/items/hats/bandana_icon.png",
			"ingameImg": "res/items/hats/bandana.png"
		},
		{
			"name": "Bucket",
			"type": "hat",
			"description": "Very usefull for gardening purposes. But it probably works just fine with fighting zombies as well.",
			"img": "res/items/hats/bucket_icon.png",
			"ingameImg": "res/items/hats/bucket.png"
		},
		{
			"name": "Yellow Beanie",
			"type": "hat",
			"description": "A nice and warm beanie",
			"img": "res/items/hats/beanie_1_icon.png",
			"ingameImg": "res/items/hats/beanie_1.png"
		},
		{
			"name": "Blue Beanie",
			"type": "hat",
			"description": "A nice and warm beanie",
			"img": "res/items/hats/beanie_2_icon.png",
			"ingameImg": "res/items/hats/beanie_2.png"
		},
		{
			"name": "Brain",
			"type": "hat",
			"description": "A big hole in your skull exposing your brain. Don't worry though. It's just ketchup!",
			"img": "res/items/hats/brain_icon.png",
			"ingameImg": "res/items/hats/brain.png"
		},
		{
			"name": "Undies",
			"type": "hat",
			"description": "A dirty pair of undies. You could just not strap it around your head and look really stupid, but that would be boring!",
			"img": "res/items/hats/undies_icon.png",
			"ingameImg": "res/items/hats/undies.png"
		},
		{
			"name": "Coocking Pot",
			"type": "hat",
			"description": "You can coock yourself a nice soup with it...  or just put it on your head of course.",
			"img": "res/items/hats/coocking_pot_icon.png",
			"ingameImg": "res/items/hats/coocking_pot.png"
		},
		{
			"name": "Frying Pan",
			"type": "hat",
			"description": "This is totally ript off from PUBG!",
			"img": "res/items/hats/frying_pan_icon.png",
			"ingameImg": "res/items/hats/frying_pan.png"
		},
		{
			"name": "Gentleman's Suit",
			"type": "hat",
			"description": "You want to fight zombies, but still look classy? Then this is for you. Fight like a sir!",
			"img": "res/items/hats/sir_icon.png",
			"ingameImg": "res/items/hats/sir.png"
		},
		{
			"name": "Lederhosn",
			"type": "hat",
			"description": "A Lederhosn fian Itti!",
			"img": "res/items/hats/lederhosn_icon.png",
			"ingameImg": "res/items/hats/lederhosn.png"
		}
	],
	"shopItems" : [
		{
			"name": "Shotgun",
			"type": "Main Weapon",
			"description": "a strong and reliable weapon for close quarter combat",
			"price": 500,
			"rebuyable": false,
			"img": "res/items/weapons/shotgun.png"
		},
		{
			"name": "Shotgun +1",
			"type": "Main Weapon Upgrade",
			"description": "An upgraded version of the shotgun",
			"price": 1500,
			"rebuyable": false,
			"img": "res/items/weapons/shotgun.png"
		},
		{
			"name": "Shotgun +2",
			"type": "Main Weapon Upgrade",
			"description": "An upgraded version of the shotgun",
			"price": 4000,
			"rebuyable": false,
			"img": "res/items/weapons/shotgun.png"
		},
		{
			"name": "Shotgun +3",
			"type": "Main Weapon Upgrade",
			"description": "An upgraded version of the shotgun",
			"price": 10000,
			"rebuyable": false,
			"img": "res/items/weapons/shotgun.png"
		},
		{
			"name": "Shotgun +4",
			"type": "Main Weapon Upgrade",
			"description": "An upgraded version of the shotgun",
			"price": 15000,
			"rebuyable": false,
			"img": "res/items/weapons/shotgun.png"
		},
		{
			"name": "Shotgun +5",
			"type": "Main Weapon Upgrade",
			"description": "The final version of the shotgun. Aim it at anything and it should be gone after you pull the trigger!",
			"price": 20000,
			"rebuyable": false,
			"img": "res/items/weapons/shotgun.png"
		},
		{
			"name": "Bandana",
			"type": "Hat",
			"description": "The final version of the shotgun. It kills stuff and is pretty good at it!",
			"price": 500,
			"rebuyable": false,
			"img": "res/items/hats/bandana_icon.png"
		}
	]
}
