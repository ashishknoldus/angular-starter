import {Injectable} from "@angular/core";
import {intern} from "./intern";
/**
 * Created by knoldus on 16/2/17.
 */
@Injectable()
export class AppService {

  interns:intern[] = [{
    name: 'Ashish',
    id: 1269
  },{
    name: 'Vijay',
    id: 1264
  },{
    name: 'Sikha',
    id: 1263
  },{
    name: 'Pusha',
    id: 1261
  }];

}
