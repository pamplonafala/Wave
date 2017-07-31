var Wave = function(wave) {
    //angle start
    this.a = 0;
    
	//start position
    this.x = wave? wave.x:-50;
    this.y = wave? wave.y:-50;
	
	//circle number => density
    this.w = wave? wave.w:25;
    this.h = wave? wave.h:25;
	
	//circle distance => scale
    this.sw = wave? wave.waveDist:20;
    this.sh = wave? wave.waveDist:20;
    
    //changes difference between angles => numer of waves produced
    this.waveNum = wave? wave.waveNum:15;
    
    //changes circle size => wave height
    this.waveSize = wave? wave.waveSize:15;
    
    //changes rotation speed => wave speed
    this.spd = wave? wave.waveSpd:5;
};
Wave.prototype.xy = function(x, y, show) {
    fill(255, 0, 0);stroke(255, 0, 0);
    if (show) {
        ellipse(
            this.x + x*this.sw + 
            cos(this.a + x*this.waveNum + y*this.waveNum)*this.waveSize/2,
            
            this.y + y*this.sh + 
            sin(this.a + x*this.waveNum + y*this.waveNum)*this.waveSize/2,
            
            10, 10
        );
    }
    
    return {   
        x: this.x + x*this.sw + 
        cos(this.a + x*this.waveNum + y*this.waveNum)*this.waveSize/2,
     
        y: this.y + y*this.sh + 
        sin(this.a + x*this.waveNum + y*this.waveNum)*this.waveSize/2
    };
};
Wave.prototype.circle = function() {
    noFill();
    for (var i = 0; i < this.w; i++) {
        for (var j = 0; j < this.h; j++) {
            ellipse(
                this.x + i*this.sw, 
                this.y + j*this.sh,
                
                this.waveSize, this.waveSize
            );
        }
    }
};
Wave.prototype.web = function() {
    for (var i = 0; i < this.w-1; i++) {
        for (var j = 0; j < this.h-1; j++) {
            var k = i+1, l=j+1;
			
			//horizontal
            line(
                this.x + i*this.sw + 
                cos(this.a + i*this.waveNum + j*this.waveNum)*this.waveSize/2,
                
                this.y + j*this.sh + 
                sin(this.a + i*this.waveNum + j*this.waveNum)*this.waveSize/2,
                
                this.x + k*this.sw + 
                cos(this.a + k*this.waveNum + j*this.waveNum)*this.waveSize/2,
                
                this.y + j*this.sh + 
                sin(this.a + k*this.waveNum + j*this.waveNum)*this.waveSize/2
            );
            
			//vertical
            line(
                this.x + i*this.sw + 
                cos(this.a + i*this.waveNum + j*this.waveNum)*this.waveSize/2,
                
                this.y + j*this.sh + 
                sin(this.a + i*this.waveNum + j*this.waveNum)*this.waveSize/2,
                
                this.x + i*this.sw + 
                cos(this.a + i*this.waveNum + l*this.waveNum)*this.waveSize/2,
                
                this.y + l*this.sh + 
                sin(this.a + i*this.waveNum + l*this.waveNum)*this.waveSize/2
            );
            
			//diagonal right
            line(
                this.x + i*this.sw + 
                cos(this.a + i*this.waveNum + j*this.waveNum)*this.waveSize/2,
                
                this.y + j*this.sh + 
                sin(this.a + i*this.waveNum + j*this.waveNum)*this.waveSize/2,
                
                this.x + k*this.sw + 
                cos(this.a + k*this.waveNum + l*this.waveNum)*this.waveSize/2,
                
                this.y + l*this.sh + 
                sin(this.a + k*this.waveNum + l*this.waveNum)*this.waveSize/2
            );
        }
    }
};
Wave.prototype.vertex = function(spc) {
    fill(0);stroke(0);
    if (spc > 0) {
        for (var i = 0; i < this.w; i+=spc) {
            for (var j = 0; j < this.h; j+=spc) {
                ellipse(
                    this.x + i*this.sw + 
                    cos(this.a + i*this.waveNum + j*this.waveNum)*this.waveSize/2,
                    
                    this.y + j*this.sh + 
                    sin(this.a + i*this.waveNum + j*this.waveNum)*this.waveSize/2,
                    
                    7, 7
                );
            }
        }
    }
};
Wave.prototype.rotation = function() {
    if (this.a > -360) {
        if (this.spd !== undefined) {
            this.a-=this.spd;
        }
        else {
            this.a--;
        }
    } else {
        this.a = -this.spd;
    }
};
Wave.prototype.draw = function() {
    this.rotation();
};
var wave = new Wave({
	x: -50,
	y: -50,
	w: 25,
	h: 25,
	waveDist: 20,
	waveNum: 20, 
	waveSize: 30, 
	waveSpd: 5
});

draw = function() {
    background(255);
    wave.draw();
    
    stroke(0, 0, 0, 25);
    //wave.circle();
    
    stroke(200);
    //wave.web();
    
    stroke(255, 0, 0);
    //wave.vertex(2);

    wave.xy(4, 4, true);
    wave.xy(6, 6, true);
    wave.xy(8, 8, true);
    wave.xy(10, 10, true);
    wave.xy(12, 12, true);
    wave.xy(14, 14, true);
    wave.xy(16, 16, true);
    wave.xy(18, 18, true);
    wave.xy(20, 20, true);
};
