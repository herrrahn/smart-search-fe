import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SearchService {

  constructor(private httpClient: HttpClient) {
  }

  public async startSearch(): Promise<void> {
    return await this.httpClient.get<void>('http://localhost:8080/s/start').toPromise()
  }

  public async resetSearch(): Promise<void> {
    return await this.httpClient.get<void>('http://localhost:8080/s/reset').toPromise()
  }

  public async search(term): Promise<String[]> {
    return await this.httpClient.get<String[]>('http://localhost:8080/s?t=' + term).toPromise()
  }

  public async debug(): Promise<String[]> {
    return await this.httpClient.get<String[]>('http://localhost:8080/s/debug').toPromise()
    //this.httpClient.get('http://localhost:8080/s/debug').subscribe( data => { console.log(data) })
  }
}
