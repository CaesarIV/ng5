import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private names = new BehaviorSubject<any>(['Mithra','Silea','Arog',
  'Therak','Farkion','Lysiac','Vareyan','Faren','Gormog','Bertha',
  'Derk','Raynog','Nosdus','Yamil','Guman','Bosco','Serga','Brava',
  'Peres','Torab','Alon','Lobos','Gotel','Throgos','Abmer','Lorthek',
  'Terlep','Burly','Devol','Quinla','Walrik','Madirn','Ragos','Angul',
  'Jereow','Korra','Vargos','Harlek','Telkos','Merion','Olimar','Garrig',
  'Gorma','Halfer','Berjot','Reyaz','Eleia','Tirok','Vorak','Tilob','Yagosh',
  'Iliac','Miry','Merav','Hajvor','Bjorv','Frula','Jerag','Saryov','Umlan',
  'Licana','Vorg','Verg','Pocil','Rtion','Omrad','Wilnow','Shanron','Bvogar',
  'Ungrak','Nemenesa','Nemenesa','Pherjok','Velethor','Desgar','Resvor','Phatasma',
  'Averil','Gimora','Quitus','Griog','Harvggad','Verted','Qorarion','Soboro','Vehara',
  'Rovar','Teralva','Borag','Samura','Hanelus','Leonel','Ellad','Loreth','Pelola','Fanded',
  'Lifred','Heranak','Irasa','Gribb','Vuges','Varn','Halmot','Verard','Hoya','Brakarnor',
  'Hirann','Hoyvar','Elka','Ponen','Yacory','Kelorn','Wheiser','Lisarolin','Lisarolin',
  'Sodyon','Groen','Hoern','Robian','Hafaaq','Neoel','Eminy',
  'Byern','Degory','Ovan','Quin','Wohle','Ipon','Daslek',
  'Berelon','Jeyon','Leron','Yonn','Lerk','Huruv','Veera']);
  name = this.names.asObservable();

  constructor() { }

  changeName(name){
    this.names.next(name);
  }

}
