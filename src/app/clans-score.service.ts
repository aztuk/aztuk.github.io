import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface iClan {
  name: string,
  score: number,
  links: iLink[],
}
interface iLink {
  text: string,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class ClansScoreService {

  clanScore$: BehaviorSubject<iClan[]> = new BehaviorSubject<iClan[]>(this.initClanScore());

  get clanScore():iClan[] {
    return this.clanScore$.getValue();
  }
  set clanScore(value: iClan[]) {
    this.clanScore$.next(value);
  }

  maxScoreValue$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  get maxScoreValue():number {
    return this.maxScoreValue$.getValue();
  }
  set maxScoreValue(value: number) {
    this.maxScoreValue$.next(value);
  }


  constructor() { }

  applyQuestionScore(clansPonderation: any, points: number) {
    const max = this.getMax(clansPonderation);

    this.clanScore.forEach((clan: iClan) => {
      let newPoints = clansPonderation[clan.name] - points;
      newPoints = max - Math.abs(newPoints);
      clan.score += newPoints;
    });

    this.maxScoreValue+= this.getMax(clansPonderation) * points;
  }

  getMax(clansPond: any): number {
    let max = 0;
    for(let key in clansPond) {
      if(clansPond.hasOwnProperty(key)) {
        let val = clansPond[key];
        if(val > max) {
          max = val;
        }
      }
    }

    return max;
}


  initClanScore(): iClan[]{
    return [
      {
        name: "wolf",
        score: 0,
        links: [
          {
            text: 'Larsman',
            url: 'https://youtu.be/CVTHGwDNLGA'
          },
          {
            text: 'CrazyDentist',
            url: 'https://youtu.be/nj-melINgRg?si=CwNRIy9pbgpgtFWl'
          }
        ],
      },
      {
        name: "stag",
        score: 0,
        links: [
          {
            text: 'LaBaguetteDuGame',
            url: 'https://youtu.be/jpebz8oi8cg?si=N0Tg1ZsqgTToC5zZ'
          },
          {
            text: 'FreezeMyDrip',
            url: 'https://youtu.be/XWGsMVdgIo8?si=X9T6r9Z8vKnG3XVT'
          }],
      },
      {
        name: "goat",
        score: 0,
        links: [],
      },
      {
        name: "raven",
        score: 0,
        links: [
          {
            text: 'LaBaguetteDuGame',
            url: 'https://youtu.be/YQ9zE1HNF2c?si=ZhDzVnk3rvORv3Sb'
          },
          {
            text: 'Larsman',
            url: 'https://youtu.be/u2uhHpNPe7U?si=FovvhhwPH0BJlLUN'
          }],
      },
      {
        name: "bear",
        score: 0,
        links: [
          {
            text: 'LaBaguetteDuGame',
            url: 'https://youtu.be/c0n5wcDL8pM?si=2N0vm6JhoXsaohC8'
          },
          {
            text: 'CrazyDentist',
            url: 'https://youtu.be/YCBMDSnCVn4?si=K15ZdKgYU-R5oP6z'
          }],
      },
      {
        name: "boar",
        score: 0,
        links: [
          {
            text: 'LaBaguetteDuGame',
            url: 'https://youtu.be/dQO5wUGtuXI?si=1qj6fl3_LTeJ4OOE'
          },
          {
            text: 'FreezeMyDrip',
            url: 'https://youtu.be/ChtwnmEBfo0?si=XCfFHFR9zxUavIB9'
          },
          {
            text: 'CrazyDentist',
            url: 'https://youtu.be/Qpp8oUQiPt0?si=SZbd1pRz68-64M70'
          }],
      },
      {name: "snake",
        score: 0,
        links: [{
          text: 'LaBaguetteDuGame',
          url: 'https://youtu.be/x3sGlkF1bpA?si=8DdUv7t05P_90kxh'
        },
        {
          text: 'FreezeMyDrip',
          url: 'https://youtu.be/VakB-RSSjlY?si=bALsygSubpTVH3HB'
        },
        {
          text: 'CrazyDentist',
          url: 'https://youtu.be/nqQ9Tn3gBsY?si=aNPFdAwwDIO0Qy-b'
        },],
      },
      {name: "dragon",
        score: 0,
        links: [{
          text: 'LaBaguetteDuGame',
          url: 'https://youtu.be/US2KHjrLGbc?si=nkuciHWF3oHADt22'
        },{
          text: 'Larsman',
          url: 'https://youtu.be/gMkKOftK1R4?si=CwsfRX0-YQXjWzE0'
        },],
      },
      {name: "horse",
        score: 0,
        links: [{
          text: 'LaBaguetteDuGame',
          url: 'https://youtu.be/w674WQiKIL4?si=dhMKh-Igr8F2X7bl'
        },{
          text: 'Larsman',
          url: 'https://youtu.be/9rOvB4HnIO8?si=y1PL716kRIHxJwt0'
        },{
          text: 'CrazyDentist',
          url: 'https://youtu.be/Ap_9ZFNApUM?si=RpHI-CQPEcOZjQDy'
        }],
      },
      {name: "kraken",
        score: 0,
        links: [{
          text: 'LaBaguetteDuGame',
          url: 'https://youtu.be/6cw7sD_Vulg?si=yHz1C8VN_Kc4woxI'
        },{
          text: 'Larsman',
          url: 'https://youtu.be/rRJvz-FvI7U?si=WcLiGRS-gCzqVNVf'
        }],
      },
      {name: "ox",
        score: 0,
        links: [{
          text: 'LaBaguetteDuGame',
          url: 'https://youtu.be/730jXFegNVk?si=tZnnEbn1FPKaHgcx'
        },{
          text: 'Larsman',
          url: 'https://youtu.be/ldBRIkHMMMg?si=cpW2RdjqjYb6tPF_'
        }],
      },
      {name: "lynx",
        score: 0,
        links: [{
          text: 'LaBaguetteDuGame',
          url: 'https://youtu.be/8xIEhJJb0Mg?si=dyXHJVoQvfsVOEuj'
        }],
      },
      {name: "squirrel",
        score: 0,
        links: [{
          text: 'LaBaguetteDuGame',
          url: 'https://youtu.be/yPbbl8cLjyM?si=Fj1WoG9JMznDofsz'
        }],
      },
      {name: "rat",
        score: 0,
        links: [{
          text: 'Larsman',
          url: 'https://youtu.be/GNHNBxtFrhE?si=Jb5q9YF0yKK6yiZ2'
        }],
      },
      {name: "eagle",
        score: 0,
        links: [{
          text: 'Larsman',
          url: 'https://youtu.be/rXq4r3cyoRU?si=lUudFG4OdfyzIa9f'
        }],
      },
      {name: "lion",
        score: 0,
        links: [{
          text: 'LaBaguetteDuGame',
          url: 'https://youtu.be/yMwCBnTlzkA?si=VWyX-hXTORrT0q8v'
        }],
      },
      {name: "stoat",
        score: 0,
        links: [{
          text: 'LaBaguetteDuGame',
          url: 'https://youtu.be/XVOl_hUzdg4?si=gD6t96cIPKj7RPou'
        },
        {
          text: 'Larsman',
          url: 'https://youtu.be/d4KSrRuugjU?si=8BZmjTlrSIrZ1ZJt'
        }],
      },
      {name: "owl",
      score: 0,
      links: [
        {
          text: 'CrazyDentist',
          url: 'https://youtu.be/eNDMImnONRY?si=oyV8x9Q0IfqfJGuM'
        }],
    }

    ]
  }
}
