var nexusImg;
var turretImg;
var slimeSpit;
var slimeSplat;
var playerImg = [];
var enemyImg = [];
var giantEnemyImg = [];
var spitterEnemyImg = [];
var weapons = [];
var bullets = [];
var hats = [];
var shopItems = [];

function loadImages(){
  nexusImg = new Image();
  nexusImg.src = "res/nexus2.png";

  turretImg = new Image();
  turretImg.src = "res/turret.png"

  slimeSpit = new Image();
  slimeSpit.src = "res/slimeSpit2.png"

  slimeSplat = new Image();
  slimeSplat.src = "res/slime_splat.png"

  bullets["small"] = new Image();
  bullets["small"].src = "res/small_bullet.png"

  bullets["medium"] = new Image();
  bullets["medium"].src = "res/medium_bullet.png"

  bullets["large"] = new Image();
  bullets["large"].src = "res/large_bullet.png"

  bullets["shotgun"] = new Image();
  bullets["shotgun"].src = "res/shotgun_bullet.png"

  bullets["crystal"] = new Image();
  bullets["crystal"].src = "res/crystal_bullet.png"

  for(var i = 0; i < 3; i++){
    playerImg.push(new Image);
    playerImg[i].src = "res/player_"+(i+1)+".png";
  }

  for (var i = 0; i < 4; i++) {
    enemyImg.push(new Image);
    enemyImg[i].src = "res/normal_zombie_"+(i+1)+".png";
  }

  for (var i = 0; i < 4; i++) {
    giantEnemyImg.push(new Image);
    giantEnemyImg[i].src = "res/giant_zombie_"+(i+1)+".png";
  }

  for (var i = 0; i < 3; i++) {
    spitterEnemyImg.push(new Image);
    spitterEnemyImg[i].src = "res/spitter_zombie_"+(i+1)+".png";
  }
}

function loadData(){
  for (var i = 0; i < data.weapons.length; i++) {
    var img = new Image();
    var bulletImg = new Image();
    img.src = data.weapons[i].img;
    bulletImg.src = data.weapons[i].bulletImg;
    weapons[data.weapons[i].name.replace(/ /g,'')] =
      new Weapon(
        data.weapons[i].name,
        data.weapons[i].fireRate,
        data.weapons[i].precision,
        data.weapons[i].damage,
        data.weapons[i].knockback,
        data.weapons[i].fireMode,
        data.weapons[i].bulletsPerShot,
        data.weapons[i].bulletVelocity,
        data.weapons[i].bulletLifeTime,
        data.weapons[i].magazinSize,
        data.weapons[i].reloadTime,
        data.weapons[i].type,
        data.weapons[i].description,
        img,
        bulletImg);
  }
  for (var i = 0; i < Object.keys(data.hats).length; i++) {
    var img = new Image();
    var ingameImg = new Image();
    img.src = data.hats[i].img;
    ingameImg.src = data.hats[i].ingameImg;
    hats[data.hats[i].name.replace(/ /g,'')] =
      new Hat(
        data.hats[i].name,
        data.hats[i].type,
        data.hats[i].description,
        img,
        ingameImg);
  }
  for (var i = 0; i < Object.keys(data.shopItems).length; i++) {
    var img = new Image();
    img.src = data.shopItems[i].img;
    shopItems[data.shopItems[i].name.replace(/ /g,'')] =
      new ShopItem(
        data.shopItems[i].name,
        data.shopItems[i].type,
        data.shopItems[i].description,
        data.shopItems[i].price,
        data.shopItems[i].rebuyable,
        img);
  }
}
