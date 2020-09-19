import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

export class Estabelecimento {
  constructor(
  public id?: string,
  public index?: number,
  public guid?: string,
  public picture?: string,
  public name?: string,
  public email?: string,
  public phone?: string,
  public address?: string,
  public registered?: string,
  public latitude?: string,
  public longitude?: string,
  ) { }

}
