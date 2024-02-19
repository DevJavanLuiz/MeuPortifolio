const spanThemes = document.querySelectorAll('.get-theme');
const sideBarBorder = document.querySelector('.nav-side');
const borderNew = document.querySelectorAll('.new-border');
const skillPer = document.querySelectorAll('.skill-per');
const btns = document.querySelectorAll('.btn');

const sectionBackground = document.querySelectorAll('.background-morning');
const mainBackground = document.querySelector('#main-content');
const colorBlack = document.querySelectorAll('.text-black');

const backgroundSecondLigth = document.querySelectorAll('.second-ligth');


function themePurple() {
    sideBarBorder.style.borderRight = '2px solid #7209b7'

    borderNew.forEach(borderNew => {
        borderNew.style.border = '2px solid #7209b7'
    })
    
    skillPer.forEach(skillPer => {
        skillPer.style.backgroundColor = '#7209b7';
    })
    
    btns.forEach(btns => {
        btns.style.backgroundColor = '#7209b7';
        btns.style.backgroundColor = '#7209b7';
    });
    
    spanThemes.forEach(spanTheme => {
      spanTheme.style.color = '#7209b7';
    });
    colorBlack.forEach(colorBlack => {
        colorBlack.style.color = '#fff';
      });
  }

  function themeOrange() {
    sideBarBorder.style.borderRight = '2px solid #da891e'

    borderNew.forEach(borderNew => {
        borderNew.style.border = '2px solid #da891e'
    })
    
    skillPer.forEach(skillPer => {
        skillPer.style.backgroundColor = '#da891e';
    })
    
    btns.forEach(btns => {
        btns.style.backgroundColor = '#da891e';
        btns.style.backgroundColor = '#da891e';
    });
    
    spanThemes.forEach(spanTheme => {
      spanTheme.style.color = '#da891e';
    });
    colorBlack.forEach(colorBlack => {
        colorBlack.style.color = '#fff';
      });
  }


  function themeBlue() {
    sideBarBorder.style.borderRight = '2px solid #00f5d4'

    borderNew.forEach(borderNew => {
        borderNew.style.border = '2px solid #00f5d4'
    })
    
    skillPer.forEach(skillPer => {
        skillPer.style.backgroundColor = '#00f5d4';
    })
    
    btns.forEach(btns => {
        btns.style.backgroundColor = '#00f5d4';
        btns.style.backgroundColor = '#00f5d4';
    });
    
    spanThemes.forEach(spanTheme => {
      spanTheme.style.color = '#00f5d4';
    });
    colorBlack.forEach(colorBlack => {
        colorBlack.style.color = '#fff';
      });
  }

  function themeNigth() {
    sideBarBorder.style.borderRight = '2px solid #5f5f5f'

    borderNew.forEach(borderNew => {
        borderNew.style.border = '2px solid #5f5f5f'
    })
    
    skillPer.forEach(skillPer => {
        skillPer.style.backgroundColor = '#5f5f5f';
    })
    sectionBackground.forEach(sectionBackground => {
        sectionBackground.style.backgroundColor = '#000814';
      });

      mainBackground.style.backgroundColor = '#000814';
    
    btns.forEach(btns => {
        btns.style.backgroundColor = '#5f5f5f';
        btns.style.backgroundColor = '#5f5f5f';
    });
    
    spanThemes.forEach(spanTheme => {
      spanTheme.style.color = '#5f5f5f';
    });
    colorBlack.forEach(colorBlack => {
        colorBlack.style.color = '#fff';
      });
  }

  function themeMorning() {
    colorBlack.forEach(colorBlack => {
        colorBlack.style.color = '#000814';
      });
    sectionBackground.forEach(sectionBackground => {
        sectionBackground.style.backgroundColor = '#f9f7f3';
      });
      backgroundSecondLigth.forEach(backgroundSecondLigth => {
        backgroundSecondLigth.style.backgroundColor = '#f0ebd8';
      });

      mainBackground.style.backgroundColor = '#f9f7f3';

  }