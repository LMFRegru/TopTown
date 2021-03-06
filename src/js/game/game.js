function Game(){
  this.saveManager = new SaveManager();
  this.waveManager = new WaveMangaer();
  this.nexus = new Nexus(0, 0);
  this.player = new Player(0, this.nexus.size);
  this.shop = new Shop();
  this.enemies = [];
  this.turrets = [];
  this.bullets = [];
  this.particleSystems = [];
  this.enemyBullets = [];
  this.worldSize = createVector(1500,1500);
  this.camera = new Camera(this.player, 0.4);
  this.gameOver = false;

  this.waveManager.startNextWave();

  this.update = function(){
    this.waveManager.update();

    if (this.player.health < 0 || this.nexus.health < 0) {
      this.gameOver = true;
    }

    for(i = this.particleSystems.length - 1; i >= 0 ; i--){
      this.particleSystems[i].update();

      if(this.particleSystems[i].dead){
        this.particleSystems.splice(i, 1);
      }
    }

    for (i = 0; i < this.bullets.length; i++) {
      this.bullets[i].update();

      if (this.bullets[i].lifeTime <= 0 || detectCollisionPointRect(this.bullets[i], this.nexus)) {
        this.bullets.splice(i, 1);
      }
    }

    for (i = 0; i < this.enemyBullets.length; i++) {
      this.enemyBullets[i].update();
      var hit = false;

      if(detectCollisionRectRect(this.enemyBullets[i], this.player)){
        this.enemyBullets[i].hit(this.player);
        hit = true;
      }

      if(detectCollisionNexus(this.enemyBullets[i], this.nexus) && !hit){
        this.enemyBullets[i].hit(this.nexus);
        hit = true;
      }

      if (this.enemyBullets[i].lifeTime <= 0 && !hit) {
        hit = true;
      }

      if(hit){
        this.particleSystems.push(new SpitterBallExplsion(this.enemyBullets[i].pos.x, this.enemyBullets[i].pos.y, this.enemyBullets[i].vel.heading()));
        this.enemyBullets.splice(i,1);
      }
    }

    for (i = 0; i < this.enemies.length; i++) {
      this.enemies[i].update();

      for (j = 0; j < this.enemies.length; j++) {
        if (detectCollisionRectRect(this.enemies[i], this.enemies[j]) && i != j) {
          var force = createVector(this.enemies[i].pos.x - this.enemies[j].pos.x, this.enemies[i].pos.y - this.enemies[j].pos.y);
          force.setMag(-2);
          this.enemies[i].aplyForce(force);
          force.setMag(2);
          this.enemies[j].aplyForce(force);
        }
      }

      if (detectCollisionRectRect(this.player, this.enemies[i]) && this.player.timeFromLastHit == this.player.hitDelay && this.enemies[i].timeFromLastHit == this.enemies[i].hitSpeed) {
        this.enemies[i].hit(this.player);
        this.enemies[i].timeFromLastHit = 0;
      }

      if (detectCollisionNexus(this.enemies[i], this.nexus)) {
        if (this.enemies[i].timeFromLastHit == this.enemies[i].hitSpeed) {
          this.enemies[i].hit(this.nexus);
          this.enemies[i].timeFromLastHit = 0;
        }

        pushBack(this.enemies[i], this.nexus);
      }

      for (j = 0; j < this.bullets.length; j++) {
        if (detectCollisionPointRect(this.bullets[j], this.enemies[i])) {
          this.particleSystems.push(new EnemyHitEffect(this.bullets[j].pos.x, this.bullets[j].pos.y, this.bullets[j].vel.heading(), this.bullets[j].dmg));
          if(this.bullets[j].img === bullets["crystal"]){
            this.particleSystems.push(new CrystalBulletExplosion(this.bullets[j].pos.x, this.bullets[j].pos.y, this.bullets[j].vel.heading()));
          }
          this.bullets[j].hit(this.enemies[i]);
          this.bullets.splice(j, 1);
        }
      }

      if (this.enemies[i].dead) {
        this.particleSystems.push(new EnemyDeathEffect(this.enemies[i].pos.x, this.enemies[i].pos.y, this.enemies[i].size));
        this.enemies.splice(i, 1);
        this.waveManager.enemiesRemaining --;
      }
    }

    for (var i = 0; i < this.turrets.length; i++) {
      this.turrets[i].update();
    }

    if(!this.gameOver){
      this.player.update();
    }

    if (detectCollisionNexus(this.player, this.nexus)) {
      pushBack(this.player, this.nexus);
      if(insideNexus(this.player, this.nexus)){
        var force = createVector(this.nexus.pos.x - this.player.pos.x, this.nexus.pos.y - this.player.pos.y);
        force.setMag(-5);
        this.player.aplyForce(force);
      }
    }

    this.nexus.update();
  }

  this.render = function(){

    this.camera.update();

    drawGrid();
    drawWorldBounds();

    for (var i = 0; i < this.particleSystems.length; i++) {
      this.particleSystems[i].render();
    }

    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].render();
    }

    for (var i = 0; i < this.enemyBullets.length; i++) {
      this.enemyBullets[i].render();
    }

    for (var i = 0; i < this.enemies.length; i++) {
      this.enemies[i].render();
    }

    for (var i = 0; i < this.turrets.length; i++) {
      this.turrets[i].render();
    }

    this.player.render();

    this.nexus.render();

    if (this.gameOver) {
      drawGameOverScreen();
    }

    drawHealthBar();
    drawNexusHealthBar();
    drawDodgeMeter();
    drawFireRateMeter();
    drawMinimap();
    drawCursor();
    drawReloadBar();
    drawMag();
    drawWeapon();
    drawWaveInfo();
  }

  this.reset = function(){
    this.waveManager = new WaveMangaer();
    this.nexus = new Nexus(0, 0);
    this.player = new Player(0, this.nexus.size);
    this.shop = new Shop();
    this.enemies = [];
    this.turrets = [];
    this.bullets = [];
    this.enemyBullets = [];
    this.worldSize = createVector(1500,1500);
    this.camera = new Camera(this.player, 0.3);
    this.gameOver = false;
    this.waveManager.startNextWave();
  }
}
